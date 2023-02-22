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
  readonly SITE: string;
  readonly BASE: string;
  readonly NAME: string;
  readonly TITLE: string;
  readonly DESCRIPTION: string;
  readonly THEME_COLOR: string;
  readonly BGCOLOR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __DATE__: string;
declare const __SITE__: string;
declare const __BASE__: string;

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
