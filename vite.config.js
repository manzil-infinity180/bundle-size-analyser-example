import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "bundle-stats.html", // Output file for the analysis
      open: true, // Automatically open the file in the browser
      gzipSize: true, // Show gzip sizes
      brotliSize: true, // Show brotli sizes
    }),
  ],
});
