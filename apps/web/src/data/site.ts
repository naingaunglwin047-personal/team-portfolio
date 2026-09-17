export const site = {
  brand: "Meridian",
  tagline: "Product craft for ambitious teams.",
  description:
    "We design and build digital products that feel inevitable — clear, fast, and made to last.",
  email: "hello@meridian.studio",
  location: "Remote · Asia & Europe",
  nav: [
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
} as const

export const about = {
  headline: "A small collective with a sharp focus.",
  body: "Meridian partners with founders and product teams to shape interfaces, systems, and experiences that people actually want to use. Less noise. More clarity.",
  principles: [
    {
      title: "Clarity first",
      description: "Every screen earns its place. We cut until the idea is obvious.",
    },
    {
      title: "Motion with purpose",
      description: "Animation guides attention and builds trust — never decoration for its own sake.",
    },
    {
      title: "Ship with care",
      description: "From prototype to production, we obsess over polish that users feel.",
    },
  ],
} as const

export const team = [
  {
    name: "Ava Chen",
    role: "Product Design",
    bio: "Leads research-to-UI systems for SaaS and fintech products.",
    image: "/illustrations/team-ava.png",
    links: { linkedin: "#", github: "#" },
  },
  {
    name: "Noah Reyes",
    role: "Engineering",
    bio: "Front-end architect focused on performance and motion systems.",
    image: "/illustrations/team-noah.png",
    links: { linkedin: "#", github: "#" },
  },
  {
    name: "Mia Okonkwo",
    role: "Brand & Content",
    bio: "Shapes narrative, visual identity, and launch storytelling.",
    image: "/illustrations/team-mia.png",
    links: { linkedin: "#", github: "#" },
  },
  {
    name: "Leo Hartmann",
    role: "Strategy",
    bio: "Connects product vision to measurable outcomes and roadmaps.",
    image: "/illustrations/team-leo.png",
    links: { linkedin: "#", github: "#" },
  },
] as const

export const projects = [
  {
    title: "Northwind Banking",
    category: "Fintech · Design System",
    description: "A modular banking interface with real-time insights and calm motion.",
    image: "/illustrations/work-northwind.png",
    year: "2025",
  },
  {
    title: "Lumen Health",
    category: "Healthcare · Product",
    description: "Patient-first scheduling and care journeys across web and mobile.",
    image: "/illustrations/work-lumen.png",
    year: "2024",
  },
  {
    title: "Orbit Logistics",
    category: "B2B · Platform",
    description: "Fleet visibility rebuilt for operators who live in the dashboard.",
    image: "/illustrations/work-orbit.png",
    year: "2024",
  },
] as const
