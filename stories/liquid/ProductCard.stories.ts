import type { Meta, StoryObj } from '@storybook/vue3';
import LiquidRenderer from '../../src/components/vue/LiquidRenderer.vue';
import productCardTemplate from '../../src/components/liquid/product-card.liquid?raw';

const meta: Meta<typeof LiquidRenderer> = {
  title: 'Liquid Components/Product Card',
  component: LiquidRenderer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Shopify Liquid template for product cards with dynamic pricing, images, and sale indicators.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    'product.title': { control: 'text' },
    'product.description': { control: 'text' },
    'product.price': { control: 'number' },
    'product.compare_at_price': { control: 'number' },
    'product.image': { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'Wireless Headphones',
        description: 'Premium quality wireless headphones with noise cancellation and crystal clear sound. Perfect for music lovers and professionals.',
        price: 99.99,
        compare_at_price: 149.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop&crop=center'
      }
    }
  },
};

export const OnSale: Story = {
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'Gaming Mechanical Keyboard',
        description: 'RGB backlit mechanical gaming keyboard with customizable keys and premium switches for ultimate gaming performance.',
        price: 79.99,
        compare_at_price: 129.99,
        image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop&crop=center'
      }
    }
  },
};

export const RegularPrice: Story = {
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'Wireless Bluetooth Mouse',
        description: 'Ergonomic wireless mouse with precision tracking, long battery life, and comfortable grip for all-day productivity.',
        price: 49.99,
        compare_at_price: null,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop&crop=center'
      }
    }
  },
};

export const NoImage: Story = {
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'USB-C Hub Adapter',
        description: 'Multi-port USB-C hub with HDMI, USB 3.0, SD card reader, and charging pass-through for modern laptops.',
        price: 39.99,
        compare_at_price: 59.99,
        image: null
      }
    }
  },
};

export const LongTitle: Story = {
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'Professional Wireless Noise-Cancelling Over-Ear Headphones with Premium Audio Quality',
        description: 'Experience superior sound quality with these professional-grade wireless headphones featuring advanced noise cancellation technology, premium drivers, and long-lasting battery life perfect for audiophiles and professionals.',
        price: 199.99,
        compare_at_price: 299.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop&crop=center'
      }
    }
  },
};

export const HighDiscount: Story = {
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'Smartphone Stand',
        description: 'Adjustable aluminum smartphone stand with 360-degree rotation and anti-slip base.',
        price: 9.99,
        compare_at_price: 29.99,
        image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=300&h=200&fit=crop&crop=center'
      }
    }
  },
};