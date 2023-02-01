# /docs/.vitepress/config.ts

```ts
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";

// https://vitepress.vuejs.org/config/introduction
// https://vitepress.vuejs.org/config/app-configs
export default withPwa(defineConfig({
  lang: 'en-US',
  title: 'VitePress Documentation System',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,

  /* Vite PWA Options */
  pwa: {},

  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./', import.meta.url)),
        '#': fileURLToPath(new URL('./types', import.meta.url)),
      },
    },
    /*
    */
    plugins: [
      vuetify({
        autoImport: true,
      }),
    ],
    ssr: {
      noExternal: ["vuetify"]
    }
  },

  // https://vitepress.vuejs.org/guide/theme-introduction
  // https://vitepress.vuejs.org/config/theme-configs
  themeConfig: {
    outline: 2,
    outlineTitle: "On this page",
    lastUpdatedText: "Updated Date",

    editLink: {
      pattern: 'https://github.com/username/repo/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/username' },
      { icon: 'github', link: 'https://github.com/username/repo' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/username' },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Pep Cirilu de cal Venter",
    },

    nav: [
      {
        text: 'Core',
        items: [
          { text: 'Introduction', link: '/core/introduction' },
          { text: 'Colors', link: '/core/colors' },
          { text: 'Typography', link: '/core/typography' },
          { text: 'Shadows', link: '/core/shadows' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Buttons', link: '/components/buttons' },
          { text: 'Input', link: '/components/input' },
          { text: 'Status pills', link: '/components/status-pill' },
          { text: 'Table', link: '/components/table' },
        ],
      },
      {
        text: 'Vuetify',
        items: [
          { text: 'Index', link: '/vuetify/index' },
        ],
      },
      {
        text: 'Vitepress',
        items: [
          { text: 'Index', link: '/vitepress/index' },
        ],
      },
      {
        text: 'Patterns',
        items: [
          { text: 'Introduction', link: '/patterns/introduction' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Core',
        items: [
          { text: 'Introduction', link: '/core/introduction' },
          { text: 'Colors', link: '/core/colors' },
          { text: 'Typography', link: '/core/typography' },
          { text: 'Shadows', link: '/core/shadows' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Buttons', link: '/components/buttons' },
          { text: 'Input', link: '/components/input' },
          { text: 'Status pills', link: '/components/status-pill' },
          { text: 'Table', link: '/components/table' },
        ],
      },
      {
        text: 'Vuetify',
        items: [
          { text: 'Index', link: '/vuetify/index' },
        ],
      },
      {
        text: 'Vitepress',
        items: [
          { text: 'Index', link: '/vitepress/index' },
        ],
      },
      {
        text: 'Patterns',
        items: [
          { text: 'Introduction', link: '/patterns/introduction' },
        ],
      },
    ],
  }
}));
```
