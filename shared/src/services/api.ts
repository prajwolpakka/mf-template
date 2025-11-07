import apiClient from "@/config/axios";

export type HeaderUser = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

export const MOCK_HEADER_USER: HeaderUser = {
  id: "user-1",
  name: "Alex Rivera",
  email: "alex.rivera@example.com",
  avatar: "https://avatars.githubusercontent.com/u/1?v=4",
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchHeaderUser = async (): Promise<HeaderUser> => {
  const shouldUseMock = import.meta.env.VITE_USE_MOCK_API !== "false";

  if (shouldUseMock) {
    await delay(200);
    return MOCK_HEADER_USER;
  }

  const { data } = await apiClient.get<HeaderUser>("/header/user");
  return data;
};
