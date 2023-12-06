import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add the server component here
  server: {
    proxy: {
      "/api": "http://localhost:5020",
    },
  },
});
