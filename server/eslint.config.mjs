import lodash from "eslint-plugin-lodash";
import sonarjs from "eslint-plugin-sonarjs";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "src/types/__generated__.ts",
      "**/eslint.config.mjs",
      "**/codegen.ts",
      "**/vitest.config.ts",
    ],
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended-legacy",
  ),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      lodash,
      sonarjs,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        project: true,
      },
    },

    rules: {
      "prefer-const": "off",
      "no-empty-function": "off",
      // "no-console": "error",
      "@typescript-eslint/no-empty-function": "off",
      "lodash/import-scope": "warn",
    },
  },
  {
    files: ["**/*.test.*"],

    rules: {
      "sonarjs/no-duplicate-string": "off",
    },
  },
];
