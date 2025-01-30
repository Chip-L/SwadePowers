module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:sonarjs/recommended-legacy",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.ts",
    "codegen.ts",
    "tests",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-refresh",
    "lodash",
    "testing-library",
    "jest-dom",
    "sonarjs",
  ],
  settings: { react: { version: "detect" } },
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": ["error", { skipUndeclared: true }],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "lodash/import-scope": "warn",
    "testing-library/prefer-user-event": "warn",
    "testing-library/prefer-explicit-assert": "warn",
  },
  overrides: [
    {
      files: ["*.test.*"],
      rules: {
        // Disabling this so we don't have to extract repeated `it` descriptions into variables
        "sonarjs/no-duplicate-string": "off",
      },
    },
  ],
};
