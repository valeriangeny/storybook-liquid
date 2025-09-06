import type { Meta, StoryObj } from '@storybook/html';
import buttonHTML from '../../src/components/html/button.html?raw';

const meta: Meta = {
  title: 'HTML Components/Button',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Pure HTML button component with CSS styling - no JavaScript framework dependencies.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline']
    },
    size: {
      control: 'select', 
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: 'boolean'
    },
    fullWidth: {
      control: 'boolean'
    }
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    fullWidth: false
  }
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    text: 'Add to Cart'
  },
  render: (args) => {
    const button = document.createElement('button');
    button.className = `html-btn html-btn--${args.variant} html-btn--${args.size}`;
    button.textContent = args.text || 'Button';
    button.disabled = args.disabled;
    
    if (args.fullWidth) {
      button.classList.add('html-btn--full-width');
    }
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = buttonHTML.match(/<style>([\s\S]*?)<\/style>/)?.[1] || '';
    
    const container = document.createElement('div');
    container.appendChild(style);
    container.appendChild(button);
    
    return container;
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    text: 'Cancel'
  },
  render: Primary.render
};

export const Outline: Story = {
  args: {
    variant: 'outline', 
    text: 'Learn More'
  },
  render: Primary.render
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    text: 'Small'
  },
  render: Primary.render
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    text: 'Large Button'
  },
  render: Primary.render
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    text: 'Disabled'
  },
  render: Primary.render
};

export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '12px';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    
    const variants = [
      { variant: 'primary', text: 'Primary' },
      { variant: 'secondary', text: 'Secondary' },
      { variant: 'outline', text: 'Outline' }
    ];
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = buttonHTML.match(/<style>([\s\S]*?)<\/style>/)?.[1] || '';
    container.appendChild(style);
    
    variants.forEach(({ variant, text }) => {
      const button = document.createElement('button');
      button.className = `html-btn html-btn--${variant} html-btn--medium`;
      button.textContent = text;
      container.appendChild(button);
    });
    
    return container;
  }
};