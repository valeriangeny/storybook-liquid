import type { Meta, StoryObj } from '@storybook/html';
import productCardHTML from '../../src/components/html/product-card.html?raw';

const meta: Meta = {
  title: 'HTML Components/Product Card',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Pure HTML product card component with CSS styling for e-commerce displays.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    price: { control: 'number' },
    originalPrice: { control: 'number' },
    image: { control: 'text' },
    showDiscount: { control: 'boolean' }
  },
  args: {
    title: 'Wireless Headphones',
    description: 'Premium quality wireless headphones with noise cancellation and crystal clear sound.',
    price: 99.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop&crop=center',
    showDiscount: true
  }
};

export default meta;
type Story = StoryObj;

const createProductCard = (args: any) => {
  const container = document.createElement('div');
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = productCardHTML.match(/<style>([\s\S]*?)<\/style>/)?.[1] || '';
  container.appendChild(style);
  
  // Create product card
  const card = document.createElement('div');
  card.className = 'html-product-card';
  
  const discount = Math.round((1 - args.price / args.originalPrice) * 100);
  
  card.innerHTML = `
    <div class="html-product-image">
      <img src="${args.image}" alt="${args.title}" loading="lazy">
    </div>
    <div class="html-product-info">
      <h3 class="html-product-title">${args.title}</h3>
      <p class="html-product-description">${args.description}</p>
      <div class="html-product-price">
        ${args.showDiscount && args.originalPrice > args.price ? `
          <span class="html-original-price">$${args.originalPrice}</span>
          <span class="html-sale-price">$${args.price}</span>
          <span class="html-discount">${discount}% off</span>
        ` : `
          <span class="html-price">$${args.price}</span>
        `}
      </div>
      <button class="html-add-to-cart-btn" type="button">
        Add to Cart
      </button>
    </div>
  `;
  
  container.appendChild(card);
  return container;
};

export const Default: Story = {
  render: createProductCard
};

export const OnSale: Story = {
  args: {
    title: 'Gaming Keyboard',
    description: 'Mechanical gaming keyboard with RGB backlighting and programmable keys.',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop&crop=center',
    showDiscount: true
  },
  render: createProductCard
};

export const RegularPrice: Story = {
  args: {
    title: 'Bluetooth Mouse',
    description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
    price: 49.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop&crop=center',
    showDiscount: false
  },
  render: createProductCard
};

export const NoImage: Story = {
  args: {
    title: 'Webcam HD 1080p',
    description: 'High-definition webcam for video calls and streaming.',
    price: 79.99,
    originalPrice: 99.99,
    image: '',
    showDiscount: true
  },
  render: (args) => {
    const container = createProductCard(args);
    // Replace image with placeholder
    const img = container.querySelector('img');
    if (img) {
      img.style.display = 'none';
      const placeholder = document.createElement('div');
      placeholder.className = 'html-product-placeholder';
      placeholder.textContent = 'No Image';
      placeholder.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
        color: #999;
        font-size: 14px;
      `;
      img.parentElement?.appendChild(placeholder);
    }
    return container;
  }
};