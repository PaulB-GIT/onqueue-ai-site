/**
 * Privacy Policy text, transcribed from "ON-QUEUE_AI_Privacy_Policy.docx"
 * (original kept in brand-originals/). Wording is unchanged.
 *
 * Changes approved by Paul on 2026-11-22: "Last updated" set to November 22, 2026;
 * the international-processing paragraph and its placeholder removed from section 5;
 * section 1 now reads "operated by ON-QUEUE VA Services." (registration phrase removed).
 * If a placeholder is ever needed, add it as { todo: '...' } and set `draft` to true
 * to show a highlighted note and a draft banner.
 */

export const meta = {
  title: 'Privacy Policy | ON-QUEUE AI',
  description: 'How ON-QUEUE AI, a service operated by ON-QUEUE VA Services, collects, uses and protects personal information.',
};

export const draft = false;
export const title = 'ON-QUEUE AI Privacy Policy';
export const lastUpdated: string | null = 'November 22, 2026';

/** A paragraph is plain text. `{ todo }` marks a placeholder note from the document. */
export type Para = string | { todo: string };

export const sections: { heading: string; paras: Para[] }[] = [
  {
    heading: '1 Who We Are',
    paras: [
      'ON-QUEUE AI is a service operated by ON-QUEUE VA Services.',
      'Website: https://ai.onqueueva.com',
      'Privacy contact: contact@onqueueva.com',
    ],
  },
  {
    heading: '2 Information We Collect',
    paras: [
      'We collect information you provide when contacting us, requesting a demonstration, or interacting with our services. This may include your name, email address, phone number, business details, messages, and appointment information.',
      'AI calls and live demonstrations may process your voice, conversation details, call recordings, transcripts, and summaries. Our website and service providers may process technical information such as IP addresses and browser details.',
      'Information may come directly from you, our clients, or their authorized systems.',
    ],
  },
  {
    heading: '3 How We Use Information',
    paras: [
      'We use information to respond to inquiries, arrange demonstrations, deliver agreed services, schedule appointments, manage client relationships, protect our systems, and meet legal obligations.',
      'Where required, processing relies on consent, contractual necessity, legal obligations, or legitimate interests, depending on the activity.',
      'Client conversation data is used only to deliver the client’s service, not for general AI model training.',
    ],
  },
  {
    heading: '4 AI Calls Live Demonstrations and Recording',
    paras: [
      'Our voice services and live demonstrations use AI. Conversations may be recorded and transcribed, with appropriate notice and any required consent. Audio may be processed to respond to a conversation even when no recording is retained.',
      'Call recordings and transcripts are retained for 90 days, then deleted, unless a legal obligation requires longer retention.',
      'Please use fictional information when trying a demonstration. Avoid sharing sensitive personal information.',
      'This policy does not itself provide permission for marketing calls or recording. AI responses may contain mistakes. You may request human assistance through contact@onqueueva.com.',
    ],
  },
  {
    heading: '5 Sharing and International Processing',
    paras: [
      'We share information as needed with the relevant client, authorized personnel, and providers supporting hosting, telecommunications, AI processing, storage, and authorized integrations. We may also disclose information where legally required. We do not sell personal information.',
      'When handling information for a client, we generally act on its instructions, and its privacy notice may also apply.',
    ],
  },
  {
    heading: '6 Retention and Security',
    paras: [
      'Other information is kept only as needed to handle inquiries, provide services, meet legal obligations, resolve disputes, and honor communication preferences.',
      'We use appropriate administrative and technical safeguards to protect information. No system can guarantee complete security.',
    ],
  },
  {
    heading: '7 Website Technologies',
    paras: [
      'Our hosting and live-demo providers may use technical tools needed to operate, secure, and connect the services.',
      'If we introduce optional analytics or advertising technologies, we will provide relevant disclosures and consent choices where required.',
    ],
  },
  {
    heading: '8 Your Rights and Choices',
    paras: [
      'Depending on applicable law, you may request access, correction, deletion, or restriction of your information, object to certain processing, or withdraw consent. You may also have rights to data portability and review of qualifying automated decisions.',
      'Email contact@onqueueva.com to make a request or ask us to stop marketing communications. We may retain limited opt-out information to prevent further unwanted contact. We may need to verify your identity and will respond within applicable legal timeframes.',
      'For client-controlled information, we may refer your request to the relevant client and assist with its response. You may also complain to your applicable privacy authority, such as the Philippine National Privacy Commission (privacy.gov.ph), UK Information Commissioner’s Office (ico.org.uk), or Australian Information Commissioner (oaic.gov.au), where relevant.',
    ],
  },
  {
    heading: '9 Updates and Contact',
    paras: [
      'We may update this policy as our services change and provide additional notice where required.',
      'For privacy questions or requests, contact contact@onqueueva.com.',
    ],
  },
];
