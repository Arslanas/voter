// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    // Optional: Set the server port to 3000 to match CRA's default
    server: {
        port: 3000,
        open: true, // Optional: automatically opens the browser
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure: false,
            }
        }
    },
    // Optional: Configure output directory if you want to keep the "build" folder name
    build: {
        outDir: 'build',
    },
});