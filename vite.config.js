import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base: '/mk375.github.io/',
    
  plugins: [
    tailwindcss(),
  ],
  
})