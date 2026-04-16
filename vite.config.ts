import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  
  base: "/Cinema_Seat_Manager_astrid/", 
  build: {
    outDir: "dist", 
  }
});