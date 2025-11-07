import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import path from "path";
import type { OutputBundle, OutputChunk } from "rollup";
import type { Plugin } from "vite";
import { defineConfig } from "vite";

const sharedDependencies = {
  react: { singleton: true, strictVersion: true, version: "19.0.0", requiredVersion: "^19.0.0" },
  "react-dom": { singleton: true, strictVersion: true, version: "19.0.0", requiredVersion: "^19.0.0" },
  "react-router-dom": { singleton: true, strictVersion: true, version: "7.1.1", requiredVersion: "^7.1.1" },
  "react-router": { singleton: true, strictVersion: true, version: "7.1.1", requiredVersion: "^7.1.1" },
  "react-redux": { singleton: true, strictVersion: true, version: "9.2.0", requiredVersion: "^9.2.0" },
  "@reduxjs/toolkit": { singleton: true, strictVersion: true, version: "2.5.1", requiredVersion: "^2.5.1" },
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

const federationReactCjsInterop = (): Plugin => {
  return {
    name: "federation-react-cjs-interop",
    enforce: "post",
    generateBundle(_options, bundle: OutputBundle) {
      const chunks = Object.values(bundle).filter((entry): entry is OutputChunk => entry.type === "chunk");
      const importSharedChunk = chunks.find((chunk) => chunk.fileName.includes("__federation_fn_import"));

      if (!importSharedChunk) {
        return;
      }

      const importSharedPath = `./${importSharedChunk.fileName}`;

      chunks.forEach((chunk) => {
        const isReactChunk =
          chunk.fileName.includes("index-") &&
          (chunk.code.includes("react.production.min.js") || chunk.code.includes("react.production.js"));

        if (isReactChunk) {
          chunk.code = [
            `import { importShared } from "${importSharedPath}";`,
            "",
            'const reactModule = await importShared("react");',
            "function requireReact() {",
            "  return reactModule;",
            "}",
            "",
            "export { requireReact as r };",
          ].join("\n");
        }
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shared",
      filename: "remoteEntry.js",
      exposes: {
        "./app-layout": "./src/components/app-layout.tsx",
        "./store": "./src/store/index.ts",
        "./services/hooks": "./src/services/hooks.ts",
        "./services/api": "./src/services/api.ts",
      },
      shared: sharedDependencies,
    }),
    federationReactCjsInterop(),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    assetsDir: "",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
