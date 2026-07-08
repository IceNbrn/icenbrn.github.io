import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tanstackRouter from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    react()
  ],
  base: '/'
})

/*export default defineConfig(({ command }) => {
  return {
    plugins: [
        tanstackRouter({ target: 'react', autoCodeSplitting: true }),
        react()],
    // 💡 If we are building for production, use the GitHub Pages path.
    // Otherwise, use '/' for local development so imports don't break!
    base: command === 'build' ? '/userU.github.io/' : '/',
  }
})*/