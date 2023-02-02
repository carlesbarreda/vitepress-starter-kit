# Add Vite PWA plugin

## Install VitePress PWA module

https://vite-pwa-org.netlify.app/frameworks/vitepress.html

https://vite-pwa-org.netlify.app/frameworks/vue.html#vue-3


Add VitePress and Vue as dev dependencies for the project.

```shell
$ pnpm add -D @vite-pwa/vitepress vite-plugin-pwa
```

To update your project to use the new vite-plugin-pwa for VitePress, you only need to wrap your VitePress config with withPwa (you don"t need oldest pwa and pwa-configuration modules):

Update `docs/.vitepress/config.ts`.

```ts
...
import { withPwa } from "@vite-pwa/vitepress";
...
export default withPwa(defineConfig({
  ...
  /* Vite PWA Options */
  pwa: {},
  ...
}));
...
```

## Import virtual modules

### Auto Update

Update `docs/.vitepress/theme/index.ts`.

```ts
...
import { h } from "vue";
import RegisterSW from "./components/RegisterSW.vue";
...
export default {
  ...
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(RegisterSW);
    }),
  },
  ...
};
...
```

docs/.vitepress/theme/components/RegisterSW.vue

### Prompt for update

Update `docs/.vitepress/theme/index.ts`.

```ts
...
import { h } from "vue";
import ReloadPrompt from "./components/ReloadPrompt.vue";
...
export default {
  ...
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(ReloadPrompt)
    });
  }
  ...
};
...
```

docs/.vitepress/theme/components/ReloadPrompt.vue

## Next ...

If don"t have a logo, get vite logo for next step add Vite PWA plugin.

```shell
$ wget https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg -O docs/public/assets/vite.svg
```

Create the index file for favicons `pwa-icons.html`:

```shell
$ cat > pwa-icons.html <<EOF
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vitepress Starter Kit</title>

    <link rel="icon" type="image/svg+xml" href="/assets/vite.svg">
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
EOF
```

Create the manifest file for favicons `pwa-icons.json`:

```shell
$ cat > pwa-icons.json <<EOF
{
  "name": "Vitepress Starter Kit",
  "short_name": "Vitepress Stater Kit",
  "description": "Vitepress Starter Kit.",
  "background_color": "#5a0fc8",
  "theme_color": "#5a0fc8",
  "display": "standalone",
  "icons": [
    {
      "src": "/assets/vite.svg",
      "sizes": "32x32",
      "type": "image/svg+xml",
      "purpose": "any"
    }
  ]
}
EOF
```

Add script to generate a small set of favicons to `package.json`:

```json
{
  ...
  "scripts": {
    ...
    "pwa-icons": "pwa-asset-generator ./docs/public/assets/vite.svg ./docs/public/pwa -v /pwa -i ./pwa-icons.html -m ./pwa-icons.html --scrape false --icon-only true --favicon true --mstile true --opaque false --maskable true --type png"
    ...
  }
  ...
}
```

Install `pwa-asset-generator` package for favicons generation:

```shell
$ pnpm add -D pwa-asset-generator
```

Generate the favicons.

```shell
$ pnpm pwa-icons
```

<(\w*)\s(.*)>
["$1", { $2 }],

" "
": "

Update `docs/.vitepress/config.ts`:

```ts
...
export default withPwa(defineConfig({
  ...
  head: [
    ...
    ["link", { rel: "icon", type: "image/png", sizes: "196x196", href: "/pwa/favicon-196.png" }],
    ["meta", { name: "msapplication-square70x70logo", content: "/pwa/mstile-icon-128.png" }],
    ["meta", { name: "msapplication-square150x150logo", content: "/pwa/mstile-icon-270.png" }],
    ["meta", { name: "msapplication-square310x310logo", content: "/pwa/mstile-icon-558.png" }],
    ["meta", { name: "msapplication-wide310x150logo", content: "/pwa/mstile-icon-558-270.png" }],
    ["link", { rel: "apple-touch-icon", href: "/pwa/apple-icon-180.png" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ...
  ],
  ...
}));
...
```
