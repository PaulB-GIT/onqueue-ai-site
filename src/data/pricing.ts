/** Pricing page copy. No prices, minutes, discounts or terms are stated. */

export const meta = {
  title: 'Pricing | ON-QUEUE AI',
  description:
    'ON-QUEUE AI pricing is a custom quote based on your call workflow: setup, ongoing management, and calling and usage costs explained before you begin.',
};

export const hero = {
  eyebrow: 'Pricing',
  title: 'Pricing built around your call workflow.',
  text: 'Your quote depends on what the agent needs to handle, expected call volume, integrations, and the level of ongoing support.',
};

export const plan = {
  title: 'Managed AI Voice Agent',
  price: 'Custom quote',
  description: 'A tailored setup for your business, with the scope and costs explained before you begin.',
  componentsLabel: 'Your quote is made up of three parts',
  components: [
    { icon: 'settings', title: 'Initial Setup', text: 'Configuration, approved business information, workflow design, and agreed testing.' },
    { icon: 'refresh', title: 'Ongoing Management', text: 'The agreed level of monitoring, maintenance, and refinement.' },
    { icon: 'phone', title: 'Calling & Usage', text: 'Estimated usage and any applicable calling, platform, or integration charges.' },
  ],
  footnote: 'Each part is listed separately in your proposal so you can see what applies to your setup.',
  secondaryLabel: 'Discuss your requirements',
} as const;

export const factors = {
  eyebrow: 'Your quote',
  title: 'What shapes your quote?',
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

export const closing = {
  title: 'Let’s design a practical starting point.',
  text: 'Share what you’d like the agent to handle and we’ll scope a setup that fits.',
};
