import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import {defineConfig} from "vite"

// https://vite.dev/config/
export default defineConfig({
    base: '/styling/',
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {},
    },
})
