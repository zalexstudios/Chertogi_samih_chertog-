import {defineConfig} from 'vite';
import {resolve} from 'node:path';
export default defineConfig({
  build:{outDir:'dist',emptyOutDir:true,rollupOptions:{input:{
    index:resolve('src/pages/index.html'),
    demo:resolve('src/pages/demo.html'),
    components:resolve('src/pages/components.html')
  },},cssCodeSplit:true,sourcemap:true},
  server:{port:5173,strictPort:true}
});
