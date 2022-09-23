import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      fileName: () => 'bundle.js',
      formats: ['es']
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ['cachefactory']
    }
  },
  plugins:[
  ]
})
