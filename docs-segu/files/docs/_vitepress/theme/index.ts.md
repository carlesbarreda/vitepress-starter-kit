# /docs/.vitepress/theme/index.ts

```ts
import "./tailwind.postcss";

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import "vuetify/styles"
import { createVuetify } from "vuetify"
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { md3 } from "vuetify/blueprints";
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'

import ReloadPrompt from './components/ReloadPrompt.vue'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  blueprint: md3,
});

export default {
  ...DefaultTheme,
  lastUpdated: true,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(vuetify);
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(ReloadPrompt)
    })
  }
}
```
