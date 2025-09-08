import type { Meta, StoryObj } from '@storybook/vue3';
import ThemeNavigation from '../../src/components/vue/ThemeNavigation.vue';

const meta: Meta<typeof ThemeNavigation> = {
  title: 'Vue Components/ThemeNavigation',
  component: ThemeNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive navigation component that adapts its styling based on the active theme.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    brandName: { control: 'text' },
    menuItems: { control: 'object' },
    cartCount: { control: 'number' }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PCAStore: Story = {
  args: {
    brandName: 'PCA Solutions',
    menuItems: ['Home', 'Products', 'Services', 'Support', 'About'],
    cartCount: 3
  },
};

export const ShopSmiles: Story = {
  args: {
    brandName: 'ShopSmiles',
    menuItems: ['Shop', 'Categories', 'Deals', 'Blog', 'Contact'],
    cartCount: 7
  },
};

export const EmptyCart: Story = {
  args: {
    brandName: 'My Store',
    menuItems: ['Home', 'Products', 'About', 'Contact'],
    cartCount: 0
  },
};

export const MinimalMenu: Story = {
  args: {
    brandName: 'Simple Store',
    menuItems: ['Shop', 'About'],
    cartCount: 1
  },
};

export const HighCartCount: Story = {
  args: {
    brandName: 'Busy Store',
    menuItems: ['Home', 'Electronics', 'Clothing', 'Books', 'Sports', 'Garden'],
    cartCount: 142
  },
};

export const ThemeShowcase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'See how the navigation adapts to different themes. PCA theme uses professional blue colors with clean typography, while ShopSmiles uses friendly green colors with rounded elements.'
      }
    }
  },
  render: () => ({
    components: { ThemeNavigation },
    template: `
      <div class="space-y-8">
        <div class="p-6 bg-gray-50">
          <h3 class="text-xl font-bold mb-2 text-[var(--theme-secondary-dark)]">Current Theme Navigation</h3>
          <p class="text-[var(--theme-secondary)] mb-4">
            Switch between themes using the toolbar to see the navigation adapt its colors, fonts, and styling.
          </p>
        </div>
        <ThemeNavigation
          brand-name="Theme Demo Store"
          :menu-items="['Home', 'Products', 'Categories', 'Deals', 'About', 'Contact']"
          :cart-count="5"
        />
        <div class="p-6 space-y-4">
          <h4 class="text-lg font-semibold text-[var(--theme-secondary-dark)]">Theme Features:</h4>
          <ul class="space-y-2 text-[var(--theme-secondary)]">
            <li>• <strong>PCA Theme:</strong> Professional blue colors, clean Inter font, subtle border radius</li>
            <li>• <strong>ShopSmiles Theme:</strong> Friendly green colors, warm Nunito font, rounded elements</li>
            <li>• <strong>Responsive:</strong> Mobile-friendly with collapsible menu</li>
            <li>• <strong>Interactive:</strong> Hover states and transitions adapt to theme</li>
          </ul>
        </div>
      </div>
    `,
  }),
};