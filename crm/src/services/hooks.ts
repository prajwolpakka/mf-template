import { useQuery } from "@tanstack/react-query";
import { fetchCrmDashboardSummary } from "./api";

const QUERY_KEY = ["crm", "dashboard", "summary"] as const;

export const useCrmDashboardSummaryQuery = () =>
  useQuery({
    queryKey: QUERY_KEY,
    queryFn: fetchCrmDashboardSummary,
  });
