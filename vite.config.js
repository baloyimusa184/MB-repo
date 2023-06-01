import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
import data from './data.json';

export default defineConfig({
    base : '/responsive_webpages/',
    build: {
        rollupOptions: {
            input : {
                main: 'index.html',
                bootstrap: 'bootstrap.html',
                materialize: 'materialize.html',
            }
        },
    },
    plugins: [handlebars({
      context : {
        data
      }
  })]
    
});