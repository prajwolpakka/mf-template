import { useQuery } from "@tanstack/react-query";
import { fetchKmsKnowledgeSummary } from "./api";

export const useKmsKnowledgeSummaryQuery = () =>
  useQuery({
    queryKey: ["kms", "knowledge", "summary"],
    queryFn: fetchKmsKnowledgeSummary,
  });
