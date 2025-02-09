import { loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

/// <reference types="vite/client"
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: { open: true },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./vitest.setup.ts",
      coverage: {
        provider: "istanbul",
        reporter: ["text", "json", "html"],
        thresholds: {
          lines: 85,
          branches: 70,
          functions: 70,
          statements: 85,
        },
        include: ["src/**"],
        exclude: [
          "src/main.tsx",
          "src/App.tsx",
          "src/api/**",
          "src/routes.tsx",
          "src/util/apolloClient.ts",
          "src/__generated__/**",
          "src/util/helpers/text/calculateTextWidth.ts",
        ],
      },
    },
  });
};
