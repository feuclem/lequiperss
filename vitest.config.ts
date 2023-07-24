import tsconfigPaths from "vite-tsconfig-paths";
import {configDefaults, defineConfig,} from "vitest/config";
import { resolve } from "node:path";

const config = defineConfig({
  test: {
    ...configDefaults,
  },
  resolve: {
    alias: [{find: "@", replacement: resolve(__dirname, "./src")}]
  },
  plugins: [tsconfigPaths()],
})

export default config;