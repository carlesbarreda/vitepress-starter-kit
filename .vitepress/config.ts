import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vitepress";
import { loadEnv } from "vite";
import { withPwa } from "@vite-pwa/vitepress";

import vuetify from "vite-plugin-vuetify";

const { APP_NAME, APP_TITLE, APP_DESCRIPTION, APP_THEME_COLOR, APP_BGCOLOR, APP_BASE, APP_SRCDIR } =
  loadEnv("production", process.cwd(), "APP_");

export default withPwa(
  defineConfig({
    /* Vite Options */
    vite: {
      logLevel: "info",
      define: {
        __DATE__: `'${new Date().toISOString()}'`,
      },
      envPrefix: ["VITE_", "VUE_", "APP_"],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./", import.meta.url)),
          "#": fileURLToPath(new URL("./types", import.meta.url)),
        },
      },
      plugins: [
        vuetify({
          autoImport: true,
        }),
      ],
      ssr: {
        noExternal: ["vuetify"]
      }
    },

    /* Vite PWA Options */
    pwa: {
      registerType: "prompt",
      outDir: "../.vitepress/dist",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: APP_TITLE,
        short_name: APP_NAME,
        description: APP_DESCRIPTION,
        background_color: APP_BGCOLOR,
        theme_color: APP_THEME_COLOR,
        icons: [
          {
            src: "/pwa/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/pwa/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/favicon.ico",
            sizes: "28x32",
            type: "image/x-icon",
            purpose: "any",
          },
        ],
      },
      /*
    // Remove cookie if can't refresh index page (dev-dist)
    devOptions: {
      enabled: true,
      type: "module"
    },
    */
    },

    /* Vitepress Options */
    lang: "en-US",
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    base: APP_BASE,
    srcDir: APP_SRCDIR,
    lastUpdated: true,

    head: [
      [
        "link",
        {
          rel: "icon",
          type: "image/png",
          sizes: "196x196",
          href: "/pwa/favicon-196.png",
        },
      ],
      ["link", { rel: "apple-touch-icon", href: "/pwa/apple-icon-180.png" }],
      [
        "link",
        { rel: "mask-icon", href: "/pwa/manifest-icon-512.maskable.png" },
      ],
      ["meta", { name: "theme-color", content: APP_THEME_COLOR }],
      [
        "meta",
        {
          name: "msapplication-square70x70logo",
          content: "/pwa/mstile-icon-128.png",
        },
      ],
      [
        "meta",
        {
          name: "msapplication-square150x150logo",
          content: "/pwa/mstile-icon-270.png",
        },
      ],
      [
        "meta",
        {
          name: "msapplication-square310x310logo",
          content: "/pwa/mstile-icon-558.png",
        },
      ],
      [
        "meta",
        {
          name: "msapplication-wide310x150logo",
          content: "/pwa/mstile-icon-558-270.png",
        },
      ],
      ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
      ["link", { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" }],
    ],

    themeConfig: {
      outline: 2,
      outlineTitle: "On this page",
      lastUpdatedText: "Updated Date",

      editLink: {
        pattern: "https://github.com/username/repo/edit/main/docs/:path",
        text: "Edit this page on GitHub"
      },
  
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/carlesbarreda/vitepress-starter-kit",
        },
      ],

      footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2023 Carles Barreda",
      },

      nav: [
        {
          text: "Guide",
          items: [
            { text: "Getting Started", link: "/getting-started" },
            { text: "Add Vite PWA plugin", link: "/add-vite-pwa" },
          ],
        },
        {
          text: "Tailwind CSS",
          items: [
            { text: "Introduction", link: "/tailwindcss/introduction" },
            { text: "Colors", link: "/tailwindcss/colors" },
            { text: "Typography", link: "/tailwindcss/typography" },
            { text: "Shadows", link: "/tailwindcss/shadows" },
            { text: "Example", link: "/tailwindcss/example" },
            {
              text: "Components",
              items: [
                { text: "Buttons", link: "/tailwindcss/components/buttons" },
                { text: "Input", link: "/tailwindcss/components/input" },
                { text: "Status pills", link: "/tailwindcss/components/status-pill" },
                { text: "Table", link: "/tailwindcss/components/table" },
              ],
            },
          ],
        },
        {
          text: "Vuetify",
          items: [
            { text: "Index", link: "/vuetify/index" },
          ],
        },
        {
          text: "Vitepress",
          items: [
            { text: "Index", link: "/vitepress/index" },
          ],
        },
        //{ text: "Files", link: "/files/package.json" },
        /*
        {
          text: "Patterns",
          items: [
            { text: "Introduction", link: "/patterns/introduction" },
          ],
        },
        */
        { text: "Example", link: "/example" }
      ],

      sidebar: [
        {
          text: "Guide",
          items: [
            { text: "Getting Started", link: "/getting-started" },
            { text: "Add Vite PWA plugin", link: "/add-vite-pwa" },
          ],
        },
        {
          text: "Tailwind CSS",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/tailwindcss/introduction" },
            { text: "Colors", link: "/tailwindcss/colors" },
            { text: "Typography", link: "/tailwindcss/typography" },
            { text: "Shadows", link: "/tailwindcss/shadows" },
            { text: "Example", link: "/tailwindcss/example" },
            {
              text: "Components",
              collapsed: true,
              items: [
                { text: "Buttons", link: "/tailwindcss/components/buttons" },
                { text: "Input", link: "/tailwindcss/components/input" },
                { text: "Status pills", link: "/tailwindcss/components/status-pill" },
                { text: "Table", link: "/tailwindcss/components/table" },
              ],
            },
          ],
        },
        {
          text: "Vuetify",
          items: [
            { text: "Index", link: "/vuetify/index" },
          ],
        },
        {
          text: "Vitepress",
          items: [
            { text: "Index", link: "/vitepress/index" },
          ],
        },
        /*
        {
          text: "Patterns",
          items: [
            { text: "Introduction", link: "/patterns/introduction" },
          ],
        },
        */
        { text: "Example", link: "/example" },
        /*
        */
        {
          text: "Files",
          collapsed: true,
          items: [
            {
              text: "docs",
              collapsed: true,
              items: [
                {
                  text: ".vitepress",
                  collapsed: true,
                  items: [
                    {
                      text: "theme",
                      collapsed: true,
                      items: [
                        {
                          text: "components",
                          collapsed: true,
                          items: [
                            { text: "ReloadPrompt.vue", link: "/files/docs/_vitepress/theme/components/ReloadPrompt.vue" },
                          ],
                        },
                        { text: "content.scss", link: "/files/docs/_vitepress/theme/content.scss" },
                        { text: "index.ts", link: "/files/docs/_vitepress/theme/index.ts" },
                        { text: "tailwind.postcss", link: "/files/docs/_vitepress/theme/tailwind.postcss" },
                      ],
                    },
                    { text: "config.ts", link: "/files/docs/_vitepress/config.ts" },
                  ],
                },
              ],
            },
            { text: ".gitignore", link: "/files/_gitignore" },
            { text: ".stackblitzrc", link: "/files/_stackblitzrc" },
            { text: "LICENSE", link: "/files/LICENSE" },
            { text: "tailwind.config.cjs", link: "/files/tailwind.config.cjs" },
            { text: "package.json", link: "/files/package.json" },
          ],
        },
      ],
    },
  })
);
