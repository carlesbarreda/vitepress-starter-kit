# VitePress Starter Kit

# Getting Started

Follow the steps [Getting Started from VitePress guide](https://vitepress.vuejs.org/guide/getting-started)
## Step 1: Create a new project

Create and change into a new directory.

```shell
$ mkdir vitepress-starter-kit && cd vitepress-starter-kit
```

Then, initialize with your preferred package manager.

```shell
$ pnpm init
```

## Step 2: Install VitePress

Add VitePress and Vue as dev dependencies for the project.

```shell
$ pnpm add -D vitepress vue
```

Edit your `package.json` to looks like this:

```json
  "private": true,
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
```
::: details Getting missing peer deps warnings?
```json
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": [
        "@algolia/client-search"
      ]
    }
  }
```
:::

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
