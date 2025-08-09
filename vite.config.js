import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/Bootcamp_Proyecto_5/" : "/",
  plugins: [react()],
});
