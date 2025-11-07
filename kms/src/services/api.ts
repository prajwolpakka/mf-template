import kmsApiClient from "@/config/axios";

export type KmsKnowledgeSummary = {
  articles: number;
  collections: number;
  activeContributors: number;
  lastSyncedAt: string;
  trendingTopic: {
    title: string;
    weeklyViews: number;
  };
};

export const MOCK_KMS_KNOWLEDGE_SUMMARY: KmsKnowledgeSummary = {
  articles: 412,
  collections: 28,
  activeContributors: 16,
  lastSyncedAt: new Date().toISOString(),
  trendingTopic: {
    title: "API Security Best Practices",
    weeklyViews: 1384,
  },
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchKmsKnowledgeSummary = async (): Promise<KmsKnowledgeSummary> => {
  const shouldUseMock = import.meta.env.VITE_USE_MOCK_API !== "false";

  if (shouldUseMock) {
    await delay(3000);
    return MOCK_KMS_KNOWLEDGE_SUMMARY;
  }

  const { data } = await kmsApiClient.get<KmsKnowledgeSummary>("/knowledge/summary");
  return data;
};
