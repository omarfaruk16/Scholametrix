export const SITE = {
  name: 'Scholametrix',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.scholametrix.tech',
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? 'https://api.scholametrix.tech',
  tagline: 'Fair, fast AI marking for written exams.',
  description:
    'Scholametrix marks written exam answers with AI against your own rubric: marks for every criterion, highlighted evidence and a clear reason. Your teachers approve every result.',
  email: 'scholametrix@gmail.com',
  location: 'Rajshahi, Bangladesh',
  founded: '2026',
  linkedin: {
    omar: 'https://www.linkedin.com/in/omar-faruk2022/',
    khalid: 'https://www.linkedin.com/in/khalid-hossen-86b8a320b/',
  },
};

export const NAV = [
  { href: '/ai-evaluation', label: 'AI Evaluation' },
  { href: '/e-exam', label: 'e-Exam Platform' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/security', label: 'Security' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export const FOOTER = [
  {
    title: 'Product',
    links: [
      { href: '/ai-evaluation', label: 'AI Evaluation' },
      { href: '/e-exam', label: 'e-Exam Platform' },
      { href: '/how-it-works', label: 'How it works' },
      { href: '/developers', label: 'Developer API' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About us' },
      { href: '/about#team', label: 'Team' },
      { href: '/case-studies/university-of-rajshahi', label: 'Case study' },
      { href: '/partners', label: 'Partners & sponsors' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Trust',
    links: [
      { href: '/security', label: 'Security & privacy' },
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/terms', label: 'Terms of service' },
      { href: '/pilot', label: 'Free pilot' },
    ],
  },
];

export const FOUNDERS = [
  {
    name: 'MD Omar Faruk',
    role: 'Founder & CEO',
    image: '/images/team/md-omar-faruk.webp',
    linkedin: SITE.linkedin.omar,
    bio: 'Omar leads Scholametrix’s product and engineering. He designed and built the Scholametrix AI evaluation engine and the e-Exam platform running at the University of Rajshahi, from rubric drafting to the teacher review workflow.',
  },
  {
    name: 'Khalid Hossen',
    role: 'Co-founder',
    image: '/images/team/khalid-hossen.webp',
    linkedin: SITE.linkedin.khalid,
    bio: 'Khalid co-founded Scholametrix with Omar to give every institution fast, consistent and explained marking for written exams.',
  },
];

export const FAQ_HOME = [
  {
    q: 'Does the AI give the final marks?',
    a: 'No. Scholametrix suggests a mark for every rubric criterion, with evidence and a reason. A teacher accepts or adjusts every answer before any student sees a result.',
  },
  {
    q: 'Can we use it with our existing exam system or LMS?',
    a: 'Yes. Most institutions connect Scholametrix to the system they already use through our API: send the written answers, receive suggested marks through a signed webhook. If you don’t have an online exam system, you can use our complete e-Exam platform.',
  },
  {
    q: 'Which languages are supported?',
    a: 'English and Bangla, including mixed-language answers and formulas. Highlights are positioned correctly in Bangla script. Other languages are available on request.',
  },
  {
    q: 'How accurate is it?',
    a: 'Quality depends on a clear rubric, so we help you write one, and the AI can draft it from your model answer. Because teachers review every suggestion, the system measures how often teachers agree with the AI for each course, and we share those numbers with you during the pilot.',
  },
  {
    q: 'Is student data used to train AI models?',
    a: 'No. Answers are processed only to mark them, through AI providers that keep zero data. We never send student names or IDs to the AI, only the answer text with an anonymous reference.',
  },
  {
    q: 'How long does marking take?',
    a: 'A typical class gets its suggested marks within seconds to a few minutes of submission. Very large exams are queued and marked steadily, usually long before teachers sit down to review.',
  },
  {
    q: 'What does a pilot involve?',
    a: 'One course or department, free. We help you set up rubrics, connect your system or the e-Exam platform, and at the end you get a report comparing AI suggestions with your teachers’ final marks.',
  },
];
