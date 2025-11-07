import { useQuery } from "@tanstack/react-query";
import { fetchCmsDashboardSummary } from "./api";

const QUERY_KEY = ["cms", "dashboard", "summary"] as const;

export const useCmsDashboardSummaryQuery = () =>
  useQuery({
    queryKey: QUERY_KEY,
    queryFn: fetchCmsDashboardSummary,
  });
