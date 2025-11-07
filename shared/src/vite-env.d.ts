/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH_SEED?: "true" | "false";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
