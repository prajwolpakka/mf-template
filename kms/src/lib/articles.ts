export type KnowledgeArticle = {
  id: string;
  title: string;
  summary: string;
  author: string;
  lastUpdated: string;
  category: string;
  content: string;
  tags: string[];
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: "a-501",
    title: "Customer Onboarding Playbook",
    summary: "Step-by-step guide to launch new enterprise clients successfully within 30 days.",
    author: "Taylor Brooks",
    lastUpdated: "2024-02-04",
    category: "Delivery",
    tags: ["onboarding", "playbook", "enterprise"],
    content: `## Overview

Our onboarding playbook balances predictable delivery with tailored experiences.

### Key Milestones
- Kickoff workshop within 3 business days
- Technical environment provisioning checklist
- Success metrics alignment session`,
  },
  {
    id: "a-502",
    title: "Incident Communications Framework",
    summary: "Templates and best practices for coordinating cross-functional response during incidents.",
    author: "Morgan Lee",
    lastUpdated: "2024-02-06",
    category: "Operations",
    tags: ["incident", "communications", "templates"],
    content: `## Communication Cadence
- Initial acknowledgment within 15 minutes
- Status updates every 30 minutes
- Post-mortem within 3 business days`,
  },
  {
    id: "a-503",
    title: "Quarterly Business Review Toolkit",
    summary: "Presentation outline, recommended metrics, and facilitation tips for QBRs.",
    author: "Priya Nair",
    lastUpdated: "2024-02-02",
    category: "Account Management",
    tags: ["qbr", "template"],
    content: `## Toolkit Components
- Executive summary template
- Product adoption heatmap
- Value realization worksheet`,
  },
];
