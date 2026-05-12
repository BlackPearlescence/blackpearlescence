export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  intro: string;
  sections: {
    heading: string;
    body: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "software-that-respects-the-garden",
    title: "Software that respects the garden",
    excerpt:
      "A placeholder field note about designing tools that fit the slower, messier rhythm of growing things.",
    date: "May 12, 2026",
    readTime: "4 min read",
    category: "Field note",
    tags: ["Design", "Gardening", "Tools"],
    intro:
      "This is placeholder copy for a future post. Use this opening to connect a real gardening observation to a software design idea.",
    sections: [
      {
        heading: "Start with the real workflow",
        body: "Replace this with a story about what growers or gardeners are actually doing before they ever touch the software. Good tools should reduce friction without flattening the living context around the work.",
      },
      {
        heading: "Make the data useful outside the screen",
        body: "Use this section to explain how a technical choice helps someone decide what to plant, when to act, or how to understand a changing system.",
      },
      {
        heading: "Build for return visits",
        body: "Gardening is seasonal and iterative. This is a good place to write about records, reminders, reports, and interfaces that stay useful over time.",
      },
    ],
  },
  {
    slug: "what-ciderina-taught-me",
    title: "What Ciderina taught me about plant-focused software",
    excerpt:
      "A draft space for reflecting on your cider planning app, blend logic, and horticulture-facing product decisions.",
    date: "May 12, 2026",
    readTime: "5 min read",
    category: "Project reflection",
    tags: ["Ciderina", "Product", "Horticulture"],
    intro:
      "This is placeholder copy for a case-study-style post. Use it to explain what you learned while turning apple cultivar data into a guided cider workflow.",
    sections: [
      {
        heading: "From catalog to process",
        body: "Describe how the project moved beyond showing apple varieties and became a workflow for choosing fruit, composing a batch, planning fermentation, and producing a report.",
      },
      {
        heading: "Readable rules matter",
        body: "Write about why explainable estimates and visible decision logic are valuable when software is helping with food, plants, or craft production.",
      },
      {
        heading: "The portfolio angle",
        body: "Connect the project back to your professional niche: software engineering for growers, gardeners, and plant-informed decision making.",
      },
    ],
  },
  {
    slug: "notes-from-my-guava-tree",
    title: "Notes from my guava tree",
    excerpt:
      "A personal placeholder post for connecting your own garden to the kind of software you want to build.",
    date: "May 12, 2026",
    readTime: "3 min read",
    category: "Garden note",
    tags: ["Guava", "Personal", "Growing"],
    intro:
      "This is placeholder copy for a more personal post. Your own guava tree can become a strong signal that this portfolio direction comes from lived interest, not just branding.",
    sections: [
      {
        heading: "Observation as a design habit",
        body: "Use this section to talk about noticing growth, stress, pests, weather, fruiting, or maintenance, and how those observations shape your instincts as an engineer.",
      },
      {
        heading: "Small tools for real care",
        body: "Describe a simple tool idea: reminders, plant logs, harvest notes, cultivar tracking, or decision support for everyday growers.",
      },
      {
        heading: "Why this niche feels natural",
        body: "Close by connecting your gardening passion to the kind of thoughtful, grounded software work you want to be known for.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
