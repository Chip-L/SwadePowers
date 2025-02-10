import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    dir: "src",
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
      exclude: ["src/server.ts", "src/types/__generated__.ts"],
    },
  },
});
