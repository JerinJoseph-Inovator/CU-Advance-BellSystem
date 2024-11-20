import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['firebase/auth', 'firebase/app', 'firebase/storage'],
  },
  base: "CU-Advance-BellSystem"
});
