import type { Meta, StoryObj } from '@storybook/vue3';
import ThemeCard from '../../src/components/vue/ThemeCard.vue';

const meta: Meta<typeof ThemeCard> = {
  title: 'Vue Components/ThemeCard',
  component: ThemeCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A themeable product card component that adapts styling based on the selected theme (PCA vs ShopSmiles).'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined']
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Wireless Headphones',
    description: 'Premium quality wireless headphones with noise cancellation and crystal clear sound. Perfect for music lovers and professionals.',
    price: 99.99,
    compareAtPrice: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop&crop=center',
    variant: 'default'
  },
};

export const Elevated: Story = {
  args: {
    title: 'Gaming Mechanical Keyboard',
    description: 'RGB backlit mechanical gaming keyboard with customizable keys and premium switches.',
    price: 79.99,
    compareAtPrice: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop&crop=center',
    variant: 'elevated'
  },
};

export const Outlined: Story = {
  args: {
    title: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop&crop=center',
    variant: 'outlined'
  },
};

export const NoImage: Story = {
  args: {
    title: 'Digital Software License',
    description: 'Professional software suite with lifetime updates and premium support.',
    price: 199.99,
    compareAtPrice: 299.99,
    showPlaceholder: true,
    variant: 'default'
  },
};

export const RegularPrice: Story = {
  args: {
    title: 'USB-C Cable',
    description: 'High-speed charging cable with durable braided design.',
    price: 19.99,
    imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop&crop=center',
    variant: 'default'
  },
};

export const ProductGrid: Story = {
  render: () => ({
    components: { ThemeCard },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        <ThemeCard
          title="Wireless Headphones"
          description="Premium noise-cancelling headphones with superior sound quality"
          :price="99.99"
          :compare-at-price="149.99"
          image-url="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop&crop=center"
          variant="default"
        />
        <ThemeCard
          title="Gaming Keyboard"
          description="Mechanical RGB keyboard perfect for gaming and productivity"
          :price="79.99"
          :compare-at-price="129.99"
          image-url="https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop&crop=center"
          variant="elevated"
        />
        <ThemeCard
          title="Wireless Mouse"
          description="Ergonomic design with precision tracking technology"
          :price="49.99"
          image-url="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop&crop=center"
          variant="outlined"
        />
        <ThemeCard
          title="4K Webcam"
          description="Ultra HD video calling with auto-focus and noise reduction"
          :price="89.99"
          :compare-at-price="119.99"
          image-url="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=200&fit=crop&crop=center"
          variant="default"
        />
        <ThemeCard
          title="Bluetooth Speaker"
          description="Portable speaker with 360° sound and waterproof design"
          :price="59.99"
          image-url="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop&crop=center"
          variant="elevated"
        />
        <ThemeCard
          title="Software Bundle"
          description="Complete productivity suite with cloud sync and collaboration tools"
          :price="199.99"
          :compare-at-price="399.99"
          :show-placeholder="true"
          variant="outlined"
        />
      </div>
    `,
  }),
  parameters: {
    layout: 'padded',
  }
};

export const ThemeShowcase: Story = {
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Showcase how cards adapt to different themes. Switch between PCA (professional blue) and ShopSmiles (friendly green) themes using the toolbar.'
      }
    }
  },
  render: () => ({
    components: { ThemeCard },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-xl font-bold mb-4 text-[var(--theme-secondary-dark)]">Theme Adaptation Demo</h3>
          <p class="text-[var(--theme-secondary)] mb-6">
            These cards automatically adapt their colors, fonts, and border radius based on the selected theme.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ThemeCard
            title="Default Card"
            description="Standard card styling with theme-aware colors and typography."
            :price="99.99"
            :compare-at-price="149.99"
            image-url="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop&crop=center"
            variant="default"
          />
          <ThemeCard
            title="Elevated Card"
            description="Enhanced shadow and rounded corners for premium feel."
            :price="129.99"
            image-url="https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop&crop=center"
            variant="elevated"
          />
          <ThemeCard
            title="Outlined Card"
            description="Prominent border using primary theme color."
            :price="79.99"
            :compare-at-price="99.99"
            image-url="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop&crop=center"
            variant="outlined"
          />
        </div>
      </div>
    `,
  }),
};