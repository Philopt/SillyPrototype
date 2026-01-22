import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const getBasePath = command => {
  if (command !== 'build') {
    return '/'
  }

  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  return repo ? `/${repo}/` : '/'
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: getBasePath(command),
}))
