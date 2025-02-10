import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schemas",
  generates: {
    "./src/types/__generated__.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context#Context",
        mappers: {
          Power: "./PowerModel#PowerModel",
        },
      },
    },
  },
};

export default config;
