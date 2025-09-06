import type { Meta, StoryObj } from '@storybook/vue3';
import ShopifyButton from '../../src/components/vue/ShopifyButton.vue';

const meta: Meta<typeof ShopifyButton> = {
  title: 'Vue Components/ShopifyButton',
  component: ShopifyButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component following Shopify design patterns with multiple variants and states.'
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
  render: (args) => ({
    components: { ShopifyButton },
    setup() {
      return { args };
    },
    template: '<ShopifyButton v-bind="args">Add to Cart</ShopifyButton>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => ({
    components: { ShopifyButton },
    setup() {
      return { args };
    },
    template: '<ShopifyButton v-bind="args">Cancel</ShopifyButton>',
  }),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: (args) => ({
    components: { ShopifyButton },
    setup() {
      return { args };
    },
    template: '<ShopifyButton v-bind="args">Learn More</ShopifyButton>',
  }),
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
  render: (args) => ({
    components: { ShopifyButton },
    setup() {
      return { args };
    },
    template: '<ShopifyButton v-bind="args">Skip</ShopifyButton>',
  }),
};

export const Loading: Story = {
  args: {
    loading: true,
    variant: 'primary',
  },
  render: (args) => ({
    components: { ShopifyButton },
    setup() {
      return { args };
    },
    template: '<ShopifyButton v-bind="args">Processing...</ShopifyButton>',
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    variant: 'primary',
  },
  render: (args) => ({
    components: { ShopifyButton },
    setup() {
      return { args };
    },
    template: '<ShopifyButton v-bind="args">Disabled</ShopifyButton>',
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { ShopifyButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
        <ShopifyButton size="small" variant="primary">Small</ShopifyButton>
        <ShopifyButton size="medium" variant="primary">Medium</ShopifyButton>
        <ShopifyButton size="large" variant="primary">Large</ShopifyButton>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { ShopifyButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <ShopifyButton variant="primary">Primary</ShopifyButton>
        <ShopifyButton variant="secondary">Secondary</ShopifyButton>
        <ShopifyButton variant="outline">Outline</ShopifyButton>
        <ShopifyButton variant="text">Text</ShopifyButton>
      </div>
    `,
  }),
};