import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// ✅ This ensures your React Router routes (like /thank-you) work even on refresh
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true, // Fixes 404 in local dev
  },
  build: {
    outDir: "dist",
  },
});
