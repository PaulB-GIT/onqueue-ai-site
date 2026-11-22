/**
 * ─────────────────────────────────────────────────────────────
 *  SITE SETTINGS — the one place for business details.
 *  Edit the values below and every page updates automatically.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  brandName: 'ON-QUEUE AI',
  parentBrand: 'ON-QUEUE VA Services',
  parentUrl: 'https://onqueueva.com',
  tagline: 'A service of ON-QUEUE VA Services.',
  email: 'contact@onqueueva.com',
  demoEmailSubject: 'ON-QUEUE AI Demo Request',

  /**
   * Search engines.
   * Keep `false` while you review previews. Change to `true` only when the
   * site is approved and live on its real domain.
   * Note: "noindex" only asks search engines not to list pages.
   * It is NOT a password and does not stop people from visiting the URL.
   */
  allowIndexing: false,

  /**
   * Legal pages. Leave as `null` until you have approved URLs.
   * When set, links appear in the footer automatically.
   * The Privacy Policy page lives at /privacy-policy/ (footer link only).
   */
  privacyUrl: '/privacy-policy/' as string | null,
  termsUrl: null as string | null,
} as const;

/**
 * LOGO
 * Official artwork: brand-originals/ON-QUEUE AI Logo on White.png (2172 × 724).
 * brand-originals/ON-QUEUE AI Logo on White - trimmed.png (2110 × 514) is the
 * same file with only the empty white margin removed (approved by Paul,
 * 2026-11-22). The artwork itself is untouched.
 * The files in public/brand/ are high-quality downsized copies of the trimmed
 * file, so the header doesn't download a large image.
 *
 * The artwork has navy lettering on a white background, so on the dark header
 * and footer it sits on a clean white panel (handled automatically).
 *
 * To replace the logo later: put new files in public/brand/, update the paths
 * and the original pixel size below. If you get a version designed for dark
 * backgrounds, add it as `srcOnDark` and the white panel is no longer used.
 */
export const logo = {
  temporary: false,
  src: '/brand/onqueue-ai-logo-88.png' as string | null,
  /** Sharper copies for high-resolution screens, as [file, density] pairs. */
  srcset: [
    ['/brand/onqueue-ai-logo-88.png', '2x'],
    ['/brand/onqueue-ai-logo-132.png', '3x'],
  ] as [string, string][],
  srcOnDark: null as string | null,
  /** The trimmed artwork's pixel size, used only to keep proportions exact. */
  width: 2110,
  height: 514,
  alt: 'ON-QUEUE AI — AI Voice Agents',
  /** Header display height in pixels. Width scales automatically. */
  headerHeight: 44,
};

export const nav = [
  { label: 'Services', href: '/' },
  { label: 'How It Works', href: '/how-it-works/' },
  { label: 'Pricing', href: '/pricing/' },
] as const;

/** Every BOOK A DEMO button points here (the demo section on the homepage). */
export const demoHref = '/#book-a-demo';

/** Properly encoded email link with the demo subject line. */
export const demoMailto = `mailto:${site.email}?subject=${encodeURIComponent(site.demoEmailSubject)}`;
