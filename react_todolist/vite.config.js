import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vite.dev/config/
const outDir = "react_dist";
export default defineConfig(({ mode }) => ({
  base: mode === "development" ? "" : `/any_test/${outDir}/`,
  plugins: [
    react(),
  ],
  
  build: {
    outDir,
  },
}));
