import { useQuery } from "@tanstack/react-query";
import { fetchHeaderUser } from "./api";

export const useGetUser = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: () => fetchHeaderUser(),
  });
