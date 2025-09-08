import type { Meta, StoryObj } from '@storybook/vue3';
import ThemeButton from '../../src/components/vue/ThemeButton.vue';

const meta: Meta<typeof ThemeButton> = {
  title: 'Vue Components/ThemeButton',
  component: ThemeButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A themeable button component that adapts to both PCA and ShopSmiles themes using CSS variables.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset']
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args: any) => ({
    components: { ThemeButton },
    setup() {
      return { args };
    },
    template: '<ThemeButton v-bind="args">Add to Cart</ThemeButton>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args: any) => ({
    components: { ThemeButton },
    setup() {
      return { args };
    },
    template: '<ThemeButton v-bind="args">Cancel</ThemeButton>',
  }),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: (args: any) => ({
    components: { ThemeButton },
    setup() {
      return { args };
    },
    template: '<ThemeButton v-bind="args">Learn More</ThemeButton>',
  }),
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
  render: (args: any) => ({
    components: { ThemeButton },
    setup() {
      return { args };
    },
    template: '<ThemeButton v-bind="args">Skip</ThemeButton>',
  }),
};

export const Loading: Story = {
  args: {
    loading: true,
    variant: 'primary',
  },
  render: (args: any) => ({
    components: { ThemeButton },
    setup() {
      return { args };
    },
    template: '<ThemeButton v-bind="args">Processing...</ThemeButton>',
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { ThemeButton },
    template: `
      <div class="flex flex-col items-start gap-4">
        <ThemeButton size="small" variant="primary">Small</ThemeButton>
        <ThemeButton size="medium" variant="primary">Medium</ThemeButton>
        <ThemeButton size="large" variant="primary">Large</ThemeButton>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { ThemeButton },
    template: `
      <div class="flex flex-wrap gap-4">
        <ThemeButton variant="primary">Primary</ThemeButton>
        <ThemeButton variant="secondary">Secondary</ThemeButton>
        <ThemeButton variant="outline">Outline</ThemeButton>
        <ThemeButton variant="text">Text</ThemeButton>
      </div>
    `,
  }),
};

export const ThemeComparison: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Compare how the button looks in different themes. Use the theme selector in the toolbar to switch between PCA (blue) and ShopSmiles (green) themes.'
      }
    }
  },
  render: () => ({
    components: { ThemeButton },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-medium mb-3 text-[var(--theme-secondary-dark)]">Primary Actions</h3>
          <div class="flex gap-3">
            <ThemeButton variant="primary">Add to Cart</ThemeButton>
            <ThemeButton variant="primary" size="large">Buy Now</ThemeButton>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-medium mb-3 text-[var(--theme-secondary-dark)]">Secondary Actions</h3>
          <div class="flex gap-3">
            <ThemeButton variant="secondary">Cancel</ThemeButton>
            <ThemeButton variant="outline">Learn More</ThemeButton>
            <ThemeButton variant="text">Skip</ThemeButton>
          </div>
        </div>
      </div>
    `,
  }),
};