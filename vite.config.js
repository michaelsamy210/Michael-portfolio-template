import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import oxlint from "vite-plugin-oxlint";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/Michael-portfolio/" : "/",
  plugins: [react(), oxlint(), tailwindcss()],
});