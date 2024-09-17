import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
    base: '/filter/',
    build: {
        outDir: 'build',
    },
    plugins: [react(), svgr()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
            { find: '@constants', replacement: path.resolve(__dirname, 'src/constants') },
            { find: '@style', replacement: path.resolve(__dirname, 'src/style') },
            { find: '@type', replacement: path.resolve(__dirname, 'src/type') },
        ],
    },
});
