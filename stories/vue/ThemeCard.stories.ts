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
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-4 text-[var(--token-color-text-primary)]">Brand Product Showcase</h3>
          <p class="text-[var(--token-color-text-secondary)] max-w-2xl mx-auto">
            Real products from both brands showing how the same component adapts to different contexts - 
            professional skincare vs. consumer oral care.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          <!-- PCA Professional Products -->
          <ThemeCard
            title="Vitamin B3 Brightening Serum"
            description="Professional-grade brightening serum that targets discoloration and promotes an even skin tone with 20% niacinamide."
            :price="112.00"
            image-url="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=200&fit=crop&crop=center"
            variant="default"
          />
          <ThemeCard
            title="ExLinea® Peptide Smoothing Serum"
            description="Advanced peptide technology clinically proven to smooth fine lines and improve skin texture within 28 days."
            :price="120.00"
            image-url="https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=200&fit=crop&crop=center"
            variant="elevated"
          />
          <ThemeCard
            title="Ideal Complex® Revitalizing Eye Gel"
            description="Comprehensive eye treatment targeting multiple signs of aging around the delicate eye area."
            :price="89.00"
            image-url="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop&crop=center"
            variant="outlined"
          />
          
          <!-- ShopSmiles Consumer Products -->
          <ThemeCard
            title="Colgate Total Advanced Whitening"
            description="Breakthrough formula that fights bacteria on teeth, tongue, cheeks, and gums for 12 hours of protection."
            :price="4.99"
            image-url="https://images.unsplash.com/photo-1584362917165-526a968579e8?w=300&h=200&fit=crop&crop=center"
            variant="default"
          />
          <ThemeCard
            title="Colgate Optic White Renewal"
            description="Removes 10 years of yellow stains when brushing twice daily with hydrogen peroxide whitening."
            :price="6.49"
            image-url="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300&h=200&fit=crop&crop=center"
            variant="elevated"
          />
          <ThemeCard
            title="Colgate Hum Smart Toothbrush"
            description="Smart sonic toothbrush with app connectivity for personalized brushing feedback and guidance."
            :price="89.99"
            :compare-at-price="119.99"
            image-url="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=200&fit=crop&crop=center"
            variant="outlined"
          />
        </div>
        
        <div class="text-center mt-8">
          <p class="text-sm text-[var(--token-color-text-muted)] max-w-xl mx-auto">
            Notice how the same component structure produces dramatically different aesthetics based on the active theme. 
            Typography, colors, border radius, and spacing all adapt automatically.
          </p>
        </div>
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
        story: 'Showcase how cards adapt to different themes. Switch between PCA (professional blue) and ShopSmiles (friendly red/teal) themes using the toolbar.'
      }
    }
  },
  render: () => ({
    components: { ThemeCard },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-xl font-bold mb-4 text-[var(--token-color-text-primary)]">Theme Adaptation Demo</h3>
          <p class="text-[var(--token-color-text-secondary)] mb-6">
            These cards automatically adapt their colors, fonts, and border radius based on the selected theme.
            Try switching themes in the toolbar to see the transformation.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ThemeCard
            title="Professional Grade Treatment"
            description="Clinical strength formulation designed for professional results and optimal skin health."
            :price="112.00"
            :compare-at-price="149.99"
            image-url="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=200&fit=crop&crop=center"
            variant="default"
          />
          <ThemeCard
            title="Family Care Essential"
            description="Trusted quality for the whole family with convenient delivery options."
            :price="6.49"
            image-url="https://images.unsplash.com/photo-1584362917165-526a968579e8?w=300&h=200&fit=crop&crop=center"
            variant="elevated"
          />
          <ThemeCard
            title="Advanced Solution"
            description="Premium formulation with clinically proven ingredients and professional recommendations."
            :price="89.00"
            :compare-at-price="119.99"
            image-url="https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=200&fit=crop&crop=center"
            variant="outlined"
          />
        </div>

        <!-- Theme-specific styling examples -->
        <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div data-theme="pca" class="p-6 rounded border">
            <h4 class="text-lg font-semibold mb-4 text-[var(--token-color-text-primary)]">PCA SKIN® Professional Theme</h4>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-[var(--token-color-text-secondary)]">Primary Color:</span>
                <span class="text-[var(--token-color-primary)]">#125ce0</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--token-color-text-secondary)]">Font Family:</span>
                <span class="text-[var(--token-color-text-primary)]">hero-new</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--token-color-text-secondary)]">Border Radius:</span>
                <span class="text-[var(--token-color-text-primary)]">Minimal/Sharp</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--token-color-text-secondary)]">Style:</span>
                <span class="text-[var(--token-color-text-primary)]">Clinical & Professional</span>
              </div>
            </div>
          </div>

          <div data-theme="shopsmiles" class="p-6 rounded border">
            <h4 class="text-lg font-semibold mb-4 text-[var(--token-color-text-primary)]">ShopSmiles by Colgate Theme</h4>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-[var(--token-color-text-secondary)]">Primary Color:</span>
                <span class="text-[var(--token-color-primary)]">#f5010b</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--token-color-text-secondary)]">Font Family:</span>
                <span class="text-[var(--token-color-text-primary)]">Colgate Ready</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--token-color-text-secondary)]">Border Radius:</span>
                <span class="text-[var(--token-color-text-primary)]">Curved/50px</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[var(--token-color-text-secondary)]">Style:</span>
                <span class="text-[var(--token-color-text-primary)]">Friendly & Approachable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};