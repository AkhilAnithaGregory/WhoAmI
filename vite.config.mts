import { defineConfig } from 'vite'
import type { AliasOptions } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'
//@ts-ignore
import path from "path";

//@ts-ignore
const root = path.resolve(__dirname, "src");


export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
   resolve: {
    alias: {
      "@": root,
    } as AliasOptions,
  },
})