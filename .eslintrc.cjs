/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "plugin:vue/base",
    "plugin:vue/vue3-essential",
    "plugin:vuetify/base",
    "plugin:vuetify/recommended",
  ],
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  globals: {
    __PKG_NAME__: true,
    __PKG_VERSION__: true,
    __PKG_DEPENDENCIES__: true,
    PKG: true,
    /* ... */
  },
};
