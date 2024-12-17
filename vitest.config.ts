import { resolve } from "path";
import { coverageConfigDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text"],
      exclude: [
        "storybook-static/*",
        "src/**/*.stories.tsx",
        "src/**/*.{config,test}.ts",
        ...coverageConfigDefaults.exclude,
      ],
    },

  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
