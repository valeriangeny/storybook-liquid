import type { StorybookConfig } from '@storybook/vue3-vite';
import vue from '@vitejs/plugin-vue';

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(vue());
    
    // Ensure PostCSS processes Tailwind
    config.css = config.css || {};
    config.css.postcss = config.css.postcss || {};
    
    return config;
  }
};
export default config;