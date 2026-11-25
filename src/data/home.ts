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
      caller: 'PB',
      recording: {
        src: '/audio/appointment-setting.mp3',
        note: 'A real test call with an ON-QUEUE AI voice agent for a remodeling business. The address and phone number are bleeped. Transcript made from the audio.',
        transcript: [
          { at: 0.0, speaker: 'agent', text: 'Thanks for calling Tabernacle Remodeling, Inc. This is Ligaya, an AI assistant, and this call may be recorded. How can I help you today?' },
          { at: 9.0, speaker: 'caller', text: 'Hi, Ligaya. So my name is Paul, and I’m... We’re thinking about remodeling our kitchen, but we are still figuring things out.' },
          { at: 21.0, speaker: 'agent', text: 'Hi, Paul. Thanks for sharing that with me. Remodeling a kitchen is a big step, and it’s totally normal to still be figuring things out. Are you at the ideas stage, or do you already have some plans or designs in mind?' },
          { at: 39.5, speaker: 'caller', text: 'I’m still at the ideas stage. It feels cramped because we would like more counter space, but I don’t know whether we need to change the whole layout.' },
          { at: 53.5, speaker: 'agent', text: 'Oh, I hear you, Paul. It can feel overwhelming when you know what you want to improve, but you’re not sure how big of a change you need. Wanting more counter space is a really common reason people start thinking about a remodel. Would you like to set up a consultation with one of our team members? They can talk through your ideas, look at your current layout, and help you figure out what’s possible. No pressure to commit to anything. If that sounds good, I can help you get that scheduled.' },
          { at: 78.5, speaker: 'caller', text: 'Alright, yeah, that sounds good.' },
          { at: 81.5, speaker: 'agent', text: 'Great, I’m glad to hear that. May I get your best contact number just in case the team needs to reach you about the consultation? And is your kitchen in the greater New York area?' },
          { at: 92.5, speaker: 'caller', text: 'Yes, I’m located in New York. My address is… I’m located at [address removed], New York, New York [zip removed].' },
          { at: 111.2, speaker: 'agent', text: 'Thanks, Paul. And just to confirm, your address is [address removed], New York, NY [zip removed]. Could you share the best phone number for the team to reach you? I’ll read it back to make sure I have it right.' },
          { at: 124.2, speaker: 'caller', text: 'Yeah, [number removed].' },
          { at: 129.2, speaker: 'agent', text: 'Thanks, Paul. So your number is [number removed]. Is that correct? And just to double check, you’re in the Eastern Time Zone, right?' },
          { at: 139.7, speaker: 'caller', text: 'Right. Yeah, my phone number is correct.' },
          { at: 144.7, speaker: 'agent', text: 'Perfect. Thanks for confirming that, Paul. I’ll check our team’s availability for a free in-home remodeling estimate. One moment while I look for some open times. We have a few openings for a free in-home estimate today. Would Wednesday, November 25th, at 11:30 a.m. or noon work for you? Both are in Eastern Time. Let me know which one fits your schedule best.' },
          { at: 164.7, speaker: 'caller', text: 'What time again? I’m sorry.' },
          { at: 167.7, speaker: 'agent', text: 'No problem at all, Paul. The available times are 11:30 a.m. or 12 noon today, both in Eastern Time. Would either of those work for your consultation?' },
          { at: 176.7, speaker: 'caller', text: '11 a.m. is fine.' },
          { at: 179.7, speaker: 'agent', text: 'Just to clarify, the earliest available slot is at 11:30 a.m., not 11. Would 11:30 this morning work for you?' },
          { at: 186.7, speaker: 'caller', text: 'Oh yeah, 11:30, yes. Thank you.' },
          { at: 189.7, speaker: 'agent', text: 'Booking your consultation for 11:30 a.m. today. Your free in-home remodeling estimate is confirmed for today, Wednesday, November 25th, at 11:30 a.m. Eastern Time. Our team will meet you at [address removed]. Is there anything else you’d like to share about your kitchen or any other questions before we wrap up?' },
          { at: 208.7, speaker: 'caller', text: 'I think that’s all for now.' },
          { at: 212.7, speaker: 'agent', text: 'Thanks so much, Paul. We look forward to meeting you later this morning. If you think of any other questions, just give us a call. Have a great day.' },
          { at: 222.6, speaker: 'caller', text: 'Have a great day. Thank you.' },
          { at: 225.6, speaker: 'agent', text: 'Take care, Paul. Goodbye.' },
        ],
      } as Recording | null,
      industry: 'Construction & Remodeling' as string | null,
      lines: [
        { speaker: 'agent', text: 'Thanks for calling the remodeling team. I’m the AI assistant. What kind of project are you planning?' },
        { speaker: 'caller', text: 'A kitchen remodel on the north side of town. We’d like to start in the spring.' },
        { speaker: 'agent', text: 'Thanks, that helps. Thursday at 2:30 PM is open for an in-home estimate. Shall I book it?' },
        { speaker: 'caller', text: 'Yes, please book it.' },
      ],
      result: 'In-home remodeling estimate booked for 11:30 AM, with the project details noted for the team.',
      chips: [
        { icon: 'phone', label: 'Connected' },
        { icon: 'list', label: 'Project details captured' },
        { icon: 'phone', label: 'Contact confirmed' },
        { icon: 'check', label: 'Estimate booked' },
      ],
    },
    {
      id: 'receptionist',
      tab: 'Receptionist',
      icon: 'receptionist',
      startAt: 18,
      caller: 'SL',
      recording: null as Recording | null,
      industry: null as string | null,
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
      industry: null as string | null,
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
      industry: null as string | null,
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
      industry: null as string | null,
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
