import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@api": "/src/api",
      "@utils": "/src/utils",
    },
  },
  plugins: [react()],
});
