import type { Meta, StoryObj } from '@storybook/vue3';
import LiquidRenderer from '../../src/components/vue/LiquidRenderer.vue';
import cartItemTemplate from '../../src/components/liquid/cart-item.liquid?raw';

const meta: Meta<typeof LiquidRenderer> = {
  title: 'Liquid Components/Cart Item',
  component: LiquidRenderer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Shopify Liquid template for shopping cart items with quantity controls and variant information.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    'item.product_title': { control: 'text' },
    'item.variant_title': { control: 'text' },
    'item.price': { control: 'number' },
    'item.quantity': { control: 'number' },
    'item.image': { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    template: cartItemTemplate,
    data: {
      item: {
        product_title: 'Wireless Bluetooth Speaker',
        variant_title: 'Black / Large',
        price: 79.99,
        quantity: 2,
        line_price: 159.98,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=80&h=80&fit=crop&crop=center'
      }
    }
  },
};

export const SingleQuantity: Story = {
  args: {
    template: cartItemTemplate,
    data: {
      item: {
        product_title: 'Premium Wireless Headphones',
        variant_title: 'White',
        price: 129.99,
        quantity: 1,
        line_price: 129.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop&crop=center'
      }
    }
  },
};

export const NoVariant: Story = {
  args: {
    template: cartItemTemplate,
    data: {
      item: {
        product_title: 'USB-C Charging Cable',
        variant_title: 'Default Title',
        price: 19.99,
        quantity: 3,
        line_price: 59.97,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=80&h=80&fit=crop&crop=center'
      }
    }
  },
};

export const NoImage: Story = {
  args: {
    template: cartItemTemplate,
    data: {
      item: {
        product_title: 'Digital Download - Software License',
        variant_title: 'Standard Edition',
        price: 49.99,
        quantity: 1,
        line_price: 49.99,
        image: null
      }
    }
  },
};

export const HighQuantity: Story = {
  args: {
    template: cartItemTemplate,
    data: {
      item: {
        product_title: 'Screen Protector Pack',
        variant_title: 'iPhone 14 Pro',
        price: 12.99,
        quantity: 5,
        line_price: 64.95,
        image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=80&h=80&fit=crop&crop=center'
      }
    }
  },
};

export const LongProductName: Story = {
  args: {
    template: cartItemTemplate,
    data: {
      item: {
        product_title: 'Professional Noise-Cancelling Wireless Bluetooth Headphones with Premium Audio Quality and Extended Battery Life',
        variant_title: 'Midnight Black / Over-Ear',
        price: 199.99,
        quantity: 1,
        line_price: 199.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop&crop=center'
      }
    }
  },
};