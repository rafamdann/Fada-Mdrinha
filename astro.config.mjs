// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Versão 2 do site, em innoweb.agency/fada-madrinha2 (a versão 1 continua em /fada-madrinha, no
// ramo main). O innoweb.agency reencaminha esse caminho para este projecto (ver vercel.json). O build vai para dist/fada-madrinha2 para os ficheiros terem o
// mesmo caminho aqui e lá. O endereço completo também está em src/config/site.ts; manter iguais.
export default defineConfig({
  site: 'https://innoweb.agency',
  base: '/fada-madrinha2',
  outDir: './dist/fada-madrinha2',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404'),
      // Sem barra final, como os links e o canonical (o innoweb.agency redirecciona /fada-madrinha2/).
      serialize: (item) => ({ ...item, url: item.url.replace(/\/$/, '') }),
    }),
  ],
});
