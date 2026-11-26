export const site = {
  brand: "Erhlich Solution",
  tagline: "Product craft for ambitious teams.",
  description:
    "We design and build digital products that feel inevitable — clear, fast, and made to last.",
  email: "hello@erhlich.solution",
  location: "Remote · Asia & Europe",
  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
} as const

export const about = {
  headline: "A small collective with a sharp focus.",
  body: "Erhlich Solution partners with founders and product teams to shape interfaces, systems, and experiences that people actually want to use. Less noise. More clarity.",
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

export const services = [
  {
    title: "Product Design",
    description:
      "Research-led interfaces and design systems that stay coherent from first sketch to shipped product.",
    offerings: ["UX research", "UI systems", "Prototyping"],
  },
  {
    title: "Interface Engineering",
    description:
      "Front-end architecture built for speed, accessibility, and motion that feels intentional.",
    offerings: ["React apps", "Design systems", "Motion craft"],
  },
  {
    title: "Brand & Narrative",
    description:
      "Visual identity and launch storytelling that make the product unmistakable.",
    offerings: ["Identity", "Content", "Launch kits"],
  },
  {
    title: "Product Strategy",
    description:
      "Roadmaps and priorities that connect vision to outcomes your team can measure.",
    offerings: ["Discovery", "Roadmapping", "Workshops"],
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
