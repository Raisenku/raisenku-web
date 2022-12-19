import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import {} from "vitest"; // Keep this, loads module override for vite types

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);

  return {
    plugins: [vue()],

    test: {
      globals: true,
      environment: "jsdom",

      coverage: {
        all: true,

        include: ["src/**/*"],
        exclude: [
          "src/main.ts",
          "src/App.vue",
          "src/router/**/*.ts",
          "**/types/**/*",
          "**/interfaces/**/*",
          "**/*.stories.ts",
        ],
      },
    },

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },

    server: {
      port: parseInt(env.VITE_PORT),
      hmr: {
        clientPort: 443,
        path: "/hmr",
      },
    },
  };
});
