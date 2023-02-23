import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vitepress';
import { loadEnv } from 'vite';
import { withPwa } from '@vite-pwa/vitepress';

import vuetify from 'vite-plugin-vuetify';

const FLAG: {
  [key:string]: string | undefined,
  mode: 'development' | 'production',
  site?: string,
  base?: string,
  name?: string,
  tile?: string,
  description?: string,
  theme_color?: string,
  bgcolor?: string,
} = {
  mode: process.env.NODE_ENV == 'production' ?  'production' : 'development',
};

const ENV_KEYS = ['VITE_', 'VUE_', 'SITE', 'BASE', 'NAME', 'TITLE', 'DESCRIPTION', 'THEME_COLOR', 'BGCOLOR'];

// Load env
const { SITE, BASE, NAME, TITLE, DESCRIPTION, THEME_COLOR, BGCOLOR } =
  loadEnv(FLAG.mode, 'docs/', ENV_KEYS);

FLAG.site = SITE ?? 'https://vitepress-starter-kit.vercel.app';
FLAG.base = BASE ?? '/';
FLAG.name = NAME ?? 'VitepressSKT';
FLAG.title = TITLE ?? 'Vitepress Starter Kit';
FLAG.description = DESCRIPTION ?? 'Vitepress powered static site generator.';
FLAG.theme_color = THEME_COLOR ?? '#ffffff';
FLAG.bgcolor = BGCOLOR ?? '#ffffff';

// Parse Argo CLI flags
for (let i = 0; i < process.argv.length; i++) {
  if (process.argv[i] === '--site') FLAG.site = process.argv[++i];
  if (process.argv[i] === '--base') FLAG.base = process.argv[++i];
}

// Add trailing slash if nedded
FLAG.base += !FLAG.base?.endsWith('/') ? '/' : '';

console.log('* FLAG');
console.log(FLAG);
// console.log('* process.env');
// console.log(process.env);

export default withPwa(
  defineConfig({
    /* Vite Options */
    vite: {
      base: FLAG.base,
      logLevel: 'info',
      define: {
        __SITE__: JSON.stringify(FLAG.site),
        __BASE__: JSON.stringify(FLAG.base),
        __DATE__: `'${new Date().toISOString()}'`,
      },
      envPrefix: ENV_KEYS,
      resolve: {
        alias: {
          '|': fileURLToPath(new URL('../', import.meta.url)),
          '@': fileURLToPath(new URL('./', import.meta.url)),
          '#': fileURLToPath(new URL('./types', import.meta.url)),
        },
      },
      plugins: [
        vuetify({
          autoImport: true,
        }),
      ],
      ssr: {
        noExternal: ['vuetify']
      }
    },

    /* Vite PWA Options */
    pwa: {
      disable: false,
      mode: FLAG.mode,
      base: FLAG.base,
      scope: FLAG.base,
      outDir: '.vitepress/dist',
      registerType: 'prompt',
      strategies: 'generateSW',
      includeAssets: ['favicon.svg'],
      buildBase: FLAG.base,
      manifest: {
        id: `${FLAG.base}?${FLAG.name}`,
        start_url: `${FLAG.base}?standalone=true`,
        name: FLAG.name,
        short_name: FLAG.name,
        description: FLAG.description,
        background_color: FLAG.bgcolor,
        theme_color: FLAG.theme_color,
        display: 'standalone',
        orientation: 'natural',
        dir: 'ltr',
        icons: [
          {
            src: `${FLAG.base}pwa/manifest-icon-192.maskable.png`,
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: `${FLAG.base}pwa/manifest-icon-192.maskable.png`,
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: `${FLAG.base}pwa/manifest-icon-512.maskable.png`,
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: `${FLAG.base}pwa/manifest-icon-512.maskable.png`,
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globDirectory: 'docs/.vitepress/dist',
        globPatterns: [
          '**/*.{js,html,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico,txt}',
        ],
      },
      devOptions: {
        enabled: FLAG.mode == 'development',
      },
    },

    /* Vitepress Options */
    lang: 'en-US',
    title: FLAG.tile,
    description: FLAG.description,
    base: FLAG.base,
    srcDir: './docs',
    lastUpdated: true,

    head: [
      [ 'link', { rel: 'icon', type: 'image/png', sizes: '196x196', href: `${FLAG.base}pwa/favicon-196.png`, }, ],
      [ 'link', { rel: 'apple-touch-icon', href: `${FLAG.base}pwa/apple-icon-180.png` }],
      [ 'link', { rel: 'mask-icon', href: `${FLAG.base}pwa/manifest-icon-512.maskable.png` }, ],
      [ 'meta', { name: 'theme-color', content: `${FLAG.theme_color}` } ],
      [ 'meta', { name: 'msapplication-square70x70logo', content: `${FLAG.base}pwa/mstile-icon-128.png`, }, ],
      [ 'meta', { name: 'msapplication-square150x150logo', content: `${FLAG.base}pwa/mstile-icon-270.png`, }, ],
      [ 'meta', { name: 'msapplication-square310x310logo', content: `${FLAG.base}pwa/mstile-icon-558.png`, }, ],
      [ 'meta', { name: 'msapplication-wide310x150logo', content: `${FLAG.base}pwa/mstile-icon-558-270.png`, }, ],
      [ 'meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      [ 'link', { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }],
      [ 'base', { href: `${FLAG.base}` }],
    ],

    themeConfig: {
      outline: 2,
      outlineTitle: 'On this page',
      lastUpdatedText: 'Updated Date',

      editLink: {
        pattern: 'https://github.com/carlesbarreda/vitepress-starter-kit/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
      },
  
      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/carlesbarreda/vitepress-starter-kit',
        },
      ],

      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023 Carles Barreda',
      },

      nav: [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: 'getting-started' },
            { text: 'Add Vite PWA plugin', link: 'add-vite-pwa' },
          ],
        },
        {
          text: 'Tailwind CSS',
          items: [
            { text: 'Introduction', link: 'tailwindcss/introduction' },
            { text: 'Colors', link: 'tailwindcss/colors' },
            { text: 'Typography', link: 'tailwindcss/typography' },
            { text: 'Shadows', link: 'tailwindcss/shadows' },
            { text: 'Example', link: 'tailwindcss/example' },
            {
              text: 'Components',
              items: [
                { text: 'Buttons', link: 'tailwindcss/components/buttons' },
                { text: 'Input', link: 'tailwindcss/components/input' },
                { text: 'Status pills', link: 'tailwindcss/components/status-pill' },
                { text: 'Table', link: 'tailwindcss/components/table' },
              ],
            },
          ],
        },
        {
          text: 'Vuetify',
          items: [
            { text: 'Index', link: 'vuetify/index' },
          ],
        },
        {
          text: 'Vitepress',
          items: [
            { text: 'Index', link: 'vitepress/index' },
          ],
        },
        //{ text: 'Files', link: 'files/package.json' },
        /*
        {
          text: 'Patterns',
          items: [
            { text: 'Introduction', link: 'patterns/introduction' },
          ],
        },
        */
        { text: 'Example', link: 'example' }
      ],

      sidebar: [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: 'getting-started' },
            { text: 'Add Vite PWA plugin', link: 'add-vite-pwa' },
          ],
        },
        {
          text: 'Tailwind CSS',
          collapsed: false,
          items: [
            { text: 'Introduction', link: 'tailwindcss/introduction' },
            { text: 'Colors', link: 'tailwindcss/colors' },
            { text: 'Typography', link: 'tailwindcss/typography' },
            { text: 'Shadows', link: 'tailwindcss/shadows' },
            { text: 'Example', link: 'tailwindcss/example' },
            {
              text: 'Components',
              collapsed: true,
              items: [
                { text: 'Buttons', link: 'tailwindcss/components/buttons' },
                { text: 'Input', link: 'tailwindcss/components/input' },
                { text: 'Status pills', link: 'tailwindcss/components/status-pill' },
                { text: 'Table', link: 'tailwindcss/components/table' },
              ],
            },
          ],
        },
        {
          text: 'Vuetify',
          items: [
            { text: 'Index', link: 'vuetify/index' },
          ],
        },
        {
          text: 'Vitepress',
          items: [
            { text: 'Index', link: 'vitepress/index' },
          ],
        },
        /*
        {
          text: 'Patterns',
          items: [
            { text: 'Introduction', link: 'patterns/introduction' },
          ],
        },
        */
        { text: 'Example', link: 'example' },
        /*
        */
        {
          text: 'Files',
          collapsed: true,
          items: [
            {
              text: 'docs',
              collapsed: true,
              items: [
                {
                  text: '.vitepress',
                  collapsed: true,
                  items: [
                    {
                      text: 'theme',
                      collapsed: true,
                      items: [
                        {
                          text: 'components',
                          collapsed: true,
                          items: [
                            { text: 'ReloadPrompt.vue', link: 'files/docs/_vitepress/theme/components/ReloadPrompt.vue' },
                          ],
                        },
                        { text: 'content.scss', link: 'files/docs/_vitepress/theme/content.scss' },
                        { text: 'index.ts', link: 'files/docs/_vitepress/theme/index.ts' },
                        { text: 'tailwind.postcss', link: 'files/docs/_vitepress/theme/tailwind.postcss' },
                      ],
                    },
                    { text: 'config.ts', link: 'files/docs/_vitepress/config.ts' },
                  ],
                },
              ],
            },
            { text: '.gitignore', link: 'files/_gitignore' },
            { text: '.stackblitzrc', link: 'files/_stackblitzrc' },
            { text: 'LICENSE', link: 'files/LICENSE' },
            { text: 'tailwind.config.cjs', link: 'files/tailwind.config.cjs' },
            { text: 'package.json', link: 'files/package.json' },
          ],
        },
      ],
    },
  })
);
