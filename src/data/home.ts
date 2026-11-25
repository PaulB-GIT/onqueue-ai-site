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

/**
 * SAMPLE CALLS SHOWCASE (homepage, below Services).
 * Illustrative sample dialogue only. Not real calls, customers or results.
 * Each service has: a tab label + icon, the call lines, a result line and status chips.
 * `chipIcons` must use names from src/components/Icon.astro.
 * `recording`: optional real sample-call audio with a timed transcript. Leave as
 * `null` and no player is shown for that service (never add placeholder audio).
 */
export interface Recording {
  /** Audio file in public/audio/, e.g. '/audio/customer-support.mp3'. */
  src: string;
  /** Short note shown beside the player. */
  note: string;
  /** Transcript lines. `at` = seconds into the recording when the line starts. */
  transcript: { at: number; speaker: 'agent' | 'caller'; text: string }[];
}

export const showcase = {
  eyebrow: 'Sample calls',
  title: 'See how each service handles a call.',
  intro: 'Choose a service to see an example conversation. The preview moves to the next service on its own.',
  label: 'Illustrative sample, not a live call',
  slideSeconds: 10,
  items: [
    {
      id: 'appointments',
      tab: 'Appointment setting',
      icon: 'calendar',
      startAt: 64,
      caller: 'JR',
      recording: null as Recording | null,
      lines: [
        { speaker: 'agent', text: 'Hi Jordan, this is the AI assistant for the remodeling team. I’m following up on the estimate you requested. Is now a good time?' },
        { speaker: 'caller', text: 'Yes. Thursday afternoon works best for me.' },
        { speaker: 'agent', text: 'Thursday at 2:30 PM is open. Shall I book that for you?' },
        { speaker: 'caller', text: 'That’s perfect, thank you.' },
      ],
      result: 'Booked for Thursday, 2:30 PM. Details noted for the team.',
      chips: [
        { icon: 'phone', label: 'Connected' },
        { icon: 'check', label: 'Qualified' },
        { icon: 'calendar', label: 'Calendar checked' },
        { icon: 'check', label: 'Booked' },
      ],
    },
    {
      id: 'receptionist',
      tab: 'Receptionist',
      icon: 'receptionist',
      startAt: 18,
      caller: 'SL',
      recording: null as Recording | null,
      lines: [
        { speaker: 'agent', text: 'Thanks for calling. I’m the clinic’s AI receptionist. How can I help today?' },
        { speaker: 'caller', text: 'Hi, I have a question about my bill.' },
        { speaker: 'agent', text: 'I can connect you with our billing team. May I have your name first?' },
        { speaker: 'caller', text: 'Sure, it’s Sam Lee.' },
      ],
      result: 'Routed to billing with the caller’s name and reason for calling.',
      chips: [
        { icon: 'phone', label: 'Greeted' },
        { icon: 'check', label: 'Reason identified' },
        { icon: 'list', label: 'Details captured' },
        { icon: 'route', label: 'Routed' },
      ],
    },
    {
      id: 'answering',
      tab: 'Answering service',
      icon: 'message',
      startAt: 41,
      caller: 'MP',
      recording: null as Recording | null,
      lines: [
        { speaker: 'agent', text: 'You’ve reached the plumbing team after hours. I’m the AI answering service. Can I take a message?' },
        { speaker: 'caller', text: 'My water heater is leaking. Could someone call me back first thing tomorrow?' },
        { speaker: 'agent', text: 'Of course. What’s the best number to reach you?' },
        { speaker: 'caller', text: 'This number is fine. It’s Maria.' },
      ],
      result: 'Message and callback details passed to the team for the morning.',
      chips: [
        { icon: 'phone', label: 'Answered' },
        { icon: 'message', label: 'Message taken' },
        { icon: 'clock', label: 'Callback noted' },
        { icon: 'check', label: 'Team notified' },
      ],
    },
    {
      id: 'support',
      tab: 'Customer support',
      icon: 'support',
      startAt: 27,
      caller: 'DK',
      recording: null as Recording | null,
      lines: [
        { speaker: 'agent', text: 'Hi, I’m the AI assistant for the rental desk. How can I help?' },
        { speaker: 'caller', text: 'What time do you open on Saturday?' },
        { speaker: 'agent', text: 'We open at 8 AM on Saturdays. Is there anything else I can help with?' },
        { speaker: 'caller', text: 'I also need to change my booking.' },
      ],
      result: 'Change request logged and passed to a team member to follow up.',
      chips: [
        { icon: 'checkCircle', label: 'Question answered' },
        { icon: 'list', label: 'Request logged' },
        { icon: 'handoff', label: 'Escalated to team' },
      ],
    },
    {
      id: 'outbound',
      tab: 'Outbound follow-up',
      icon: 'outbound',
      startAt: 35,
      caller: 'AM',
      recording: null as Recording | null,
      lines: [
        { speaker: 'agent', text: 'Hi Alex, this is the law office’s AI assistant. You recently asked about a consultation. Is now a good time?' },
        { speaker: 'caller', text: 'Yes, I’d still like to book one.' },
        { speaker: 'agent', text: 'Great. I’ll note that, and the team will confirm a time with you.' },
        { speaker: 'caller', text: 'Thanks, that works.' },
      ],
      result: 'Interest confirmed. The team will confirm a consultation time.',
      chips: [
        { icon: 'phone', label: 'Connected' },
        { icon: 'check', label: 'Interest confirmed' },
        { icon: 'list', label: 'Notes saved' },
        { icon: 'handoff', label: 'Team notified' },
      ],
    },
  ],
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
