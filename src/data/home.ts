/**
 * Homepage (Services) copy. Edit text here — the page layout stays the same.
 */

export const meta = {
  title: 'ON-QUEUE AI | AI Voice Agents for Business',
  description:
    'Managed AI voice agents that welcome callers, answer approved questions, capture inquiries and help suitable callers book appointments, configured around your business.',
};

export const hero = {
  eyebrow: 'AI Voice Agents for Business',
  titleLine1: 'Better Conversations.',
  titleLine2: 'More Opportunities.',
  text: 'Welcome callers, answer common questions, and help turn suitable inquiries into booked appointments—with AI voice agents configured around your business.',
};

export const services = {
  eyebrow: 'Services',
  title: 'A helpful first response. A clear next step.',
  intro:
    'Choose the conversations you want help with. Each AI voice agent is set up around your approved information, your schedule and the way your team works.',
  items: [
    {
      icon: 'receptionist',
      title: 'AI Receptionist',
      description: 'Welcome callers, understand why they’re calling, and direct them to the right next step.',
      examples: ['Greeting callers by your business name', 'Identifying the reason for a call', 'Directing callers to the right person or option'],
    },
    {
      icon: 'message',
      title: 'AI Answering Service',
      description: 'Capture messages and contact details when your team is unavailable.',
      examples: ['Taking messages after hours', 'Recording callback details', 'Passing messages to your team'],
    },
    {
      icon: 'support',
      title: 'AI Customer Service',
      description: 'Answer approved questions and collect support requests, with human escalation when needed.',
      examples: ['Answering questions about hours or service areas', 'Logging a support request', 'Escalating issues that need a person'],
    },
    {
      icon: 'calendar',
      title: 'Appointment Setting & Lead Qualification',
      description: 'Gather relevant details and help suitable prospects book an appointment through a connected calendar.',
      examples: ['Asking your qualifying questions', 'Offering available times from a connected calendar', 'Noting details for your team before the visit'],
    },
    {
      icon: 'outbound',
      title: 'Outbound Follow-Up',
      description: 'Follow up with eligible contacts using approved messaging and campaign rules.',
      examples: ['Following up on recent inquiries', 'Appointment reminders for eligible contacts', 'Re-engaging past inquiries, where permitted'],
    },
  ],
  note: 'Availability, call routing and integrations depend on the setup we agree with you. We’ll confirm what is supported for your systems before anything goes live.',
} as const;

export const conversation = {
  eyebrow: 'In conversation',
  title: 'Natural, clear and honest about being AI.',
  label: 'Example conversation — not a live call.',
  turns: [
    { speaker: 'agent', name: 'AI Receptionist', text: 'Thanks for calling. I’m the company’s AI receptionist. How can I help today?' },
    { speaker: 'caller', name: 'Caller', text: 'We’re thinking about remodeling our kitchen.' },
    { speaker: 'agent', name: 'AI Receptionist', text: 'I can help with that. What area is the property in?' },
  ],
  points: [
    { icon: 'conversation', title: 'Natural, concise responses', text: 'Short, friendly replies that keep the call moving.' },
    { icon: 'list', title: 'Relevant follow-up questions', text: 'Asks for the details your team actually needs.' },
    { icon: 'bot', title: 'Clear AI identification', text: 'Callers are told they’re speaking with an AI receptionist.' },
    { icon: 'handoff', title: 'Human handoff when needed', text: 'Routes or escalates to your team based on your rules.' },
  ],
} as const;

export const industries = {
  eyebrow: 'Example applications',
  title: 'Configured for the way your business works.',
  intro: 'A few examples of how an AI voice agent could support businesses like yours. Every setup is configured to your own services and rules.',
  items: [
    { icon: 'hardhat', title: 'Construction & Remodeling', text: 'Collect project type, property location and timeline from new inquiries, then request a site consultation.' },
    { icon: 'home', title: 'Home Services', text: 'Capture service requests and preferred visit times so your team can schedule technicians.' },
    { icon: 'sparkle', title: 'Cleaning & Janitorial', text: 'Gather property size, cleaning frequency and location details to prepare a quote request.' },
    { icon: 'building', title: 'Real Estate & Property Management', text: 'Take maintenance requests or viewing inquiries and pass them to the right contact.' },
    { icon: 'car', title: 'Automotive Services', text: 'Answer approved questions about hours and services, and help callers request a service appointment.' },
    { icon: 'scale', title: 'Law Firms', text: 'Capture new-inquiry details, help callers book a consultation, and route calls to the right member of staff.' },
    { icon: 'key', title: 'Car Rental', text: 'Handle reservation inquiries, answer availability questions from approved information, and hand off to staff when needed.' },
  ],
} as const;

export const humanSupport = {
  eyebrow: 'AI + human support',
  title: 'Automation with a human next step.',
  text: 'Routine conversations can be handled within the scope you approve. Complex, sensitive or unresolved requests can be routed to your team or to an agreed human support option.',
  points: [
    'You decide which topics the AI agent handles.',
    'You set when and how calls are transferred or escalated.',
    'Callers can ask for a person, and the agent follows your escalation rules.',
  ],
  parent: 'ON-QUEUE AI is part of ON-QUEUE VA Services’ approach to combining helpful people with practical technology.',
} as const;

export const demo = {
  eyebrow: 'Book a demo',
  title: 'See how it could work for your business.',
  text: 'Tell us about your calls, your team, and the tasks you’d like help with. We’ll discuss a suitable setup and arrange a demonstration.',
  points: [
    'The types of calls you receive',
    'The tasks you’d like an AI agent to handle',
    'Your hours, team and current tools',
  ],
} as const;
