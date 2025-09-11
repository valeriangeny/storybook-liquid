import type { Meta, StoryObj } from '@storybook/vue3';
import LiquidRenderer from '../../src/components/vue/LiquidRenderer.vue';

const meta: Meta<typeof LiquidRenderer> = {
  title: 'Brand Showcase/Liquid Product Cards',
  component: LiquidRenderer,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Liquid template product cards with real product data from PCA Skin and ShopSmiles/Colgate, showcasing how Liquid templates adapt to different brand themes.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// PCA Skin Professional Product Cards
export const PCAProductCards: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Professional skincare product cards using Liquid templates with actual PCA Skin products, prices, and descriptions. Features clinical terminology and professional styling.'
      }
    }
  },
  args: {
    template: `
      <div data-theme="pca" class="bg-[var(--token-color-background)] p-8">
        <div class="max-w-7xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-[var(--token-color-text-primary)] mb-4" style="font-family: var(--token-font-family-primary)">
              PCA SKIN® Professional Products
            </h1>
            <p class="text-lg text-[var(--token-color-text-secondary)] max-w-3xl mx-auto">
              Clinically-proven skincare solutions available exclusively through licensed professionals. 
              Each product is formulated with pharmaceutical-grade ingredients for optimal results.
            </p>
          </div>

          <!-- Product Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {% assign products = '
              {
                "title": "Vitamin B3 Brightening Serum",
                "description": "A powerful brightening serum that targets discoloration and uneven skin tone. Contains pharmaceutical-grade niacinamide for optimal results.",
                "price": "$112.00",
                "ingredients": "Niacinamide 20%, Alpha Arbutin, Kojic Acid",
                "skin_concern": "Hyperpigmentation & Discoloration",
                "professional_note": "Professional consultation recommended",
                "image": "/api/placeholder/300/300"
              },
              {
                "title": "ExLinea® Peptide Smoothing Serum",
                "description": "Advanced peptide technology clinically proven to smooth fine lines and improve skin texture within 28 days of use.",
                "price": "$120.00",
                "ingredients": "Acetyl Hexapeptide-8, Palmitoyl Oligopeptide",
                "skin_concern": "Fine Lines & Wrinkles",
                "professional_note": "Use as directed by skincare professional",
                "image": "/api/placeholder/300/300"
              },
              {
                "title": "Ideal Complex® Revitalizing Eye Gel",
                "description": "Comprehensive eye treatment targeting multiple signs of aging around the delicate eye area with clinically-tested ingredients.",
                "price": "$89.00", 
                "ingredients": "Vitamin K Oxide, Peptides, Ceramides",
                "skin_concern": "Dark Circles & Puffiness",
                "professional_note": "Professional application technique available",
                "image": "/api/placeholder/300/300"
              },
              {
                "title": "C&E Advanced Antioxidant Serum",
                "description": "Potent antioxidant serum with L-ascorbic acid and tocopherol for environmental protection and collagen support.",
                "price": "$108.00",
                "ingredients": "L-Ascorbic Acid 15%, Vitamin E, Ferulic Acid", 
                "skin_concern": "Environmental Damage & Aging",
                "professional_note": "Gradual introduction recommended",
                "image": "/api/placeholder/300/300"
              },
              {
                "title": "Daily Defense Broad Spectrum SPF 50+",
                "description": "Advanced sun protection with zinc oxide and antioxidants for comprehensive daily defense against environmental aggressors.",
                "price": "$55.00",
                "ingredients": "Zinc Oxide 12%, Antioxidant Complex",
                "skin_concern": "Sun Protection & Prevention", 
                "professional_note": "Apply 15 minutes before sun exposure",
                "image": "/api/placeholder/300/300"
              },
              {
                "title": "Clearskin Professional Acne Treatment",
                "description": "Professional-strength acne treatment with niacinamide and salicylic acid for blemish-prone skin.",
                "price": "$49.00",
                "ingredients": "Niacinamide 4%, Salicylic Acid 2%",
                "skin_concern": "Acne & Blemishes",
                "professional_note": "Professional skin analysis recommended",
                "image": "/api/placeholder/300/300"
              }
            ' | split: ',' %}

            {% for product_json in products %}
              {% assign product = product_json | strip | remove: '{' | remove: '}' | split: ',' %}
              <div class="pca-card group">
                <div class="pca-product-card h-full">
                  <div class="aspect-square overflow-hidden">
                    <img 
                      src="/api/placeholder/300/300" 
                      alt="Professional Skincare Product"
                      class="pca-product-card__image object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div class="absolute top-4 left-4">
                      <span class="bg-[var(--token-color-primary)] text-[var(--token-color-surface)] px-2 py-1 text-xs font-medium rounded">
                        Professional Only
                      </span>
                    </div>
                  </div>
                  
                  <div class="p-6 flex flex-col flex-grow">
                    {% case forloop.index %}
                      {% when 1 %}
                        <h3 class="pca-product-card__title">Vitamin B3 Brightening Serum</h3>
                        <p class="text-sm text-[var(--token-color-text-secondary)] mb-4 flex-grow">
                          A powerful brightening serum that targets discoloration and uneven skin tone. Contains pharmaceutical-grade niacinamide for optimal results.
                        </p>
                        <div class="space-y-2 mb-4">
                          <p class="text-xs text-[var(--token-color-text-muted)]">
                            <strong>Key Ingredients:</strong> Niacinamide 20%, Alpha Arbutin, Kojic Acid
                          </p>
                          <p class="text-xs text-[var(--token-color-text-muted)]">
                            <strong>Targets:</strong> Hyperpigmentation & Discoloration
                          </p>
                        </div>
                        <div class="pca-product-card__price text-xl font-semibold mb-4">$112.00</div>
                      {% when 2 %}
                        <h3 class="pca-product-card__title">ExLinea® Peptide Smoothing Serum</h3>
                        <p class="text-sm text-[var(--token-color-text-secondary)] mb-4 flex-grow">
                          Advanced peptide technology clinically proven to smooth fine lines and improve skin texture within 28 days of use.
                        </p>
                        <div class="space-y-2 mb-4">
                          <p class="text-xs text-[var(--token-color-text-muted)]">
                            <strong>Key Ingredients:</strong> Acetyl Hexapeptide-8, Palmitoyl Oligopeptide
                          </p>
                          <p class="text-xs text-[var(--token-color-text-muted)]">
                            <strong>Targets:</strong> Fine Lines & Wrinkles
                          </p>
                        </div>
                        <div class="pca-product-card__price text-xl font-semibold mb-4">$120.00</div>
                      {% when 3 %}
                        <h3 class="pca-product-card__title">Ideal Complex® Revitalizing Eye Gel</h3>
                        <p class="text-sm text-[var(--token-color-text-secondary)] mb-4 flex-grow">
                          Comprehensive eye treatment targeting multiple signs of aging around the delicate eye area with clinically-tested ingredients.
                        </p>
                        <div class="space-y-2 mb-4">
                          <p class="text-xs text-[var(--token-color-text-muted)]">
                            <strong>Key Ingredients:</strong> Vitamin K Oxide, Peptides, Ceramides
                          </p>
                          <p class="text-xs text-[var(--token-color-text-muted)]">
                            <strong>Targets:</strong> Dark Circles & Puffiness
                          </p>
                        </div>
                        <div class="pca-product-card__price text-xl font-semibold mb-4">$89.00</div>
                      {% when 4 %}
                        <h3 class="pca-product-card__title">C&E Advanced Antioxidant Serum</h3>
                        <p class="text-sm text-[var(--token-color-text-secondary)] mb-4 flex-grow">
                          Potent antioxidant serum with L-ascorbic acid and tocopherol for environmental protection and collagen support.
                        </p>
                        <div class="space-y-2 mb-4">
                          <p class="text-xs text-[var(--token-color-text-muted)]">
                            <strong>Key Ingredients:</strong> L-Ascorbic Acid 15%, Vitamin E, Ferulic Acid
                          </p>
                          <p class="text-xs text-[var(--token-color-text-muted)]">
                            <strong>Targets:</strong> Environmental Damage & Aging
                          </p>
                        </div>
                        <div class="pca-product-card__price text-xl font-semibold mb-4">$108.00</div>
                      {% when 5 %}
                        <h3 class="pca-product-card__title">Daily Defense Broad Spectrum SPF 50+</h3>
                        <p class="text-sm text-[var(--token-color-text-secondary)] mb-4 flex-grow">
                          Advanced sun protection with zinc oxide and antioxidants for comprehensive daily defense against environmental aggressors.
                        </p>
                        <div class="space-y-2 mb-4">
                          <p class="text-xs text-[var(--token-color-text-muted)]">
                            <strong>Key Ingredients:</strong> Zinc Oxide 12%, Antioxidant Complex
                          </p>
                          <p class="text-xs text-[var(--token-color-text-muted)]">
                            <strong>Targets:</strong> Sun Protection & Prevention
                          </p>
                        </div>
                        <div class="pca-product-card__price text-xl font-semibold mb-4">$55.00</div>
                      {% else %}
                        <h3 class="pca-product-card__title">Clearskin Professional Acne Treatment</h3>
                        <p class="text-sm text-[var(--token-color-text-secondary)] mb-4 flex-grow">
                          Professional-strength acne treatment with niacinamide and salicylic acid for blemish-prone skin.
                        </p>
                        <div class="space-y-2 mb-4">
                          <p class="text-xs text-[var(--token-color-text-muted)]">
                            <strong>Key Ingredients:</strong> Niacinamide 4%, Salicylic Acid 2%
                          </p>
                          <p class="text-xs text-[var(--token-color-text-muted)]">
                            <strong>Targets:</strong> Acne & Blemishes
                          </p>
                        </div>
                        <div class="pca-product-card__price text-xl font-semibold mb-4">$49.00</div>
                    {% endcase %}
                    
                    <div class="mt-auto">
                      <button class="pca-btn-primary w-full mb-2">
                        Find a Professional
                      </button>
                      <button class="pca-btn-secondary w-full text-sm">
                        View Clinical Data
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            {% endfor %}
          </div>

          <!-- Professional Notice -->
          <div class="mt-12 bg-[var(--token-color-surface-elevated)] border-l-4 border-[var(--token-color-primary)] p-6 rounded">
            <h3 class="text-lg font-semibold text-[var(--token-color-text-primary)] mb-2">
              Professional Products Notice
            </h3>
            <p class="text-[var(--token-color-text-secondary)] mb-4">
              PCA SKIN® products are available exclusively through licensed skincare professionals. 
              A professional consultation is recommended to determine the best treatment plan for your specific skin needs.
            </p>
            <button class="pca-btn-primary">
              Locate a Licensed Professional
            </button>
          </div>
        </div>
      </div>
    `,
    data: {
      theme: 'pca',
      brand: 'PCA SKIN',
      professional_only: true
    }
  },
};

// ShopSmiles Consumer Product Cards
export const ShopSmilesProductCards: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Consumer-friendly oral care product cards with real ShopSmiles/Colgate products, featuring subscription options, family-focused messaging, and accessible pricing.'
      }
    }
  },
  args: {
    template: `
      <div data-theme="shopsmiles" class="bg-[var(--token-color-background)] p-8">
        <div class="max-w-7xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-[var(--token-color-text-primary)] mb-4" style="font-family: var(--token-font-family-primary)">
              ShopSmiles by Colgate
            </h1>
            <p class="text-lg text-[var(--token-color-text-secondary)] max-w-3xl mx-auto">
              Fresh, clean oral care products delivered to your door. 
              From the brand dentists recommend most, with convenient subscription options and family-friendly prices.
            </p>
          </div>

          <!-- Special Offers Banner -->
          <div class="colgate-curved-container p-6 mb-12 text-center" style="background: var(--token-background-gradient-warm);">
            <h2 class="text-2xl font-bold text-[var(--token-color-text-primary)] mb-2">
              Subscribe & Save 15%
            </h2>
            <p class="text-[var(--token-color-text-secondary)]">
              Free shipping on orders over $25 • Cancel anytime • Skip or modify deliveries
            </p>
          </div>

          <!-- Product Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {% for i in (1..6) %}
              <div class="colgate-card group">
                <div class="colgate-product-card h-full">
                  <div class="aspect-square overflow-hidden relative">
                    <img 
                      src="/api/placeholder/300/300" 
                      alt="Oral Care Product"
                      class="colgate-product-card__image object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    {% case i %}
                      {% when 1 or 3 or 5 %}
                        <div class="absolute top-4 left-4">
                          <span class="colgate-badge">Best Seller</span>
                        </div>
                      {% when 2 %}
                        <div class="absolute top-4 left-4">
                          <span class="colgate-badge">Family Pack</span>
                        </div>
                      {% when 4 %}
                        <div class="absolute top-4 left-4">
                          <span class="colgate-badge">Kids Favorite</span>
                        </div>
                    {% endcase %}
                  </div>
                  
                  <div class="p-6 flex flex-col flex-grow">
                    {% case i %}
                      {% when 1 %}
                        <h3 class="colgate-product-card__title">Colgate Total Advanced Whitening</h3>
                        <p class="text-sm text-[var(--token-color-text-secondary)] mb-4 flex-grow">
                          Breakthrough formula that fights bacteria on teeth, tongue, cheeks, and gums for 12 hours. 
                          Whitens teeth by gently removing surface stains.
                        </p>
                        <div class="flex items-center gap-2 mb-2">
                          <div class="text-yellow-500 text-sm">★★★★★</div>
                          <span class="text-xs text-[var(--token-color-text-muted)]">(2,847 reviews)</span>
                        </div>
                        <div class="colgate-product-card__price text-xl font-semibold mb-4">$4.99</div>
                      {% when 2 %}
                        <h3 class="colgate-product-card__title">Colgate Optic White Renewal</h3>
                        <p class="text-sm text-[var(--token-color-text-secondary)] mb-4 flex-grow">
                          Removes 10 years of yellow stains when brushing twice daily. 
                          Contains hydrogen peroxide, a dentist-recommended whitening ingredient.
                        </p>
                        <div class="flex items-center gap-2 mb-2">
                          <div class="text-yellow-500 text-sm">★★★★☆</div>
                          <span class="text-xs text-[var(--token-color-text-muted)]">(1,923 reviews)</span>
                        </div>
                        <div class="colgate-product-card__price text-xl font-semibold mb-4">$6.49</div>
                      {% when 3 %}
                        <h3 class="colgate-product-card__title">Colgate Hum Smart Electric Toothbrush</h3>
                        <p class="text-sm text-[var(--token-color-text-secondary)] mb-4 flex-grow">
                          Smart sonic toothbrush with app connectivity for personalized brushing feedback. 
                          Helps improve your brushing habits with real-time guidance.
                        </p>
                        <div class="flex items-center gap-2 mb-2">
                          <div class="text-yellow-500 text-sm">★★★★★</div>
                          <span class="text-xs text-[var(--token-color-text-muted)]">(756 reviews)</span>
                        </div>
                        <div class="colgate-product-card__price text-xl font-semibold mb-4">$89.99</div>
                      {% when 4 %}
                        <h3 class="colgate-product-card__title">Colgate Kids Bubble Fruit Toothpaste</h3>
                        <p class="text-sm text-[var(--token-color-text-secondary)] mb-4 flex-grow">
                          Sugar-free cavity protection toothpaste with a fun bubble fruit flavor kids love. 
                          Gentle on tooth enamel and safe if swallowed when used as directed.
                        </p>
                        <div class="flex items-center gap-2 mb-2">
                          <div class="text-yellow-500 text-sm">★★★★★</div>
                          <span class="text-xs text-[var(--token-color-text-muted)]">(3,142 reviews)</span>
                        </div>
                        <div class="colgate-product-card__price text-xl font-semibold mb-4">$3.99</div>
                      {% when 5 %}
                        <h3 class="colgate-product-card__title">Colgate Total Pro-Shield Mouthwash</h3>
                        <p class="text-sm text-[var(--token-color-text-secondary)] mb-4 flex-grow">
                          Alcohol-free mouthwash that kills 99% of germs and provides 12-hour protection against bacteria. 
                          Fresh mint flavor for long-lasting freshness.
                        </p>
                        <div class="flex items-center gap-2 mb-2">
                          <div class="text-yellow-500 text-sm">★★★★☆</div>
                          <span class="text-xs text-[var(--token-color-text-muted)]">(1,456 reviews)</span>
                        </div>
                        <div class="colgate-product-card__price text-xl font-semibold mb-4">$5.99</div>
                      {% else %}
                        <h3 class="colgate-product-card__title">Colgate 360° Whole Mouth Clean</h3>
                        <p class="text-sm text-[var(--token-color-text-secondary)] mb-4 flex-grow">
                          Manual toothbrush with bristles that clean teeth plus a tongue & cheek cleaner. 
                          Reaches deep between teeth for a thorough clean.
                        </p>
                        <div class="flex items-center gap-2 mb-2">
                          <div class="text-yellow-500 text-sm">★★★★☆</div>
                          <span class="text-xs text-[var(--token-color-text-muted)]">(2,089 reviews)</span>
                        </div>
                        <div class="colgate-product-card__price text-xl font-semibold mb-4">$2.99</div>
                    {% endcase %}
                    
                    <!-- Subscription Options -->
                    <div class="bg-[var(--token-color-surface-elevated)] rounded-lg p-3 mb-4">
                      <div class="flex items-center justify-between">
                        <span class="text-sm text-[var(--token-color-text-secondary)]">Subscribe & Save:</span>
                        <span class="text-sm font-semibold text-[var(--token-color-secondary)]">
                          {% case i %}
                            {% when 1 %}$4.24
                            {% when 2 %}$5.52
                            {% when 3 %}$76.49
                            {% when 4 %}$3.39
                            {% when 5 %}$5.09
                            {% else %}$2.54
                          {% endcase %}
                        </span>
                      </div>
                      <p class="text-xs text-[var(--token-color-text-muted)]">15% off with free delivery</p>
                    </div>
                    
                    <div class="mt-auto space-y-2">
                      <button class="colgate-btn-primary w-full">
                        Add to Cart
                      </button>
                      <button class="colgate-btn-secondary w-full text-sm">
                        Subscribe & Save 15%
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            {% endfor %}
          </div>

          <!-- Family Pack Promotion -->
          <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="colgate-card p-8 text-center">
              <div class="text-6xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 class="text-2xl font-bold text-[var(--token-color-text-primary)] mb-2">
                Family Pack Savings
              </h3>
              <p class="text-[var(--token-color-text-secondary)] mb-6">
                Buy multiple products together and save even more. Perfect for families with different oral care needs.
              </p>
              <button class="colgate-btn-primary">
                Shop Family Packs
              </button>
            </div>
            
            <div class="colgate-curved-container p-8 text-center" style="background: var(--token-background-gradient-warm);">
              <div class="text-6xl mb-4">🎯</div>
              <h3 class="text-2xl font-bold text-[var(--token-color-text-primary)] mb-2">
                Never Run Out Again
              </h3>
              <p class="text-[var(--token-color-text-secondary)] mb-6">
                Set up automatic deliveries for your favorite products. Skip, modify, or cancel anytime.
              </p>
              <button class="colgate-btn-secondary">
                Learn About Subscriptions
              </button>
            </div>
          </div>

          <!-- Customer Testimonials -->
          <div class="mt-12 bg-[var(--token-color-surface-elevated)] rounded-lg p-8">
            <h3 class="text-2xl font-bold text-[var(--token-color-text-primary)] text-center mb-8">
              What Our Customers Say
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="text-yellow-500 text-xl mb-2">★★★★★</div>
                <p class="text-[var(--token-color-text-secondary)] mb-3">
                  "Love the subscription service! Never have to worry about running out of toothpaste again."
                </p>
                <p class="text-sm font-semibold text-[var(--token-color-text-primary)]">- Sarah M.</p>
              </div>
              <div class="text-center">
                <div class="text-yellow-500 text-xl mb-2">★★★★★</div>
                <p class="text-[var(--token-color-text-secondary)] mb-3">
                  "Great prices and fast delivery. The kids love the bubble fruit flavor!"
                </p>
                <p class="text-sm font-semibold text-[var(--token-color-text-primary)]">- Mike R.</p>
              </div>
              <div class="text-center">
                <div class="text-yellow-500 text-xl mb-2">★★★★★</div>
                <p class="text-[var(--token-color-text-secondary)] mb-3">
                  "The smart toothbrush has really helped improve our family's brushing habits."
                </p>
                <p class="text-sm font-semibold text-[var(--token-color-text-primary)]">- Jennifer L.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    data: {
      theme: 'shopsmiles',
      brand: 'ShopSmiles by Colgate',
      subscription_available: true,
      free_shipping_threshold: 25
    }
  },
};

// Liquid Component Comparison
export const LiquidComponentComparison: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Side-by-side comparison showing how the same Liquid template structure produces completely different experiences based on theme and data context.'
      }
    }
  },
  args: {
    template: `
      <div class="grid grid-cols-1 xl:grid-cols-2 min-h-screen">
        <!-- PCA Professional Side -->
        <div data-theme="pca" class="p-8 bg-[var(--token-color-background)] border-r">
          <div class="max-w-xl mx-auto">
            <h2 class="text-2xl font-bold text-[var(--token-color-text-primary)] mb-6 text-center">
              PCA SKIN® Professional
            </h2>
            
            <div class="pca-card mb-6">
              <div class="pca-product-card">
                <img 
                  src="/api/placeholder/300/200" 
                  alt="Professional Treatment"
                  class="pca-product-card__image"
                />
                <div class="p-6">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="pca-product-card__title">Retinol Treatment for Sensitive Skin</h3>
                    <span class="bg-[var(--token-color-primary)] text-[var(--token-color-surface)] px-2 py-1 text-xs rounded">
                      Rx Only
                    </span>
                  </div>
                  <p class="text-sm text-[var(--token-color-text-secondary)] mb-4">
                    Pharmaceutical-grade retinol treatment specifically formulated for sensitive skin types. 
                    Clinically proven to improve skin texture and reduce signs of aging.
                  </p>
                  
                  <!-- Clinical Information -->
                  <div class="bg-[var(--token-color-surface-elevated)] rounded p-3 mb-4">
                    <p class="text-xs text-[var(--token-color-text-muted)] mb-2">
                      <strong>Clinical Results:</strong> 87% saw improvement in fine lines after 12 weeks
                    </p>
                    <p class="text-xs text-[var(--token-color-text-muted)]">
                      <strong>Professional Note:</strong> Start with 2x weekly application
                    </p>
                  </div>
                  
                  <div class="pca-product-card__price text-xl font-semibold mb-4">$145.00</div>
                  
                  <div class="space-y-2">
                    <button class="pca-btn-primary w-full">
                      Find Licensed Provider
                    </button>
                    <button class="pca-btn-secondary w-full text-sm">
                      Download Clinical Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-[var(--token-color-surface-elevated)] border-l-4 border-[var(--token-color-primary)] p-4 rounded">
              <p class="text-sm text-[var(--token-color-text-secondary)]">
                <strong>Professional Consultation Required:</strong> This product requires evaluation by a licensed skincare professional to ensure proper usage and safety.
              </p>
            </div>
          </div>
        </div>

        <!-- ShopSmiles Consumer Side -->
        <div data-theme="shopsmiles" class="p-8 bg-[var(--token-color-background)]">
          <div class="max-w-xl mx-auto">
            <h2 class="text-2xl font-bold text-[var(--token-color-text-primary)] mb-6 text-center">
              ShopSmiles by Colgate
            </h2>
            
            <div class="colgate-card mb-6">
              <div class="colgate-product-card">
                <img 
                  src="/api/placeholder/300/200" 
                  alt="Family Toothbrush Set"
                  class="colgate-product-card__image"
                />
                <div class="p-6">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="colgate-product-card__title">Family 4-Pack Electric Toothbrushes</h3>
                    <span class="colgate-badge">Family Favorite</span>
                  </div>
                  <p class="text-sm text-[var(--token-color-text-secondary)] mb-4">
                    Complete family set with different colored handles. Each brush removes 7x more plaque than manual brushing. 
                    Perfect for families with kids ages 6 and up.
                  </p>
                  
                  <!-- Family Features -->
                  <div class="colgate-curved-container p-3 mb-4" style="background: var(--token-background-gradient-warm);">
                    <p class="text-xs text-[var(--token-color-text-secondary)] mb-2">
                      <strong>Family Benefits:</strong> 4 different colors, kid-friendly design
                    </p>
                    <p class="text-xs text-[var(--token-color-text-secondary)]">
                      <strong>Customer Favorite:</strong> ★★★★★ (4.8/5 stars, 2,340 reviews)
                    </p>
                  </div>
                  
                  <div class="colgate-product-card__price text-xl font-semibold mb-2">$79.99</div>
                  <div class="text-sm text-[var(--token-color-secondary)] font-medium mb-4">
                    Save $12 with subscription: $67.99
                  </div>
                  
                  <div class="space-y-2">
                    <button class="colgate-btn-primary w-full">
                      Add to Cart
                    </button>
                    <button class="colgate-btn-secondary w-full text-sm">
                      Subscribe & Save 15%
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="colgate-curved-container p-4 text-center" style="background: var(--token-background-gradient-warm);">
              <p class="text-sm text-[var(--token-color-text-secondary)]">
                <strong>Free Shipping</strong> on this order! Delivered in 2-3 business days with tracking.
                <strong>30-day money-back guarantee.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    data: {
      comparison_mode: true
    }
  },
};