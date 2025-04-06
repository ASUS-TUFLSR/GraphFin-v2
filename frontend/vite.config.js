import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  	darkMode: "class",
	theme: {
		// rest of the code
	},
  plugins: [
    react(),
     tailwindcss(),
    ],
  server:{
    port:3000,
  },
});

