import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve :{
    alias :{
        src: "/src",
        Components : "/src/Components",
        Pages : "/src/Pages",
        Assets : "/src/Assets",
        Layouts : "/src/Layouts",
        Redux : "/src/Redux",
        Routes : "/src/Routes",
        Helpers : "/src/Helpers",
        Configs : "/src/Configs"
    }
  },
});
