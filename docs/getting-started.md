# Getting Started

You can go to step 2 if you want add vitepress to an existing project.

* [Getting Started from VitePress guide](https://vitepress.vuejs.org/guide/getting-started)

## Create a new project

Create and change into a new directory.

```shell
$ mkdir vitepress-starter-kit && cd vitepress-starter-kit
```

Then, initialize with your preferred package manager.

```shell
$ pnpm init
```

## Add project scripts and files

Edit your `package.json` to looks something like this:

```json
{
  ...
  "name": "vitepress-starter-kit",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
  ...
}
```

If you use pnpm and have problems with dependencies add this to `package.json`:

```json
{
  ...
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": [
        "@algolia/client-search"
      ]
    }
  }
  ...
}
```

Create the directory structure.

```shell
$ mkdir -p docs/{components,public/assets,.vitepress/theme/components}
```

Create the index document `docs/index.md`,

```shell
$ cat > docs/index.md <<EOF
---
layout: home

hero:
  name: VitePress Stater Kit
  text: Vite & Vue powered static site generator.
  tagline: Simple, powerful, and performant. Meet the modern SSG framework you"ve always wanted.
  actions:
    - theme: brand
      text: Get Started
      link: /example
    - theme: alt
      text: View on GitHub
      link: https://github.com/carlesbarreda/vitepress-starter-kit
---
EOF
```

and the example page `docs/example.md`.

```shell
$ echo -e "# VitePress\n\nExample page." > docs/example.md
```

## Install VitePress and Vue

Add VitePress and Vue as dev dependencies for the project.

```shell
$ pnpm add -D vite vitepress vue
```

Create `docs/.vitepress/config.ts`.

```shell
$ cat > docs/.vitepress/config.ts <<EOF
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "VitePress Starter Kit",
  description: "Vite & Vue powered static site generator.",
  vite: {
    resolve: {
      alias: {
        "|": fileURLToPath(new URL("../", import.meta.url)),
        "@": fileURLToPath(new URL("./", import.meta.url)),
        "#": fileURLToPath(new URL("./types", import.meta.url))
      }
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/carlesbarreda/vitepress-starter-kit" }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023 Carles Barreda",
    },
    nav: [
      { text: "Example", link: "/example" }
    ],
    sidebar: [
      { text: "Example", link: "/example" }
    ]
  }
});
EOF
```

Create `docs/.vitepress/theme/index.ts`.

```shell
$ cat > docs/.vitepress/theme/index.ts <<EOF
import DefaultTheme from 'vitepress/theme';

export default {
  ...DefaultTheme
};
EOF
```

Now can check dev environement.

```shell
$ pnpm docs:dev --open
```

## Next ...

If don't have a logo, get vite logo for next step add Vite PWA plugin.

```shell
$ wget https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg -o docs/public/assets/vite.svg
```

## Step 99: Install VitePress

Add VitePress and Vue as dev dependencies for the project.

```shell
$ pnpm add -D @mdi/font @types/node @vite-pwa/vitepress autoprefixer postcss tailwindcss vite vite-plugin-pwa vite-plugin-vuetify vitepress vue vuetify@3
```

Edit your `package.json` to looks like this:

```json
{
  "name": "vitepress-starter-kit",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  "keywords": ["vite", "vitepress", "vue", "vuetify", "tailwindcss", "pwa"],
  "author": "Carles Barreda Martin",
  "license": "MIT",
  "devDependencies": {
    "@mdi/font": "^7.1.96",
    "@types/node": "^18.11.18",
    "@vite-pwa/vitepress": "^0.0.4",
    "autoprefixer": "^10.4.13",
    "postcss": "^8.4.21",
    "tailwindcss": "^3.2.4",
    "vite": "^4.0.4",
    "vite-plugin-pwa": "^0.14.1",
    "vite-plugin-vuetify": "^1.0.2",
    "vitepress": "1.0.0-alpha.43",
    "vue": "^3.2.45",
    "vuetify": "^2.6.14"
  },
  "postcss": {
    "plugins": {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      "tailwindcss": {},
      "autoprefixer": {}
    }
  },
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": [
        "@algolia/client-search"
      ]
    }
  }
}
```
