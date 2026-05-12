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
      "Why code is perfect for navigating the beautiful but complex field that is gardening.",
    date: "May 12, 2026",
    readTime: "1 min read",
    category: "Field note",
    tags: ["Design", "Gardening", "Tools"],
    intro:
      "Why code is perfect for navigating the beautiful but complex field that is gardening.",
    sections: [
      {
        heading: "Lay of the Land",
        body: "Gardeners already plan what plants they want to grow before the growing season based on special dates, frosts, and other climate factors. It is not uncommon to choose plants based on what looks new or interesting as well. Fertilization is also an essential part of the craft and experienced gardeners ensure to check the NPK ratings of whatever they use and adjust based on the current stage of specific plants. And of course, we can't forget about watering schedules. While some water by hand, some use irrigation methods when the workload becomes too excessive to do daily. Mulching is also a very common practice to retain moisture in the soil in order to avoid watering too often.",
      },
      {
        heading: "Bringing Tech to the Garden",
        body: "So why is software important for this? In gardening, we have many variables, many of which need to be taken into account simultaneously. The pH of the soil, moisture, brix, fertilization schedules, seed starting, transplant dates, etc. This is why software is so ideal because with this many variables to take into account, it makes it very easy to lose track of what matters at any given time during the growing process. A decision made with insufficient or inaccurate information can lead to a less fruitful harvest and that brings me to believe that software absolutely has its place on the soil just as much as it does in the office.",
      },
      {
        heading: "Build for return visits",
        body: "A good gardening tool should become more useful each time someone comes back to it. Gardens do not move in a straight line; they move through seasons, experiments, failures, harvests, and small adjustments that are easy to forget once the next task begins. Software can preserve those details and turn them into a useful history: what was planted, what worked, what struggled, when the soil changed, and what decisions led to better results. That is the kind of tool I want to build, one that respects the patience of gardening while giving growers clearer information to act on.",
      },
    ],
  },
  {
    slug: "what-ciderina-taught-me",
    title: "What Ciderina taught me about plant-focused software",
    excerpt:
      "Ciderina started as a simple idea, but the more I worked on it, the more it became something that actually felt like me.",
    date: "May 12, 2026",
    readTime: "5 min read",
    category: "Project reflection",
    tags: ["Ciderina", "Product", "Horticulture"],
    intro:
      "Ciderina started as a simple idea, but the more I worked on it, the more it became something that actually felt like me.",
    sections: [
      {
        heading: "Why I Built Ciderina",
        body: "I have always been drawn to gardening, horticulture, plants, fruit trees, and the slow, thoughtful process of growing things. At the same time, I am a software engineer trying to build projects that feel more personal than another generic to-do list or e-commerce clone. I wanted to create something that connected my technical skills with my actual interests. That is where Ciderina came from. Ciderina is a cider blending and planning application. At its core, it helps users explore apple varieties, build a cider batch, adjust their blend, and think through the cider-making process from fruit selection to fermentation and final report. The idea is not just “pick some apples and press a button.” It is about giving structure to a process that is part agriculture, part food science, part craft, and part creativity. When I started building it, I knew I wanted the app to be horticulture-forward. I did not want it to feel like a random tech demo with cider slapped on top. I wanted the apple varieties, flavor categories, Brix, pH, tannin, and blending decisions to actually matter. Even though I am not a professional cider maker, I wanted the app to respect the real-world complexity of cider making while still being approachable for hobbyists, gardeners, and curious growers. That balance became one of the biggest design challenges: how scientific should the app be? Cider making can get extremely technical. There are fermentation techniques, acidity adjustments, yeast categories, nutrient plans, maceration, sweating, pressing methods, stabilization, carbonation, and finishing decisions. I realized pretty quickly that if I tried to simulate everything at an expert level, the app could become overwhelming. So I made an important decision: Ciderina would be practical, structured, and intelligent, but still understandable. That decision helped shape the MVP. Instead of trying to build every possible cider-making feature at once, I focused on the foundation: apple selection, batch building, blend composition, forecast logic, fermentation planning, and a final cider report.",
      },
      {
        heading: "How Ciderina Works",
        body: "The first part of Ciderina is the apple selection screen. Users can browse apple cultivars and filter them by useful cider-making traits like category, flavor class, Brix, tannin, and pH. These are not random filters. They represent the traits that influence what kind of cider a blend might become. From there, users can add apples to a batch. This sounds simple, but it was an important feature architecturally because the selected apples need to be shared across different parts of the app. I used Zustand for global state management so the selected batch could be accessed by the apple cards, the bottom drawer, and the blend workflow. Once an apple is added, it appears in the bottom drawer, and the user can proceed into the blending process. The blending page is where the app starts to feel more like a real planning tool. I used React Flow to create a visual workflow made of connected nodes. Each node represents a stage in the cider planning process. The first node is the blend composition node, where users adjust the weight of each apple in the batch. Instead of using percentages directly, I chose weights because that feels more natural for a real-world hobbyist. If someone is making cider, they are more likely to think in pounds of apples than abstract percentages. From those weights, the app calculates the blend profile. It estimates total weight, weighted Brix, tannin, potential ABV, and pH. The pH calculation was especially interesting because pH is not linear. You cannot simply average pH values and call it accurate. So the app uses a more realistic hydrogen ion concentration approach, converting pH into concentration, averaging that, and then converting it back. That was one of those moments where the project moved beyond basic CRUD and became something more thoughtful. After the blend summary, the app evaluates the cider direction using rule-based logic. Instead of relying on AI immediately, I built a system of rules that can generate insights based on the current blend. For example, a high Brix blend might suggest higher alcohol potential, while a high pH blend might raise stability concerns. This gives the app a way to forecast the character and risks of the cider without needing a machine learning model. The workflow continues into fruit and must preparation, then fermentation planning, then fermentation forecasting. These sections let the user make decisions like sweating, milling, maceration, sulfite use, pressing method, yeast style, fermentation temperature, nutrient plan, and target finish. Each choice changes the forecast and helps the user understand what their decisions might mean. Finally, the app produces a cider report. This report summarizes the ingredients, blend profile, preparation choices, fermentation plan, expected cider direction, and practical notes. I also added PDF export so the user can save the report as a finished recipe or planning document.",
      },
      {
        heading: "What Ciderina Represents",
        body: "For me, Ciderina is more than just a portfolio project. It represents the kind of software I actually want to build. I do not want to brand myself as a software engineer who just likes frameworks for the sake of frameworks. I want to build thoughtful tools for gardeners, growers, hobbyists, and people working with real materials in the real world. Ciderina gave me a way to combine software engineering with horticulture, food systems, and craft. Technically, the project gave me a lot of room to show practical engineering skills. It uses Next.js, TypeScript, Prisma, PostgreSQL, Zustand, React Flow, Recharts, and Vercel deployment. But the value of the project is not just the tech stack. The value is in how those tools work together to solve a specific problem. Ciderina has database-backed cultivar data, search and filtering, global state, interactive workflow nodes, calculated profiles, rule-based forecasting, visual charts, user-configurable process steps, and a final exportable report. That feels much stronger than building a generic app where the domain does not matter. It also helped me understand something important about portfolio projects: a good project does not need to use every trendy technology to be impressive. It needs to feel intentional. It needs to have a clear user, a clear purpose, and enough depth to show that I can think through a system from beginning to end. Ciderina is still something I can expand. In the future, I could add more apple data, user accounts, saved recipes, AI-assisted recommendations, orchard planning features, fermentation timelines, and more detailed report generation. But even as an MVP, it already proves something important: I can build a real application around a specialized domain and deploy it. That matters to me. This is my first deployed project that feels like it has an identity. It is clean, functional, specific, and connected to the kind of work I want to keep doing. Ciderina is not just a cider app. It is a statement about the kind of engineer I am becoming: someone who builds useful, well-structured tools around the things he genuinely cares about.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
