import type { Preview } from '@storybook/vue3-vite'
import '../src/styles/tailwind.css';

// Theme decorator
const withTheme = (StoryFn, context) => {
  const { theme } = context.globals;
  
  // Apply theme to document root
  document.documentElement.setAttribute('data-theme', theme || 'pca');
  
  return StoryFn();
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'pca',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'pca', title: 'PCA Theme', left: '🟦' },
          { value: 'shopsmiles', title: 'ShopSmiles Theme', left: '🟢' }
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;