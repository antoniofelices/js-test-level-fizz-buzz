import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@ui': path.resolve(__dirname, './src/ui'),
            '@core': path.resolve(__dirname, './src/core'),
            '@data': path.resolve(__dirname, './src/data'),
        },
    },
})
