export type Post = {
  slug: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  read: string;
  author: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "ai-first-operating-model",
    tag: "AI Strategy",
    date: "2026-06-18",
    title: "The new AI-first operating model for modern businesses",
    excerpt: "How leading teams are restructuring around AI agents and automation pipelines.",
    read: "8 min",
    author: "VORQIX.AI Team",
    body: [
      "The companies pulling ahead in 2026 are not the ones with the biggest models. They are the ones that redesigned their operating model around software that acts, not just reports.",
      "An AI-first operating model starts with process inventory: every recurring decision, handoff, and approval gets mapped, timed, and priced. Once the map exists, automation candidates rank themselves — high frequency, low ambiguity, clear success criteria.",
      "From there, the pattern we deploy is consistent: a deterministic workflow spine, AI agents attached at the ambiguous steps, and human review gates where the cost of error is high. This keeps reliability high while still capturing the leverage of models.",
      "The organizational shift matters as much as the technical one. Teams move from doing the work to supervising systems that do the work — which means new metrics: automation coverage, exception rate, and hours returned per week.",
    ],
  },
  {
    slug: "production-grade-ai-agents",
    tag: "Engineering",
    date: "2026-06-10",
    title: "Building production-grade AI agents that don't hallucinate",
    excerpt: "Architectural patterns we use to ship reliable agents into enterprise environments.",
    read: "12 min",
    author: "VORQIX.AI Engineering",
    body: [
      "Reliability in agent systems comes from constraint, not from prompting harder. Every agent we ship runs inside a bounded action space with typed tools and validated inputs.",
      "Grounding is the second lever: agents answer from retrieved, permissioned company data, and every claim carries a source reference the reviewer can open. If retrieval returns nothing, the agent escalates instead of inventing.",
      "The third lever is evaluation. Before an agent touches production traffic we build a regression suite of real historical cases with known-good outcomes, then gate deploys on it the same way we gate application code.",
      "Finally, observability: full traces of tool calls, token spend, latency, and exception reasons. Agents that cannot be inspected cannot be trusted with revenue-critical workflows.",
    ],
  },
  {
    slug: "dispatch-operations-case-study",
    tag: "Case Study",
    date: "2026-05-28",
    title: "How we cut dispatch operations by 70% for a 1,200-vehicle fleet",
    excerpt: "Inside the AI dispatch system we built — and the results six months in.",
    read: "10 min",
    author: "VORQIX.AI Team",
    body: [
      "The client ran dispatch manually across three regions with fourteen operations staff and a whiteboard culture. Planning consumed the first three hours of every shift.",
      "We rebuilt the workflow around a routing engine with an AI exception layer: the engine proposes assignments, the agent resolves conflicts using historical driver, customer, and traffic patterns, and only genuine anomalies reach a human.",
      "Six months in: planning time down 72%, throughput up 38%, and the operations team refocused on carrier relationships and service recovery instead of tile-shuffling.",
      "The lesson that generalizes: automate the decision, not just the data entry. Data-entry automation saves minutes; decision automation changes the shape of the team.",
    ],
  },
  {
    slug: "nine-week-saas-sprint",
    tag: "SaaS",
    date: "2026-05-14",
    title: "The 9-week SaaS sprint: what actually ships",
    excerpt: "A breakdown of our high-velocity SaaS engagement and what it produces.",
    read: "6 min",
    author: "VORQIX.AI Team",
    body: [
      "A nine-week sprint is not an MVP hand-wave. It is a scoped commitment: authentication, billing, multi-tenant data model, core workflow, admin tooling, and analytics.",
      "Weeks one and two are architecture and design system. Weeks three through six build the core workflow vertically, one complete user journey at a time. Weeks seven and eight harden: permissions, audit logs, rate limits, observability. Week nine is launch and handover.",
      "What we deliberately exclude: speculative features, custom integrations without a paying requester, and anything that cannot be tested in the sprint window.",
    ],
  },
  {
    slug: "why-we-built-vorqix-flow",
    tag: "Product",
    date: "2026-04-30",
    title: "Why we built Vorqix Flow",
    excerpt: "The vision behind our flagship AI workflow platform.",
    read: "5 min",
    author: "VORQIX.AI Product",
    body: [
      "We kept rebuilding the same substrate for clients: a workflow runtime with retries, audit trails, human approval steps, and AI-powered branches. Flow productized that substrate.",
      "The design goal was legibility. A non-engineer should be able to open a running automation and understand exactly what it did, when, and why — including what the model decided.",
      "Flow now underpins most of our automation engagements, which means every client benefits from hardening work done for every other client.",
    ],
  },
  {
    slug: "ai-agents-in-logistics-2026",
    tag: "Industry",
    date: "2026-04-12",
    title: "AI agents in logistics: state of the industry 2026",
    excerpt: "Where the industry stands and where the real opportunities live.",
    read: "11 min",
    author: "VORQIX.AI Team",
    body: [
      "Logistics adoption has moved past pilots. The mature use cases are exception handling, appointment scheduling, document processing, and carrier communication — all high-volume, rules-adjacent work.",
      "What is still hard: fragmented data, EDI legacy surfaces, and trust. The winning implementations solve trust first with narrow scopes and visible audit trails, then expand.",
      "Our view for the next 18 months: the differentiator will not be model access but data plumbing and workflow discipline.",
    ],
  },
];

export const getPost = (slug?: string) => posts.find((p) => p.slug === slug);