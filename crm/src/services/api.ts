import crmApiClient from "@/config/axios";

export type CrmDashboardSummary = {
  totalArticles: number;
  drafts: number;
  scheduled: number;
  lastPublishedAt: string;
  topAuthor: {
    name: string;
    articlesPublished: number;
  };
};

export const MOCK_CMS_DASHBOARD_SUMMARY: CrmDashboardSummary = {
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

export const fetchCrmDashboardSummary = async (): Promise<CrmDashboardSummary> => {
  const shouldUseMock = true;

  if (shouldUseMock) {
    await delay(3000);
    return MOCK_CMS_DASHBOARD_SUMMARY;
  }

  const { data } = await crmApiClient.get<CrmDashboardSummary>("/dashboard/summary");
  return data;
};
