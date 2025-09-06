import type { Meta, StoryObj } from '@storybook/vue3';
import LiquidRenderer from '../../src/components/vue/LiquidRenderer.vue';
import productCardTemplate from '../../src/components/liquid/product-card.liquid?raw';
import cartItemTemplate from '../../src/components/liquid/cart-item.liquid?raw';

const meta: Meta<typeof LiquidRenderer> = {
  title: 'Vue Components/LiquidRenderer',
  component: LiquidRenderer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A Vue component that renders Shopify Liquid templates with dynamic data binding.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    template: {
      control: 'text',
      description: 'Liquid template string'
    },
    data: {
      control: 'object',
      description: 'Data object to pass to the template'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductCard: Story = {
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

export const CartItem: Story = {
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

export const SimpleLoop: Story = {
  args: {
    template: `
<div class="product-list">
  <h2>Featured Products</h2>
  <div class="products">
    {% for product in products %}
      <div class="product-item">
        <h3>{{ product.title }}</h3>
        <p class="price">\${{ product.price }}</p>
        {% if product.on_sale %}
          <span class="sale-badge">On Sale!</span>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</div>

<style>
.product-list {
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.product-list h2 {
  margin-bottom: 20px;
  color: #333;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.product-item {
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  position: relative;
}

.product-item h3 {
  margin: 0 0 8px 0;
  color: #333;
}

.price {
  font-size: 18px;
  font-weight: 600;
  color: #008060;
  margin: 0;
}

.sale-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #e74c3c;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}
</style>
    `,
    data: {
      products: [
        { title: 'Wireless Mouse', price: 29.99, on_sale: true },
        { title: 'USB Keyboard', price: 59.99, on_sale: false },
        { title: 'Webcam HD', price: 89.99, on_sale: true },
        { title: 'Monitor Stand', price: 39.99, on_sale: false }
      ]
    }
  },
};