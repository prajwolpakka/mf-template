import axios from "axios";

const baseURL = import.meta.env.VITE_CMS_API_BASE_URL ?? "/api/crm";

export const crmApiClient = axios.create({
  baseURL,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default crmApiClient;
