import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@ui': path.resolve(__dirname, './src/ui'),
            '@core': path.resolve(__dirname, './src/core'),
            '@data': path.resolve(__dirname, './src/data'),
        },
    },
})
