/**
 * Pricing page copy. Prices, minutes and rates below are Paul's approved figures
 * (24 Nov 2026). Change them here and every part of the page updates:
 * the plan cards, the comparison table and the FAQ answers.
 */

export const meta = {
  title: 'Pricing | ON-QUEUE AI',
  description:
    'ON-QUEUE AI plans: Starter at $497/month and Growth at $997/month, each with included minutes, a one-time setup and ongoing management.',
};

export const hero = {
  eyebrow: 'Pricing',
  title: 'Pricing built around your call workflow.',
  text: 'Two managed monthly packages, each with included minutes, conversation script improvements and ongoing management. Setup is a one-time fee, billed separately.',
};

export const plans = [
  {
    id: 'starter',
    name: 'Starter',
    monthly: '$497',
    perMinute: 'Approx. $0.50 per included minute',
    setupLine: '$997 one-time setup · Additional minutes $0.55/min',
    features: [
      '1,000 included minutes per monthly billing cycle',
      'Effective package rate: approximately $0.50 per included minute',
      'Additional minutes: $0.55/minute',
      '2 rounds of conversation script improvements per month',
      '$997 one-time setup, billed separately',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    monthly: '$997',
    perMinute: 'Approx. $0.45 per included minute',
    setupLine: '$1,497 one-time setup · Additional minutes $0.50/min',
    features: [
      '2,200 included minutes per monthly billing cycle',
      'Effective package rate: approximately $0.45 per included minute',
      'Additional minutes: $0.50/minute',
      '3 rounds of conversation script improvements per month, shared across the account',
      '$1,497 one-time setup, billed separately',
    ],
  },
] as const;

export const plansSection = {
  eyebrow: 'Plans',
  title: 'Choose your monthly package',
  note: 'Effective per-minute figures are calculated using the full included allowance and exclude setup fees. Each plan is a fixed monthly package that also includes the listed management and support services.',
  secondaryLabel: 'Discuss your requirements',
};

/** Services included in every plan (shown under the cards). */
export const included = {
  label: 'Every plan includes',
  components: [
    { icon: 'settings', title: 'Initial Setup', text: 'Configuration, approved business information, workflow design, and agreed testing. One-time fee, billed separately.' },
    { icon: 'refresh', title: 'Ongoing Management', text: 'The agreed level of monitoring, maintenance, and refinement, including your monthly script improvement rounds.' },
    { icon: 'phone', title: 'Calling & Usage', text: 'Your plan’s included minutes each monthly billing cycle, with additional minutes at your plan’s rate.' },
  ],
} as const;

/** Comparison table rows: [label, Starter, Growth]. `true` shows a tick. */
export const comparison = {
  eyebrow: 'Compare',
  title: 'Starter and Growth side by side',
  rows: [
    ['Monthly price', '$497/month', '$997/month'],
    ['One-time setup (billed separately)', '$997', '$1,497'],
    ['Included minutes per monthly billing cycle', '1,000', '2,200'],
    ['Effective package rate', 'Approx. $0.50 per included minute', 'Approx. $0.45 per included minute'],
    ['Additional minutes', '$0.55/minute', '$0.50/minute'],
    ['Conversation script improvements', '2 rounds per month', '3 rounds per month, shared across the account'],
    ['Initial setup and configuration', true, true],
    ['Ongoing management and support', true, true],
  ] as (readonly [string, string | true, string | true])[],
} as const;

export const factors = {
  eyebrow: 'Choosing a plan',
  title: 'What we’ll look at together',
  items: [
    { icon: 'route', text: 'Inbound, outbound, or combined workflows' },
    { icon: 'clock', text: 'Expected monthly call minutes' },
    { icon: 'mapPin', text: 'Number of locations and agents' },
    { icon: 'plug', text: 'Calendar or CRM integrations' },
    { icon: 'list', text: 'Complexity of questions and qualification rules' },
    { icon: 'handoff', text: 'Transfer and escalation requirements' },
    { icon: 'users', text: 'Ongoing management needs' },
  ],
} as const;

export const proposal = {
  eyebrow: 'Your proposal',
  title: 'What your proposal will clarify',
  intro: 'Before you begin, your written proposal sets out:',
  items: [
    'Setup scope',
    'Recurring charges',
    'Included usage, if applicable',
    'Additional usage rates',
    'Third-party charges',
    'Support responsibilities',
    'Agreed service terms',
  ],
} as const;

export const faq: {
  eyebrow: string;
  title: string;
  items: { q: string; a: string; link?: { href: string; label: string } }[];
} = {
  eyebrow: 'Pricing FAQ',
  title: 'Questions about plans and billing',
  items: [
    {
      q: 'What’s the difference between Starter and Growth?',
      a: 'Starter is $497/month with 1,000 included minutes per monthly billing cycle and 2 rounds of conversation script improvements per month. Growth is $997/month with 2,200 included minutes per monthly billing cycle and 3 rounds of conversation script improvements per month, shared across the account.',
    },
    {
      q: 'Is setup included in the monthly price?',
      a: 'No. Setup is a one-time fee, billed separately: $997 for Starter and $1,497 for Growth.',
    },
    {
      q: 'What happens if I use more than my included minutes?',
      a: 'Additional minutes are billed at $0.55/minute on Starter and $0.50/minute on Growth.',
    },
    {
      q: 'How are the per-minute figures calculated?',
      a: 'Effective per-minute figures are calculated using the full included allowance and exclude setup fees: about $0.50 per included minute on Starter ($497 ÷ 1,000 minutes) and about $0.45 on Growth ($997 ÷ 2,200 minutes). Each plan is a fixed monthly package that also includes the listed management and support services.',
    },
    {
      q: 'What is a round of conversation script improvements?',
      a: 'Each round is an update to your agent’s conversation script. Starter includes 2 rounds per month. Growth includes 3 rounds per month, shared across the account.',
    },
    {
      q: 'Am I locked into a long-term contract?',
      a: 'No. Every plan is month-to-month, with no long-term contract. You can cancel at any time with 30 days’ notice. We’d rather earn your business every month than lock you in.',
    },
    {
      q: 'How long does onboarding take?',
      a: 'We take care of the setup for you: writing the conversation script, configuring the voice, connecting your CRM, setting up call routing, and testing. Your part is a single 30 to 60 minute call to tell us about your business.',
      link: { href: '/how-it-works/', label: 'See the full onboarding process.' },
    },
    {
      q: 'Can I switch plans later?',
      a: 'Yes. You can upgrade or downgrade at any time, with no penalties or fees. Upgrades made mid-cycle are prorated. Downgrades take effect at the start of your next billing period. Your AI agent’s configuration and call history carry over when you switch.',
    },
  ],
} as const;

export const closing = {
  title: 'Let’s design a practical starting point.',
  text: 'Share what you’d like the agent to handle and we’ll help you choose the right plan.',
};
