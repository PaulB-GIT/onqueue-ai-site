/** How It Works page copy. */

export const meta = {
  title: 'How It Works | ON-QUEUE AI',
  description:
    'How ON-QUEUE AI sets up a managed AI voice agent: understanding your workflow, configuring the agent, testing realistic scenarios, then launching and refining.',
};

export const hero = {
  eyebrow: 'How it works',
  title: 'Your business. Your conversations. A considered setup.',
  text: 'We work with you to define what your AI agent should handle, how it should respond, and when a person should step in.',
};

export const steps = {
  eyebrow: 'The process',
  title: 'Four steps from first conversation to launch.',
  items: [
    { icon: 'conversation', title: 'Understand Your Workflow', text: 'Discuss call types, business hours, common questions, qualification requirements, and appointment rules.' },
    { icon: 'settings', title: 'Configure Your Agent', text: 'Set approved business information, conversation tone, escalation rules, and supported integrations.' },
    { icon: 'test', title: 'Test Realistic Scenarios', text: 'Review normal calls, interruptions, unclear answers, complaints, failed bookings, and requests for a person.' },
    { icon: 'refresh', title: 'Launch and Refine', text: 'Introduce the agreed workflow and review call outcomes to identify improvements.' },
  ],
  note: 'Every setup is different, so timelines are agreed with you once we understand your requirements.',
} as const;

export const needs = {
  eyebrow: 'Getting started',
  title: 'What we need from you',
  intro: 'A few essentials help us configure an agent that sounds like your business and follows your rules.',
  items: [
    'Business and service information',
    'Common questions and approved answers',
    'Opening hours and service areas',
    'Appointment types and scheduling rules',
    'Escalation contacts',
    'Preferred conversation style',
    'Relevant system access through secure authorization',
  ],
  security: 'Never send passwords by chat or email. When system access is needed, we’ll arrange it through the system’s own secure authorization method.',
} as const;

export const boundaries = {
  eyebrow: 'Clear boundaries',
  title: 'Honest about what the agent does.',
  intro: 'Good automation is clear about its limits. These principles shape every setup.',
  items: [
    { icon: 'bot', title: 'Identifies itself as AI', text: 'Callers are told they are speaking with an AI agent.' },
    { icon: 'shield', title: 'Uses approved information', text: 'Answers come from the business information you approve.' },
    { icon: 'calendar', title: 'Confirms only real bookings', text: 'Appointments are confirmed only after a connected booking system confirms them.' },
    { icon: 'handoff', title: 'Takes a message or escalates', text: 'When it can’t complete a request, it can collect a message or escalate to your team.' },
    { icon: 'outbound', title: 'Outbound needs eligibility and consent', text: 'Outbound campaigns require appropriate eligibility and consent checks before contact.' },
    { icon: 'layers', title: 'Features depend on your setup', text: 'What the agent can do depends on the configuration and integrations agreed with you.' },
  ],
} as const;

export const faq = {
  eyebrow: 'FAQ',
  title: 'Common questions',
  items: [
    {
      q: 'Can the agent use my business information?',
      a: 'Yes. During setup we agree on the business information, services and answers the agent may use. It works from that approved information, and we can update it as your business changes.',
    },
    {
      q: 'Can it book appointments?',
      a: 'It can help callers book when it is connected to a supported calendar or booking system. An appointment is only confirmed once that system confirms it. Without a connected system, the agent can collect the request for your team to confirm.',
    },
    {
      q: 'What happens if it cannot answer a question?',
      a: 'It can take a message, collect the caller’s details, or escalate based on the rules you set. It won’t make up answers outside the information you’ve approved.',
    },
    {
      q: 'Can callers ask for a person?',
      a: 'Yes. You decide what happens when a caller asks for a person, such as a transfer to your team, a message for callback, or another agreed human support option, depending on your setup.',
    },
    {
      q: 'Can it support multiple locations?',
      a: 'Multiple locations can be discussed during setup. How it works depends on how your locations, hours, service areas and routing rules are organized.',
    },
    {
      q: 'Can it make outbound calls?',
      a: 'Outbound workflows can be discussed based on the use case, contact eligibility, applicable requirements, and available integrations.',
    },
    {
      q: 'Can it work outside our business hours?',
      a: 'Coverage is configured around your agreed schedule and technical setup.',
    },
  ],
} as const;

export const closing = {
  title: 'Ready to map out your call workflow?',
  text: 'Tell us how your calls work today and we’ll talk through a sensible setup.',
};
