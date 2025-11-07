import axios from "axios";

const baseURL = import.meta.env.VITE_KMS_API_BASE_URL ?? "/api/kms";

export const kmsApiClient = axios.create({
  baseURL,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default kmsApiClient;
