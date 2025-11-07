import cmsApiClient from "@/config/axios";

export type CmsDashboardSummary = {
  totalArticles: number;
  drafts: number;
  scheduled: number;
  lastPublishedAt: string;
  topAuthor: {
    name: string;
    articlesPublished: number;
  };
};

export const MOCK_CMS_DASHBOARD_SUMMARY: CmsDashboardSummary = {
  totalArticles: 128,
  drafts: 12,
  scheduled: 5,
  lastPublishedAt: new Date().toISOString(),
  topAuthor: {
    name: "Jordan Blake",
    articlesPublished: 37,
  },
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchCmsDashboardSummary = async (): Promise<CmsDashboardSummary> => {
  const shouldUseMock = true;

  if (shouldUseMock) {
    await delay(3000);
    return MOCK_CMS_DASHBOARD_SUMMARY;
  }

  const { data } = await cmsApiClient.get<CmsDashboardSummary>("/dashboard/summary");
  return data;
};
