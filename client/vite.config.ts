import { loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

/// <reference types="vite/client"
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  console.log(mode);
  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: { open: true },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./vitest.setup.ts",
    },
  });
};
