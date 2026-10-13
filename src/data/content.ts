// All site content lives here. Edit this file to update the portfolio;
// the components only handle layout.

export interface Experience {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
}

export interface Project {
  name: string;
  dates: string;
  subtitle: string;
  bullets: string[];
  stack: string[];
}

export const profile = {
  firstName: "Patrick James",
  lastName: "Lauron",
  eyebrow: "BSIT · Web Development",
  role:
    "Full-stack developer and backend AI engineer at FlyRank AI, studying at CICS, De La Salle University – Dasmariñas. I spend as much time behind a camera as behind a keyboard.",
  email: "pjameslauron@gmail.com",
  phone: "(+63) 949 943 4733",
  phoneHref: "tel:+639499434733",
  linkedInShort: "in/patjeyms",
  portrait: { src: "/assets/pic_1.jpg", alt: "Patrick James Lauron" }
};

export const about = {
  paragraphs: [
    "Hi, I'm Patrick (or Pat for short) — a 21-year-old BS Information Technology student majoring in Web Development, working as a full-stack developer and backend AI engineer. I enjoy capturing moments through photography and expressing creativity through visual storytelling.",
    "Outside of code, I love exploring coffee shops, scenic drives, and long playlists to work by."
  ],
  gallery: [
    { src: "/assets/photography.jpg", alt: "Photography sample", label: "PHOTOGRAPHY" },
    { src: "/assets/photography_3.jpg", alt: "Photography sample", label: "PHOTOGRAPHY" },
    { src: "/assets/explore_1.jpg", alt: "Exploring sample", label: "EXPLORING" },
    { src: "/assets/explore_2.jpg", alt: "Exploring sample", label: "EXPLORING" },
    { src: "/assets/driving.jpg", alt: "Driving sample", label: "DRIVING" },
    { src: "/assets/driving_2.jpg", alt: "Driving sample", label: "DRIVING" }
  ]
};

export const socials = [
  { short: "IG", label: "Instagram", href: "https://www.instagram.com/patjeyms/" },
  { short: "FB", label: "Facebook", href: "https://www.facebook.com/patjeyms" },
  { short: "in", label: "LinkedIn", href: "https://www.linkedin.com/in/patjeyms/" }
];

export const skills = [
  {
    group: "Web Development",
    items: ["React.js", "TypeScript", "Node.js", "Express.js", "PHP", "C#", ".NET", "Tailwind CSS"]
  },
  {
    group: "Databases & Tools",
    items: ["MongoDB", "Git", "GitHub", "Microsoft Excel", "Microsoft Word"]
  },
  {
    group: "Media & Design",
    items: ["Video Editing", "Image Editing", "Photography", "Videography", "Adobe Creative Suite"]
  },
  {
    group: "Leadership",
    items: [
      "Organizational Leadership",
      "Legislative Drafting & Ordinance Review",
      "Committee Management",
      "Event Documentation Coordination"
    ]
  }
];

// The first `visibleExperience` entries show by default; the rest sit behind "View more".
export const visibleExperience = 2;

export const experience: Experience[] = [
  {
    role: "Backend AI Engineering",
    org: "FlyRank AI, Remote",
    dates: "Sep '26 – Present",
    bullets: [
      "Benchmarked ML models, LLMs, and retrieval techniques for AI search and ranking",
      "Built and evaluated Python ML pipelines for RAG and NLP workflows",
      "Turned research findings into production-ready features with ML engineers"
    ]
  },
  {
    role: "Legislative Councilor",
    org: "CICS Student Government, DLSU-D",
    dates: "Aug '25 – Present",
    bullets: [
      "Drafted and passed ordinances promoting student welfare",
      "Consulted students and stakeholders before drafting legislation",
      "Reviewed legislation, monitored compliance, and recommended amendments"
    ]
  },
  {
    role: "Co-Director, Technical & Media Management",
    org: "CICS Student Government, DLSU-D",
    dates: "Aug '25 – May '26",
    bullets: [
      "Led a 14-member photo/video documentation committee",
      "Curated and edited visual content for promos and official publications",
      "Set media naming, storage, and backup protocols"
    ]
  },
  {
    role: "Freelance Video Editor & Graphic Designer",
    org: "Self-employed, Remote",
    dates: "Mar '26 – Apr '26",
    bullets: [
      "Edited promotional and social media videos",
      "Designed marketing graphics on a recurring schedule"
    ]
  }
];

export const projects: Project[] = [
  {
    name: "AniSkolar",
    dates: "May '26 – Present",
    subtitle: "Scholarship Management System · Undergraduate Capstone",
    bullets: [
      "Full-stack scholarship platform with automated review workflows",
      "REST API (Express + MongoDB) with GridFS document storage",
      "Microsoft SSO with student/admin portal routing",
      "Student dashboard with real-time GPA / duty-hour tracking"
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Node.js", "MongoDB", "Clerk Auth"]
  },
  {
    name: "Travelogue",
    dates: "Dec '25",
    subtitle: "Travel Planning Companion · Personal Project",
    bullets: [
      "Flight search, hotel booking, and itinerary in one app",
      "Live pricing via SerpAPI & TripAdvisor, mapped with Leaflet",
      "WCAG 2.1 accessible, social login and print views"
    ],
    stack: ["React", "React Router", "Leaflet", "Axios"]
  }
];

export const education = [
  {
    stage: "COLLEGE",
    school: "De La Salle University – Dasmariñas",
    note: "BS Information Technology, Web Development · 2023–2027 · Cumulative GPA: 3.64 · First Honors Dean's Lister"
  },
  {
    stage: "SHS",
    school: "Emilio Aguinaldo College",
    note: "STEM Strand · 2021–2023 · With Honors (Grades 11 & 12), 94 average"
  }
];

export const certifications = [
  "TOEIC — 900, C1 Advanced",
  "Network & Cybersecurity Fundamentals",
  "Wonders and Perils of AI & Emerging Technology",
  "Cisco Packet Tracer",
  "Python Essentials 1"
];

export const awards = [
  "Dean's Lister, Consistent (2023–Present)",
  "Excellence in Leadership — Legislative Councilor, 2026",
  "Excellence in Leadership — Committee Member of the Year, 2025"
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];
