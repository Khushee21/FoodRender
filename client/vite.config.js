import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // Enables global test functions like 'describe' and 'it'
    environment: "jsdom", // Simulates a browser-like environment for React components
    setupFiles: "./setupTests.js", // Runs before each test (optional)
  },
});
