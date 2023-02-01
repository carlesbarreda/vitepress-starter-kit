/// <reference types="vite/client" />
/// <reference types="vitepress" />
/// <reference types="@vite-pwa/vitepress" />
/// <reference types="vite-plugin-pwa/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly APP_NAME: string;
  readonly APP_TITLE: string;
  readonly APP_DESCRIPTION: string;
  readonly APP_THEME_COLOR: string;
  readonly APP_BGCOLOR: string;
  readonly APP_BASE: string;
  readonly APP_SRCDIR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __DATE__: string;

interface TwcHockeyTeam {
  id: string;
  name: string;
  city: string;
  logo: string;
}

interface TwcColors {
  [key: string]: Array<{
    name: string;
    value: string;
  }>;
}
