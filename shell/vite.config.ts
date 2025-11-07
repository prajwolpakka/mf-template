import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

const sharedDependencies = {
  react: { singleton: true, strictVersion: true, version: "19.0.0", requiredVersion: "^19.0.0" },
  "react-dom": { singleton: true, strictVersion: true, version: "19.0.0", requiredVersion: "^19.0.0" },
  "react-router-dom": { singleton: true, strictVersion: true, version: "7.1.1", requiredVersion: "^7.1.1" },
  "react-router": { singleton: true, strictVersion: true, version: "7.1.1", requiredVersion: "^7.1.1" },
  "react-redux": { singleton: true, strictVersion: true, version: "9.2.0", requiredVersion: "^9.2.0" },
  "@reduxjs/toolkit": { singleton: true, strictVersion: true, version: "2.5.1", requiredVersion: "^2.5.1" },
  "redux-persist": { singleton: true, strictVersion: true, requiredVersion: "^6.0.0", version: "6.0.0" },
  "@tanstack/react-query": {
    singleton: true,
    strictVersion: true,
    version: "5.90.7",
    requiredVersion: "^5.90.7",
  },
  axios: {
    singleton: true,
    strictVersion: true,
    version: "1.13.2",
    requiredVersion: "^1.13.2",
  },
} as const;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const remoteEntry = (key: string, fallback: string) => env[key] || fallback;

  return {
    plugins: [
      react(),
      federation({
        name: "shell",
        filename: "remoteEntry.js",
        exposes: {
          "./store": "./src/store/index.ts",
          "./hooks": "./src/hooks/store.ts",
        },
        remotes: {
          cms_app: remoteEntry("VITE_CMS_REMOTE_URL", "http://localhost:3001/remoteEntry.js"),
          kms_app: remoteEntry("VITE_KMS_REMOTE_URL", "http://localhost:3002/remoteEntry.js"),
          shared: remoteEntry("VITE_COMMON_REMOTE_URL", "http://localhost:3003/remoteEntry.js"),
        },
        shared: sharedDependencies,
      }),
    ],
    server: {
      host: true,
    },
    build: {
      target: "esnext",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
