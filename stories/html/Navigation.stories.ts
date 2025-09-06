import type { Meta, StoryObj } from '@storybook/html';
import navigationHTML from '../../src/components/html/navigation.html?raw';

const meta: Meta = {
  title: 'HTML Components/Navigation',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Pure HTML navigation component with responsive design for e-commerce sites.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    brandText: { control: 'text' },
    cartCount: { control: 'number' },
    showCartCount: { control: 'boolean' },
    menuItems: { control: 'object' }
  },
  args: {
    brandText: 'Shopify Store',
    cartCount: 3,
    showCartCount: true,
    menuItems: ['Home', 'Products', 'Collections', 'About', 'Contact']
  }
};

export default meta;
type Story = StoryObj;

const createNavigation = (args: any) => {
  const container = document.createElement('div');
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = navigationHTML.match(/<style>([\s\S]*?)<\/style>/)?.[1] || '';
  container.appendChild(style);
  
  // Create navigation
  const nav = document.createElement('nav');
  nav.className = 'html-navigation';
  
  const menuHTML = args.menuItems.map((item: string) => 
    `<li><a href="#" class="html-nav-link">${item}</a></li>`
  ).join('');
  
  nav.innerHTML = `
    <div class="html-nav-container">
      <div class="html-nav-brand">
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#008060"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#FFF"
            />
          </g>
        </svg>
        <span class="html-brand-text">${args.brandText}</span>
      </div>
      
      <ul class="html-nav-menu">
        ${menuHTML}
      </ul>
      
      <div class="html-nav-actions">
        <button class="html-search-btn" type="button" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
        <button class="html-cart-btn" type="button" aria-label="Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="m1 1 4 4 16 6H6"></path>
          </svg>
          ${args.showCartCount ? `<span class="html-cart-count">${args.cartCount}</span>` : ''}
        </button>
      </div>
    </div>
  `;
  
  container.appendChild(nav);
  return container;
};

export const Default: Story = {
  render: createNavigation
};

export const EmptyCart: Story = {
  args: {
    cartCount: 0,
    showCartCount: false
  },
  render: createNavigation
};

export const MinimalMenu: Story = {
  args: {
    brandText: 'Store',
    menuItems: ['Shop', 'About'],
    cartCount: 1,
    showCartCount: true
  },
  render: createNavigation
};

export const ExtendedMenu: Story = {
  args: {
    brandText: 'Mega Store',
    menuItems: ['Home', 'Electronics', 'Clothing', 'Books', 'Sports', 'Garden', 'About', 'Contact'],
    cartCount: 12,
    showCartCount: true
  },
  render: createNavigation
};