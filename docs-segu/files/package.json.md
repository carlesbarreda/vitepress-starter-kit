# /package.json

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
  "keywords": [
    "vite",
    "vitepress",
    "vue",
    "vuetify",
    "tailwindcss",
    "pwa"
  ],
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
    "vuetify": "^3.1.2"
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
