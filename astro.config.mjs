// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Versão 3 do site, em innoweb.agency/fada-madrinha3. A versão 1 continua em /fada-madrinha (ramo
// main) e a 2 em /fada-madrinha2 (ramo v2). O innoweb.agency reencaminha esse caminho para este
// projecto (ver vercel.json). O build vai para dist/fada-madrinha3 para os ficheiros terem o
// mesmo caminho aqui e lá. O endereço completo também está em src/config/site.ts; manter iguais.
export default defineConfig({
  site: 'https://innoweb.agency',
  base: '/fada-madrinha3',
  outDir: './dist/fada-madrinha3',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404'),
      // Sem barra final, como os links e o canonical (o innoweb.agency redirecciona /fada-madrinha3/).
      serialize: (item) => ({ ...item, url: item.url.replace(/\/$/, '') }),
    }),
  ],
});
