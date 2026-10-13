// All site content lives here. Edit this file to update the portfolio —
// the components only handle layout.

export type ExperienceType = "work" | "leadership";

export interface Experience {
  type: ExperienceType;
  role: string;
  org: string;
  dates: string;
  bullets: string[];
}

export interface Project {
  name: string;
  kind: string;
  dates: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

export interface Education {
  years: string;
  school: string;
  note: string;
  stats: { highlight?: string; text: string }[];
}

export interface Listed {
  name: string;
  meta?: string;
}

export const profile = {
  firstName: "Patrick James",
  lastName: "Lauron",
  nickname: "Pat",
  initials: "PJL",
  location: "Bacoor, Cavite · PH",
  email: "pjameslauron@gmail.com",
  phone: "+63 949 943 4733",
  phoneHref: "tel:+639499434733",
  role:
    "Full-stack developer and backend AI engineer. I build web platforms end to end and work on the retrieval and ranking systems behind AI search — and spend as much time behind a camera as behind a keyboard.",
  meta: [
    { label: "Now", value: "Backend AI Engineering, FlyRank AI" },
    { label: "Studying", value: "BSIT Web Dev, DLSU-D · ’27" },
    { label: "Standing", value: "3.64 GPA · First Honors Dean’s Lister" }
  ],
  portrait: {
    src: "/assets/pic_1.jpg",
    alt: "Patrick James Lauron looking at a photo exhibit",
    caption: "Pat, at an exhibit"
  }
};

export const socials = [
  { label: "LinkedIn", short: "in/patjeyms", href: "https://www.linkedin.com/in/patjeyms/" },
  { label: "Instagram", href: "https://www.instagram.com/patjeyms/" },
  { label: "Facebook", href: "https://www.facebook.com/patjeyms" }
];

export const about = {
  lede: {
    before: "Hi, I’m Patrick — ",
    accent: "Pat",
    after:
      " for short. I’m a BS Information Technology student majoring in Web Development, working across the stack from React front ends to Node APIs and Python ML pipelines."
  },
  body:
    "I’m also a Legislative Councilor in the CICS Student Government, where I draft and review ordinances for the college. Outside of code, I enjoy capturing moments through photography and visual storytelling, exploring coffee shops, scenic drives, and long playlists to work by.",
  gallery: [
    { src: "/assets/photography.jpg", alt: "Photography sample", label: "Photography" },
    { src: "/assets/photography_3.jpg", alt: "Photography sample", label: "Photography" },
    { src: "/assets/explore_1.jpg", alt: "Exploring sample", label: "Exploring" },
    { src: "/assets/explore_2.jpg", alt: "Exploring sample", label: "Exploring" },
    { src: "/assets/driving.jpg", alt: "Driving sample", label: "Driving" },
    { src: "/assets/driving_2.jpg", alt: "Driving sample", label: "Driving" }
  ]
};

export const experience: Experience[] = [
  {
    type: "work",
    role: "Backend AI Engineering",
    org: "FlyRank AI · Remote",
    dates: "Sep 2026 — Present",
    bullets: [
      "Researched and benchmarked state-of-the-art ML models, LLMs, and retrieval techniques to improve AI search and ranking systems",
      "Built and evaluated Python ML pipelines for RAG and NLP workflows, using evaluation metrics and error analysis on large-scale datasets",
      "Prototyped and validated AI solutions with ML engineers and developers, turning research findings into production-ready features"
    ]
  },
  {
    type: "work",
    role: "Freelance Video Editor & Graphic Designer",
    org: "Self-employed · Remote",
    dates: "Mar 2026 — Apr 2026",
    bullets: [
      "Edited promotional and social media videos to support marketing content",
      "Designed graphics for social media posts and marketing materials",
      "Delivered content on a recurring schedule for consistent posting"
    ]
  },
  {
    type: "leadership",
    role: "Legislative Councilor",
    org: "CICS Student Government · DLSU-D",
    dates: "Aug 2025 — Present",
    bullets: [
      "Drafted, proposed, and passed ordinances promoting the welfare of the college and its students",
      "Consulted students and stakeholders to identify issues before drafting legislation",
      "Reviewed and deliberated on proposed ordinances, monitoring compliance and recommending amendments"
    ]
  },
  {
    type: "leadership",
    role: "Co-Director, Technical & Media Management",
    org: "CICS Student Government · DLSU-D",
    dates: "Aug 2025 — May 2026",
    bullets: [
      "Led a 14-member committee overseeing photo/video documentation and media archiving for events",
      "Curated and edited visual content for promotional materials, social media, and official publications",
      "Established media naming, storage, and backup protocols for institutional record-keeping"
    ]
  }
];

export const projects: Project[] = [
  {
    name: "AniSkolar",
    kind: "Undergraduate Capstone",
    dates: "May 2026 — Present",
    summary:
      "Scholarship management system for De La Salle University – Dasmariñas, simplifying student applications and automating administrative review.",
    bullets: [
      "REST API with Express and MongoDB, GridFS document storage, and Clerk session validation",
      "Microsoft SSO with dynamic student/admin portal routing based on profile status",
      "Automated report generation and data tracking to cut paperwork and entry errors",
      "Student dashboard with GPA and duty-hour calculators for real-time progress"
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Express", "MongoDB", "Clerk"]
  },
  {
    name: "Travelogue",
    kind: "Personal Project",
    dates: "Dec 2025",
    summary:
      "Travel planning companion that brings flight search, hotel booking, and itinerary management into one app.",
    bullets: [
      "Real-time flight pricing and hotel data via SerpAPI and TripAdvisor API",
      "Interactive itinerary with Leaflet Maps for destinations and nearby landmarks",
      "Responsive, WCAG 2.1 accessible UI with print-friendly confirmations",
      "Email/password and social login (Google, Facebook, Apple)"
    ],
    stack: ["React", "React Router", "Axios", "Leaflet", "SerpAPI"]
  }
];

export const skills = [
  {
    group: "Web Development",
    items: "React.js, TypeScript, Node.js, Express.js, PHP, C#, .NET, Tailwind CSS"
  },
  {
    group: "AI & Data",
    items: "Python, ML pipelines, RAG & NLP workflows, LLM benchmarking and evaluation"
  },
  {
    group: "Databases & Tools",
    items: "MongoDB, Git, GitHub, Microsoft Excel, Microsoft Word"
  },
  {
    group: "Media & Design",
    items: "Video and image editing, photography, videography, Adobe Creative Suite"
  },
  {
    group: "Leadership",
    items:
      "Organizational leadership, legislative drafting & ordinance review, committee management"
  }
];

export const education: Education[] = [
  {
    years: "2023 — 2027",
    school: "De La Salle University – Dasmariñas",
    note: "BS Information Technology, Web Development Track",
    stats: [
      { highlight: "3.64", text: " / 4.0 GPA" },
      { text: "First Honors Dean’s Lister, 2023 — Present" }
    ]
  },
  {
    years: "2021 — 2023",
    school: "Emilio Aguinaldo College – Cavite",
    note: "Senior High School, STEM Strand",
    stats: [{ text: "With Honors, Grades 11 & 12" }]
  }
];

export const certifications: Listed[] = [
  { name: "TOEIC 900 — C1 Advanced", meta: "Princeton Assessments" },
  { name: "Network & Cybersecurity Fundamentals" },
  { name: "Wonders and Perils of AI & Emerging Technology" },
  { name: "Cisco Packet Tracer" },
  { name: "Python Essentials 1" }
];

export const awards: Listed[] = [
  { name: "Excellence in Leadership: Legislative Councilor", meta: "2026" },
  { name: "Excellence in Leadership: Committee Member of the Year", meta: "2025" }
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];
