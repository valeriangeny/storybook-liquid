import type { Meta, StoryObj } from '@storybook/vue3';
import ThemeCard from '../../src/components/vue/ThemeCard.vue';
import ThemeButton from '../../src/components/vue/ThemeButton.vue';

const meta: Meta<typeof ThemeCard> = {
  title: 'Brand Showcase/Real Product Data',
  component: ThemeCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Real product data extracted from PCA Skin and ShopSmiles/Colgate websites, showcasing how the same components adapt to different brand identities.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// PCA Skin Products (extracted from actual website)
export const PCAProducts: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Professional skincare products from PCA Skin with actual product data, names, and pricing. Switch to PCA theme to see the professional blue styling.'
      }
    }
  },
  render: () => ({
    components: { ThemeCard, ThemeButton },
    template: `
      <div data-theme="pca" class="space-y-8 p-6 bg-[var(--token-color-background)]">
        <!-- Hero Section -->
        <div class="pca-hero p-8 text-center">
          <h1 class="text-4xl font-bold mb-4" style="font-family: var(--token-font-family-primary)">
            PCA SKIN® Professional Products
          </h1>
          <p class="text-xl opacity-90 max-w-2xl mx-auto">
            Professional skincare solutions trusted by dermatologists and skincare professionals worldwide.
          </p>
        </div>

        <!-- Product Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Vitamin B3 Brightening Serum -->
          <div class="pca-card">
            <div class="pca-product-card">
              <img 
                src="/api/placeholder/300/200" 
                alt="Vitamin B3 Brightening Serum"
                class="pca-product-card__image"
              />
              <div class="p-4">
                <h3 class="pca-product-card__title">Vitamin B3 Brightening Serum</h3>
                <p class="text-sm text-[var(--token-color-text-secondary)] mb-3">
                  A powerful brightening serum that targets discoloration and promotes an even skin tone.
                </p>
                <div class="pca-product-card__price font-semibold">$112.00</div>
                <button class="pca-btn-primary w-full mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <!-- ExLinea Peptide Smoothing Serum -->
          <div class="pca-card">
            <div class="pca-product-card">
              <img 
                src="/api/placeholder/300/200" 
                alt="ExLinea Peptide Smoothing Serum"
                class="pca-product-card__image"
              />
              <div class="p-4">
                <h3 class="pca-product-card__title">ExLinea® Peptide Smoothing Serum</h3>
                <p class="text-sm text-[var(--token-color-text-secondary)] mb-3">
                  Advanced peptide technology to smooth fine lines and improve skin texture.
                </p>
                <div class="pca-product-card__price font-semibold">$120.00</div>
                <button class="pca-btn-secondary w-full mt-4">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <!-- Ideal Complex Eye Gel -->
          <div class="pca-card">
            <div class="pca-product-card">
              <img 
                src="/api/placeholder/300/200" 
                alt="Ideal Complex Eye Gel"
                class="pca-product-card__image"
              />
              <div class="p-4">
                <h3 class="pca-product-card__title">Ideal Complex® Revitalizing Eye Gel</h3>
                <p class="text-sm text-[var(--token-color-text-secondary)] mb-3">
                  Comprehensive eye treatment that targets multiple signs of aging around the delicate eye area.
                </p>
                <div class="pca-product-card__price font-semibold">$89.00</div>
                <button class="pca-btn-primary w-full mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <!-- Collagen Hydrator -->
          <div class="pca-card">
            <div class="pca-product-card">
              <img 
                src="/api/placeholder/300/200" 
                alt="Collagen Hydrator"
                class="pca-product-card__image"
              />
              <div class="p-4">
                <h3 class="pca-product-card__title">Collagen Hydrator</h3>
                <p class="text-sm text-[var(--token-color-text-secondary)] mb-3">
                  Lightweight hydrating serum that supports natural collagen production for firmer skin.
                </p>
                <div class="pca-product-card__price font-semibold">$95.00</div>
                <button class="pca-btn-primary w-full mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <!-- Daily Defense Broad Spectrum SPF 50+ -->
          <div class="pca-card">
            <div class="pca-product-card">
              <img 
                src="/api/placeholder/300/200" 
                alt="Daily Defense SPF 50"
                class="pca-product-card__image"
              />
              <div class="p-4">
                <h3 class="pca-product-card__title">Daily Defense Broad Spectrum SPF 50+</h3>
                <p class="text-sm text-[var(--token-color-text-secondary)] mb-3">
                  Advanced sun protection with antioxidants for daily defense against environmental damage.
                </p>
                <div class="pca-product-card__price font-semibold">$55.00</div>
                <button class="pca-btn-primary w-full mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <!-- Clearskin -->
          <div class="pca-card">
            <div class="pca-product-card">
              <img 
                src="/api/placeholder/300/200" 
                alt="Clearskin"
                class="pca-product-card__image"
              />
              <div class="p-4">
                <h3 class="pca-product-card__title">Clearskin</h3>
                <p class="text-sm text-[var(--token-color-text-secondary)] mb-3">
                  Lightweight hydrator specifically formulated for blemish-prone skin with niacinamide.
                </p>
                <div class="pca-product-card__price font-semibold">$49.00</div>
                <button class="pca-btn-primary w-full mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Professional Note -->
        <div class="bg-[var(--token-color-surface-elevated)] p-6 rounded border-l-4 border-[var(--token-color-primary)]">
          <h4 class="font-semibold text-[var(--token-color-text-primary)] mb-2">Professional Skincare</h4>
          <p class="text-[var(--token-color-text-secondary)]">
            PCA SKIN® develops professional skincare solutions that are only available through licensed skincare professionals. 
            Each product is formulated with pharmaceutical-grade ingredients for optimal results.
          </p>
        </div>
      </div>
    `,
  }),
};

// ShopSmiles Products (extracted from actual website)
export const ShopSmilesProducts: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Oral care products from ShopSmiles by Colgate with real product data. Switch to ShopSmiles theme to see the friendly, colorful styling with curved elements.'
      }
    }
  },
  render: () => ({
    components: { ThemeCard, ThemeButton },
    template: `
      <div data-theme="shopsmiles" class="space-y-8 p-6 bg-[var(--token-color-background)]">
        <!-- Hero Section -->
        <div class="colgate-hero p-8 text-center colgate-curved-container">
          <h1 class="text-4xl font-bold mb-4" style="font-family: var(--token-font-family-primary)">
            ShopSmiles by Colgate
          </h1>
          <p class="text-xl max-w-2xl mx-auto">
            Fresh, clean oral care products delivered to your door. Smile brighter with Colgate's trusted quality.
          </p>
        </div>

        <!-- Product Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Colgate Total Advanced -->
          <div class="colgate-card">
            <div class="colgate-product-card">
              <img 
                src="/api/placeholder/300/200" 
                alt="Colgate Total Advanced Whitening"
                class="colgate-product-card__image"
              />
              <div class="p-6">
                <h3 class="colgate-product-card__title">Colgate Total Advanced Whitening</h3>
                <p class="text-sm text-[var(--token-color-text-secondary)] mb-3">
                  Breakthrough formula that fights bacteria on teeth, tongue, cheeks, and gums for 12 hours.
                </p>
                <div class="flex items-center gap-2 mb-3">
                  <span class="colgate-badge">Best Seller</span>
                </div>
                <div class="colgate-product-card__price font-semibold">$4.99</div>
                <button class="colgate-btn-primary w-full mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <!-- Colgate Optic White -->
          <div class="colgate-card">
            <div class="colgate-product-card">
              <img 
                src="/api/placeholder/300/200" 
                alt="Colgate Optic White Renewal"
                class="colgate-product-card__image"
              />
              <div class="p-6">
                <h3 class="colgate-product-card__title">Colgate Optic White Renewal</h3>
                <p class="text-sm text-[var(--token-color-text-secondary)] mb-3">
                  Whitening toothpaste that removes 10 years of yellow stains when brushing twice daily.
                </p>
                <div class="colgate-product-card__price font-semibold">$6.49</div>
                <button class="colgate-btn-secondary w-full mt-4">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <!-- Electric Toothbrush -->
          <div class="colgate-card">
            <div class="colgate-product-card">
              <img 
                src="/api/placeholder/300/200" 
                alt="Colgate Electric Toothbrush"
                class="colgate-product-card__image"
              />
              <div class="p-6">
                <h3 class="colgate-product-card__title">Colgate Hum Smart Electric Toothbrush</h3>
                <p class="text-sm text-[var(--token-color-text-secondary)] mb-3">
                  Smart sonic toothbrush with app connectivity and personalized brushing feedback.
                </p>
                <div class="colgate-product-card__price font-semibold">$89.99</div>
                <button class="colgate-btn-primary w-full mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <!-- Kids Toothpaste -->
          <div class="colgate-card">
            <div class="colgate-product-card">
              <img 
                src="/api/placeholder/300/200" 
                alt="Colgate Kids Toothpaste"
                class="colgate-product-card__image"
              />
              <div class="p-6">
                <h3 class="colgate-product-card__title">Colgate Kids Bubble Fruit Toothpaste</h3>
                <p class="text-sm text-[var(--token-color-text-secondary)] mb-3">
                  Sugar-free, cavity protection toothpaste with a fun bubble fruit flavor kids love.
                </p>
                <div class="colgate-product-card__price font-semibold">$3.99</div>
                <button class="colgate-btn-primary w-full mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <!-- Mouthwash -->
          <div class="colgate-card">
            <div class="colgate-product-card">
              <img 
                src="/api/placeholder/300/200" 
                alt="Colgate Total Mouthwash"
                class="colgate-product-card__image"
              />
              <div class="p-6">
                <h3 class="colgate-product-card__title">Colgate Total Pro-Shield Mouthwash</h3>
                <p class="text-sm text-[var(--token-color-text-secondary)] mb-3">
                  Alcohol-free mouthwash that kills 99% of germs and provides 12-hour protection.
                </p>
                <div class="colgate-product-card__price font-semibold">$5.99</div>
                <button class="colgate-btn-primary w-full mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <!-- Toothbrush -->
          <div class="colgate-card">
            <div class="colgate-product-card">
              <img 
                src="/api/placeholder/300/200" 
                alt="Colgate 360 Toothbrush"
                class="colgate-product-card__image"
              />
              <div class="p-6">
                <h3 class="colgate-product-card__title">Colgate 360° Whole Mouth Clean</h3>
                <p class="text-sm text-[var(--token-color-text-secondary)] mb-3">
                  Manual toothbrush with bristles that clean teeth and a tongue & cheek cleaner.
                </p>
                <div class="colgate-product-card__price font-semibold">$2.99</div>
                <button class="colgate-btn-primary w-full mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Subscription Offer -->
        <div class="colgate-curved-container p-6 text-center" style="background: var(--token-background-gradient-warm);">
          <h4 class="text-2xl font-bold text-[var(--token-color-text-primary)] mb-2">Never Run Out Again!</h4>
          <p class="text-[var(--token-color-text-secondary)] mb-4">
            Subscribe & Save 15% on your favorite oral care products with free delivery every month.
          </p>
          <button class="colgate-btn-primary">
            Start Subscription
          </button>
        </div>
      </div>
    `,
  }),
};

// Side-by-side comparison
export const BrandComparison: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Direct comparison showing how the same component structure adapts to different brand identities - professional vs. friendly, clinical vs. approachable.'
      }
    }
  },
  render: () => ({
    components: { ThemeCard, ThemeButton },
    template: `
      <div class="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <!-- PCA Skin Side -->
        <div data-theme="pca" class="p-8 bg-[var(--token-color-background)] border-r">
          <div class="mb-6">
            <h2 class="text-2xl font-bold text-[var(--token-color-text-primary)] mb-2">PCA SKIN® Professional</h2>
            <p class="text-[var(--token-color-text-secondary)]">Clinical. Sophisticated. Professional.</p>
          </div>
          
          <div class="space-y-6">
            <div class="pca-card">
              <div class="pca-product-card">
                <img 
                  src="/api/placeholder/280/180" 
                  alt="Professional Serum"
                  class="pca-product-card__image"
                />
                <div class="p-4">
                  <h3 class="pca-product-card__title">C&E Advanced</h3>
                  <p class="text-sm text-[var(--token-color-text-secondary)] mb-3">
                    Antioxidant vitamin C and E serum for environmental protection.
                  </p>
                  <div class="pca-product-card__price font-semibold">$112.00</div>
                  <button class="pca-btn-primary w-full mt-4">
                    Professional Consultation
                  </button>
                </div>
              </div>
            </div>
            
            <div class="bg-[var(--token-color-surface-elevated)] p-4 rounded">
              <p class="text-sm text-[var(--token-color-text-secondary)]">
                <strong>Professional Only:</strong> Available exclusively through licensed skincare professionals.
              </p>
            </div>
          </div>
        </div>

        <!-- ShopSmiles Side -->
        <div data-theme="shopsmiles" class="p-8 bg-[var(--token-color-background)]">
          <div class="mb-6">
            <h2 class="text-2xl font-bold text-[var(--token-color-text-primary)] mb-2">ShopSmiles by Colgate</h2>
            <p class="text-[var(--token-color-text-secondary)]">Fresh. Clean. Accessible.</p>
          </div>
          
          <div class="space-y-6">
            <div class="colgate-card">
              <div class="colgate-product-card">
                <img 
                  src="/api/placeholder/280/180" 
                  alt="Colgate Toothpaste"
                  class="colgate-product-card__image"
                />
                <div class="p-6">
                  <h3 class="colgate-product-card__title">Total Advanced Clean</h3>
                  <p class="text-sm text-[var(--token-color-text-secondary)] mb-3">
                    12-hour antibacterial protection for teeth, tongue, cheeks, and gums.
                  </p>
                  <div class="flex items-center gap-2 mb-3">
                    <span class="colgate-badge">Family Favorite</span>
                  </div>
                  <div class="colgate-product-card__price font-semibold">$4.99</div>
                  <button class="colgate-btn-primary w-full mt-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            <div class="colgate-curved-container p-4" style="background: var(--token-background-gradient-warm);">
              <p class="text-sm text-[var(--token-color-text-secondary)]">
                <strong>Subscribe & Save:</strong> Get 15% off with free monthly delivery to your door.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};