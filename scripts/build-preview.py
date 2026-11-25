"""Bundle the built site (dist/) into ONE self-contained HTML file for an in-chat preview.
Usage: python3 scripts/build-preview.py dist preview/onqueue-ai-preview.html
All four pages become views switched by #home, #how-it-works, #pricing, #privacy-policy."""
import re, sys, base64, pathlib
dist = pathlib.Path(sys.argv[1]); out = pathlib.Path(sys.argv[2])
pages = [('home', 'index.html'), ('how-it-works', 'how-it-works/index.html'),
         ('pricing', 'pricing/index.html'), ('privacy-policy', 'privacy-policy/index.html')]
route = {'/': '#home', '/how-it-works/': '#how-it-works', '/pricing/': '#pricing',
         '/privacy-policy/': '#privacy-policy', '/#book-a-demo': '#book-a-demo'}
def b64(p, mime): return f"data:{mime};base64," + base64.b64encode(p.read_bytes()).decode()

css_files, inline_styles, mains, scripts = [], [], [], []
header = footer = None
for name, f in pages:
    html = (dist / f).read_text()
    for href in re.findall(r'<link rel="stylesheet" href="([^"]+)">', html):
        if href not in css_files: css_files.append(href)
    for st in re.findall(r'<style>(.*?)</style>', html, re.S):
        if st not in inline_styles: inline_styles.append(st)
    for sc in re.findall(r'<script type="module">(.*?)</script>', html, re.S):
        if sc not in scripts: scripts.append(sc)
    # Larger scripts are emitted as separate files: inline those too
    for src in re.findall(r'<script type="module" src="([^"]+)"></script>', html):
        sc = (dist / src.lstrip('/')).read_text()
        if sc not in scripts: scripts.append(sc)
    if header is None:
        header = re.search(r'<header class="site-header".*?</header>', html, re.S).group(0)
        footer = re.search(r'<footer class="site-footer.*?</footer>', html, re.S).group(0)
    main = re.search(r'<main id="main" tabindex="-1">(.*)</main>', html, re.S).group(1)
    title = re.search(r'<title>(.*?)</title>', html).group(1)
    hidden = '' if name == 'home' else ' hidden'  # home stays visible even without JavaScript
    mains.append(f'<div class="pv-page" data-page="{name}" data-title="{title}"{hidden}>{main}</div>')

css = ''
for href in css_files:
    css += (dist / href.lstrip('/')).read_text() + '\n'
css += '\n'.join(inline_styles)
# Keep only latin font faces, inlined as data URIs
def font_face(m):
    block = m.group(0)
    u = re.search(r'url\((/_astro/[^)]+-latin-wght-normal[^)]+\.woff2)\)', block)
    if not u: return ''
    return block.replace(u.group(1), b64(dist / u.group(1).lstrip('/'), 'font/woff2'))
css = re.sub(r'@font-face\{[^}]*\}', font_face, css)

body = header + '<main id="main" tabindex="-1">' + ''.join(mains) + '</main>' + footer
def fix_href(m):
    h = m.group(1)
    return f'href="{route.get(h, h)}"'
body = re.sub(r'href="([^"]+)"', fix_href, body)
# Embed sample-call recordings so the single-file preview can play them
AUDIO_MIME = {'.mp3': 'audio/mpeg', '.m4a': 'audio/mp4', '.wav': 'audio/wav', '.ogg': 'audio/ogg'}
body = re.sub(r'src="(/audio/[^"]+)"', lambda m: f'src="{b64(dist / m.group(1).lstrip("/"), AUDIO_MIME.get(pathlib.Path(m.group(1)).suffix.lower(), "audio/mpeg"))}"', body)
body = body.replace(' aria-current="page"', '')
for img in set(re.findall(r'/brand/[\w.-]+\.png', body)):
    body = body.replace(img, b64(dist / img.lstrip('/'), 'image/png'))
body = body.replace('<a href="https://', '<a target="_blank" href="https://')

router = r"""
(function(){
  var views=[].slice.call(document.querySelectorAll('.pv-page'));
  var names=views.map(function(v){return v.dataset.page});
  var current='home';
  function show(){
    var h=(location.hash||'#home').slice(1), page=current, target=null;
    if(names.indexOf(h)>-1){page=h}else{
      target=document.getElementById(h);
      var p=target&&target.closest('.pv-page'); if(p)page=p.dataset.page;
    }
    current=page;
    views.forEach(function(v){v.hidden=v.dataset.page!==page});
    document.title=views[names.indexOf(page)].dataset.title;
    document.querySelectorAll('.site-nav__link').forEach(function(a){
      if(a.getAttribute('href')==='#'+page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
    });
    if(target){requestAnimationFrame(function(){target.scrollIntoView({behavior:'instant'})})}else{window.scrollTo({top:0,behavior:'instant'})}
  }
  window.addEventListener('hashchange',show); show();
})();
"""
extra_css = """
.site-header{top:env(safe-area-inset-top,0px)}
body::before{content:"";position:fixed;inset:0 0 auto;height:env(safe-area-inset-top,0px);z-index:60;background:#071B33}
.pv-note{background:#050f1f;color:#b8c4d6;font:500 12px/1.4 'Inter Variable',system-ui,sans-serif;text-align:center;padding:8px 16px;border-bottom:1px solid rgba(184,196,214,.16)}
"""
note = '<div class="pv-note">Private preview of the ON-QUEUE AI website. Not published. Email buttons may not open from inside this preview.</div>'
doc = (f'<title>ON-QUEUE AI Website Preview</title>\n<meta name="robots" content="noindex, nofollow">\n'
       + (f'<link rel="icon" type="image/png" href="{b64(dist / "favicon-32x32.png", "image/png")}">\n' if (dist / "favicon-32x32.png").exists() else '')
       + f'<style>{css}\n{extra_css}</style>\n<script>document.documentElement.classList.add("js");</script>\n'
       f'<a class="skip-link" href="#main">Skip to content</a>\n{note}\n{body}\n'
       + ''.join(f'<script type="module">{s}</script>' for s in scripts)
       + f'<script>{router}</script>\n')
doc = re.sub(r'<script type="module" src="[^"]+"></script>', '', doc)
out.parent.mkdir(parents=True, exist_ok=True); out.write_text(doc)
print(out, round(len(doc)/1024), 'KB')
