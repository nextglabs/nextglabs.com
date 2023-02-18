import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
  documents: ["./src/graphql/queries/**/*.ts"],
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
  hooks: { afterOneFileWrite: ["prettier --write"] },
};

export default config;
