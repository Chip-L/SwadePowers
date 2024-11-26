import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schemas/*",
  generates: {
    "./src/types/__generated__.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
