import type { Meta, StoryObj } from '@storybook/vue3';
import ProductGrid from '../../src/components/vue/ProductGrid.vue';

const meta: Meta<typeof ProductGrid> = {
  title: 'Vue Components/ProductGrid',
  component: ProductGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A responsive grid layout component for displaying products with customizable columns and spacing.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3, 4, 6]
    },
    gap: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    responsive: {
      control: 'boolean'
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockProductCard = `
<div style="
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
">
  <div style="
    width: 100%;
    height: 200px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    font-weight: 600;
  ">
    Product Image
  </div>
  <div style="padding: 16px;">
    <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #333;">Product Title</h3>
    <p style="margin: 0 0 12px 0; font-size: 14px; color: #666;">Product description...</p>
    <div style="font-size: 18px; font-weight: 600; color: #008060;">$99.99</div>
  </div>
</div>
`;

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    gap: 'medium',
    responsive: true,
  },
  render: (args) => ({
    components: { ProductGrid },
    setup() {
      return { args, mockProductCard };
    },
    template: `
      <ProductGrid v-bind="args">
        <div v-for="i in 6" :key="i" v-html="mockProductCard"></div>
      </ProductGrid>
    `,
  }),
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
    gap: 'medium',
    responsive: true,
  },
  render: (args) => ({
    components: { ProductGrid },
    setup() {
      return { args, mockProductCard };
    },
    template: `
      <ProductGrid v-bind="args">
        <div v-for="i in 4" :key="i" v-html="mockProductCard"></div>
      </ProductGrid>
    `,
  }),
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    gap: 'medium',
    responsive: true,
  },
  render: (args) => ({
    components: { ProductGrid },
    setup() {
      return { args, mockProductCard };
    },
    template: `
      <ProductGrid v-bind="args">
        <div v-for="i in 8" :key="i" v-html="mockProductCard"></div>
      </ProductGrid>
    `,
  }),
};

export const SingleColumn: Story = {
  args: {
    columns: 1,
    gap: 'large',
    responsive: false,
  },
  render: (args) => ({
    components: { ProductGrid },
    setup() {
      return { args, mockProductCard };
    },
    template: `
      <ProductGrid v-bind="args">
        <div v-for="i in 3" :key="i" v-html="mockProductCard"></div>
      </ProductGrid>
    `,
  }),
};

export const ResponsiveShowcase: Story = {
  args: {
    columns: 4,
    gap: 'medium',
    responsive: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'This grid adapts to different screen sizes: 4 columns on desktop, 3 on tablet, 2 on mobile, and 1 on very small screens.'
      }
    }
  },
  render: (args) => ({
    components: { ProductGrid },
    setup() {
      return { args, mockProductCard };
    },
    template: `
      <div>
        <p style="margin-bottom: 20px; color: #666; font-family: system-ui;">
          Resize the viewport to see the responsive behavior
        </p>
        <ProductGrid v-bind="args">
          <div v-for="i in 12" :key="i" v-html="mockProductCard"></div>
        </ProductGrid>
      </div>
    `,
  }),
};