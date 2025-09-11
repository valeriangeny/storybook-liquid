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
        component: 'Shopify Liquid template for product cards using real data from PCA Skin and ShopSmiles/Colgate websites. Shows how the same template adapts to different brand contexts.'
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

// PCA SKIN Professional Products
export const PCAVitaminB3Serum: Story = {
  parameters: {
    docs: {
      description: {
        story: 'PCA SKIN® Vitamin B3 Brightening Serum - Professional skincare with pharmaceutical-grade niacinamide. Notice the professional styling when PCA theme is active.'
      }
    }
  },
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'Vitamin B3 Brightening Serum',
        description: 'A powerful brightening serum that targets discoloration and promotes an even skin tone. Contains 20% pharmaceutical-grade niacinamide and alpha arbutin for optimal results. Professional consultation recommended.',
        price: 112.00,
        compare_at_price: null,
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center',
        rating: 4.7,
        review_count: '1,247 clinical studies',
        bestseller: true,
        professional_only: true,
        ingredients: ['Niacinamide 20%', 'Alpha Arbutin', 'Kojic Acid', 'Ascorbyl Glucoside'],
        skin_concerns: ['Hyperpigmentation', 'Dark Spots', 'Uneven Skin Tone'],
        clinical_results: '92% saw improvement in skin brightness after 8 weeks'
      }
    }
  }
};

export const PCAExLineaSerum: Story = {
  parameters: {
    docs: {
      description: {
        story: 'PCA SKIN® ExLinea® Peptide Smoothing Serum - Advanced peptide technology for fine lines and wrinkles.'
      }
    }
  },
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'ExLinea® Peptide Smoothing Serum',
        description: 'Advanced peptide technology clinically proven to smooth fine lines and improve skin texture within 28 days of use. Professional-strength formulation with pharmaceutical-grade ingredients.',
        price: 120.00,
        compare_at_price: null,
        image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center',
        rating: 4.8,
        review_count: '956 clinical studies',
        professional_only: true,
        ingredients: ['Acetyl Hexapeptide-8', 'Palmitoyl Oligopeptide', 'Matrixyl 3000'],
        skin_concerns: ['Fine Lines', 'Wrinkles', 'Skin Texture'],
        clinical_results: '87% saw reduction in fine lines after 12 weeks'
      }
    }
  }
};

export const PCAIdealComplexEyeGel: Story = {
  parameters: {
    docs: {
      description: {
        story: 'PCA SKIN® Ideal Complex® Revitalizing Eye Gel - Comprehensive eye treatment for the delicate eye area.'
      }
    }
  },
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'Ideal Complex® Revitalizing Eye Gel',
        description: 'Comprehensive eye treatment that targets multiple signs of aging around the delicate eye area. Contains clinically-tested ingredients including vitamin K oxide and peptides.',
        price: 89.00,
        compare_at_price: null,
        image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&crop=center',
        rating: 4.6,
        review_count: '2,134 professional recommendations',
        professional_only: true,
        ingredients: ['Vitamin K Oxide', 'Peptides', 'Ceramides', 'Caffeine'],
        skin_concerns: ['Dark Circles', 'Puffiness', 'Fine Lines'],
        clinical_results: '94% saw improvement in under-eye appearance after 6 weeks'
      }
    }
  }
};

export const PCADailyDefenseSPF: Story = {
  parameters: {
    docs: {
      description: {
        story: 'PCA SKIN® Daily Defense Broad Spectrum SPF 50+ - Professional sun protection with antioxidants.'
      }
    }
  },
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'Daily Defense Broad Spectrum SPF 50+',
        description: 'Advanced sun protection with zinc oxide and antioxidants for comprehensive daily defense against environmental aggressors. Professional-grade UVA/UVB protection.',
        price: 55.00,
        compare_at_price: null,
        image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop&crop=center',
        rating: 4.9,
        review_count: '3,567 dermatologist recommendations',
        bestseller: true,
        professional_only: true,
        ingredients: ['Zinc Oxide 12%', 'Antioxidant Complex', 'Niacinamide'],
        skin_concerns: ['Sun Protection', 'Environmental Damage', 'Prevention'],
        spf_rating: 'SPF 50+ Broad Spectrum'
      }
    }
  }
};

// ShopSmiles/Colgate Consumer Products
export const ColgateAdvancedWhitening: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Colgate Total Advanced Whitening - Best-selling toothpaste with 12-hour antibacterial protection. Notice the friendly styling when ShopSmiles theme is active.'
      }
    }
  },
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'Colgate Total Advanced Whitening',
        description: 'Breakthrough formula that fights bacteria on teeth, tongue, cheeks, and gums for 12 hours of protection. Whitens teeth by gently removing surface stains with regular brushing.',
        price: 4.99,
        compare_at_price: null,
        image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=400&fit=crop&crop=center',
        rating: 4.8,
        review_count: '2,847 customer reviews',
        bestseller: true,
        family_friendly: true,
        subscription_available: true,
        subscription_price: 4.24,
        features: ['12-hour antibacterial protection', 'Whitens teeth', 'Fresh breath', 'Cavity protection'],
        family_size: '6.0 oz tube',
        recommended_by: 'Dentists recommend Colgate most'
      }
    }
  }
};

export const ColgateOpticWhite: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Colgate Optic White Renewal - Removes 10 years of yellow stains with hydrogen peroxide whitening.'
      }
    }
  },
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'Colgate Optic White Renewal',
        description: 'Removes 10 years of yellow stains when brushing twice daily for 4 weeks. Contains hydrogen peroxide, a dentist-recommended whitening ingredient that goes beyond surface stains.',
        price: 6.49,
        compare_at_price: 7.99,
        image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop&crop=center',
        rating: 4.5,
        review_count: '1,923 customer reviews',
        family_friendly: true,
        subscription_available: true,
        subscription_price: 5.52,
        features: ['Removes 10 years of stains', 'Hydrogen peroxide whitening', 'Safe on enamel', 'Fresh mint flavor'],
        family_size: '3.0 oz tube',
        whitening_results: 'Visible results in 3 days'
      }
    }
  }
};

export const ColgateSmartToothbrush: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Colgate Hum Smart Electric Toothbrush - Tech-enabled oral care with app connectivity for the whole family.'
      }
    }
  },
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'Colgate Hum Smart Electric Toothbrush',
        description: 'Smart sonic toothbrush with app connectivity for personalized brushing feedback. Helps improve your brushing habits with real-time guidance and tracking.',
        price: 89.99,
        compare_at_price: 119.99,
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center',
        rating: 4.7,
        review_count: '756 customer reviews',
        bestseller: true,
        family_friendly: true,
        subscription_available: true,
        subscription_price: 76.49,
        features: ['Smart app connectivity', 'Real-time feedback', 'Multiple brush modes', '10-day battery life'],
        family_benefits: 'Track progress for up to 6 family members',
        tech_specs: 'Bluetooth connectivity, iOS & Android compatible'
      }
    }
  }
};

export const ColgateKidsToothpaste: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Colgate Kids Bubble Fruit Toothpaste - Fun flavored toothpaste that kids love with cavity protection.'
      }
    }
  },
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'Colgate Kids Bubble Fruit Toothpaste',
        description: 'Sugar-free cavity protection toothpaste with a fun bubble fruit flavor kids love. Gentle on tooth enamel and safe if swallowed when used as directed by children 2 and up.',
        price: 3.99,
        compare_at_price: null,
        image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop&crop=center',
        rating: 4.9,
        review_count: '3,142 parent reviews',
        bestseller: true,
        family_friendly: true,
        kids_product: true,
        subscription_available: true,
        subscription_price: 3.39,
        features: ['Fun bubble fruit flavor', 'Cavity protection', 'Sugar-free formula', 'Safe if swallowed'],
        age_range: 'Ages 2-6',
        parent_approved: '95% of parents would recommend'
      }
    }
  }
};

export const ColgateMouthwash: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Colgate Total Pro-Shield Mouthwash - Alcohol-free mouthwash with 12-hour germ protection.'
      }
    }
  },
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'Colgate Total Pro-Shield Mouthwash',
        description: 'Alcohol-free mouthwash that kills 99% of germs and provides 12-hour protection against bacteria. Fresh mint flavor for long-lasting freshness and confidence.',
        price: 5.99,
        compare_at_price: null,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center',
        rating: 4.6,
        review_count: '1,456 customer reviews',
        family_friendly: true,
        subscription_available: true,
        subscription_price: 5.09,
        features: ['Kills 99% of germs', '12-hour protection', 'Alcohol-free', 'Fresh mint flavor'],
        family_size: '16.9 fl oz bottle',
        usage: '30 seconds twice daily after brushing'
      }
    }
  }
};

export const ColgateManualToothbrush: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Colgate 360° Whole Mouth Clean - Manual toothbrush with tongue and cheek cleaner for complete oral care.'
      }
    }
  },
  args: {
    template: productCardTemplate,
    data: {
      product: {
        title: 'Colgate 360° Whole Mouth Clean',
        description: 'Manual toothbrush with bristles that clean teeth plus a tongue & cheek cleaner. Reaches deep between teeth for a thorough clean and removes bacteria from your whole mouth.',
        price: 2.99,
        compare_at_price: null,
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop&crop=center',
        rating: 4.4,
        review_count: '2,089 customer reviews',
        family_friendly: true,
        subscription_available: true,
        subscription_price: 2.54,
        features: ['360° cleaning', 'Tongue & cheek cleaner', 'Deep cleaning bristles', 'Ergonomic handle'],
        family_pack: 'Available in 4-pack for families',
        dentist_recommended: 'Recommended by dental professionals'
      }
    }
  }
};

// Comparative Stories showing theme adaptation
export const ThemeComparison: Story = {
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Side-by-side comparison showing how the same Liquid ProductCard template produces different experiences based on the active theme. Professional vs. consumer styling with real product data.'
      }
    }
  },
  render: () => ({
    components: { LiquidRenderer },
    template: `
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <!-- PCA Professional Side -->
        <div data-theme="pca" class="space-y-6">
          <div class="text-center mb-6">
            <h3 class="text-xl font-bold text-[var(--token-color-text-primary)] mb-2">PCA SKIN® Professional</h3>
            <p class="text-sm text-[var(--token-color-text-secondary)]">Clinical. Sophisticated. Professional.</p>
          </div>
          
          <LiquidRenderer 
            :template="productCardTemplate"
            :data="{
              product: {
                title: 'C&E Advanced Antioxidant Serum',
                description: 'Potent antioxidant serum with 15% L-ascorbic acid and tocopherol for environmental protection and collagen support. Professional consultation recommended for optimal results.',
                price: 108.00,
                image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center',
                rating: 4.8,
                review_count: '1,567 clinical studies',
                professional_only: true
              }
            }"
          />
        </div>

        <!-- ShopSmiles Consumer Side -->
        <div data-theme="shopsmiles" class="space-y-6">
          <div class="text-center mb-6">
            <h3 class="text-xl font-bold text-[var(--token-color-text-primary)] mb-2">ShopSmiles by Colgate</h3>
            <p class="text-sm text-[var(--token-color-text-secondary)]">Fresh. Clean. Family-Friendly.</p>
          </div>
          
          <LiquidRenderer 
            :template="productCardTemplate"
            :data="{
              product: {
                title: 'Family 4-Pack Electric Toothbrushes',
                description: 'Complete family set with different colored handles. Each brush removes 7x more plaque than manual brushing. Perfect for families with kids ages 6 and up.',
                price: 79.99,
                compare_at_price: 99.99,
                image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center',
                rating: 4.8,
                review_count: '2,340 family reviews',
                bestseller: true,
                subscription_available: true,
                subscription_price: 67.99
              }
            }"
          />
        </div>
      </div>
    `,
    setup() {
      return {
        productCardTemplate
      };
    }
  })
};

// Product Collection Stories
export const PCAProductCollection: Story = {
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Complete collection of PCA SKIN® professional products showing consistent professional styling and clinical messaging.'
      }
    }
  },
  render: () => ({
    components: { LiquidRenderer },
    template: `
      <div data-theme="pca" class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-[var(--token-color-text-primary)] mb-4">PCA SKIN® Professional Collection</h2>
          <p class="text-lg text-[var(--token-color-text-secondary)]">Pharmaceutical-grade skincare available exclusively through licensed professionals</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <LiquidRenderer 
            :template="productCardTemplate"
            :data="{ product: products.vitaminB3 }"
          />
          <LiquidRenderer 
            :template="productCardTemplate"
            :data="{ product: products.exlinea }"
          />
          <LiquidRenderer 
            :template="productCardTemplate"
            :data="{ product: products.eyeGel }"
          />
          <LiquidRenderer 
            :template="productCardTemplate"
            :data="{ product: products.spf }"
          />
        </div>
        
        <div class="mt-12 bg-[var(--token-color-surface-elevated)] border-l-4 border-[var(--token-color-primary)] p-6 rounded">
          <h3 class="text-lg font-semibold text-[var(--token-color-text-primary)] mb-2">Professional Products Notice</h3>
          <p class="text-[var(--token-color-text-secondary)]">
            PCA SKIN® products are available exclusively through licensed skincare professionals. 
            A professional consultation is recommended to determine the best treatment plan for your specific skin needs.
          </p>
        </div>
      </div>
    `,
    setup() {
      return {
        productCardTemplate,
        products: {
          vitaminB3: {
            title: 'Vitamin B3 Brightening Serum',
            description: 'Professional-grade brightening serum with 20% niacinamide that targets discoloration and promotes an even skin tone.',
            price: 112.00,
            image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center',
            rating: 4.7,
            review_count: '1,247 studies',
            bestseller: true,
            professional_only: true
          },
          exlinea: {
            title: 'ExLinea® Peptide Smoothing Serum',
            description: 'Advanced peptide technology clinically proven to smooth fine lines and improve skin texture within 28 days.',
            price: 120.00,
            image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center',
            rating: 4.8,
            review_count: '956 studies',
            professional_only: true
          },
          eyeGel: {
            title: 'Ideal Complex® Revitalizing Eye Gel',
            description: 'Comprehensive eye treatment targeting multiple signs of aging around the delicate eye area.',
            price: 89.00,
            image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&crop=center',
            rating: 4.6,
            review_count: '2,134 recommendations',
            professional_only: true
          },
          spf: {
            title: 'Daily Defense Broad Spectrum SPF 50+',
            description: 'Advanced sun protection with zinc oxide and antioxidants for comprehensive daily defense.',
            price: 55.00,
            image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop&crop=center',
            rating: 4.9,
            review_count: '3,567 recommendations',
            bestseller: true,
            professional_only: true
          }
        }
      };
    }
  })
};

export const ShopSmilesProductCollection: Story = {
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Complete collection of ShopSmiles by Colgate products showing consistent family-friendly styling and subscription options.'
      }
    }
  },
  render: () => ({
    components: { LiquidRenderer },
    template: `
      <div data-theme="shopsmiles" class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-[var(--token-color-text-primary)] mb-4">ShopSmiles by Colgate Collection</h2>
          <p class="text-lg text-[var(--token-color-text-secondary)]">Fresh smiles delivered to your door with trusted Colgate quality</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <LiquidRenderer 
            :template="productCardTemplate"
            :data="{ product: products.whitening }"
          />
          <LiquidRenderer 
            :template="productCardTemplate"
            :data="{ product: products.opticWhite }"
          />
          <LiquidRenderer 
            :template="productCardTemplate"
            :data="{ product: products.smartBrush }"
          />
          <LiquidRenderer 
            :template="productCardTemplate"
            :data="{ product: products.kidsToothpaste }"
          />
        </div>
        
        <div class="mt-12 colgate-curved-container p-6 text-center" style="background: var(--token-background-gradient-warm);">
          <h3 class="text-2xl font-bold text-[var(--token-color-text-primary)] mb-2">Subscribe & Save 15%</h3>
          <p class="text-[var(--token-color-text-secondary)] mb-4">
            Free shipping on orders over $25 • Cancel anytime • Skip or modify deliveries
          </p>
          <div class="flex justify-center gap-4">
            <span class="colgate-badge">Family Friendly</span>
            <span class="colgate-badge">Dentist Recommended</span>
            <span class="colgate-badge">30-Day Guarantee</span>
          </div>
        </div>
      </div>
    `,
    setup() {
      return {
        productCardTemplate,
        products: {
          whitening: {
            title: 'Colgate Total Advanced Whitening',
            description: 'Breakthrough formula that fights bacteria on teeth, tongue, cheeks, and gums for 12 hours of protection.',
            price: 4.99,
            image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=400&fit=crop&crop=center',
            rating: 4.8,
            review_count: '2,847 reviews',
            bestseller: true,
            subscription_available: true,
            subscription_price: 4.24
          },
          opticWhite: {
            title: 'Colgate Optic White Renewal',
            description: 'Removes 10 years of yellow stains when brushing twice daily with hydrogen peroxide whitening.',
            price: 6.49,
            compare_at_price: 7.99,
            image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=400&fit=crop&crop=center',
            rating: 4.5,
            review_count: '1,923 reviews',
            subscription_available: true,
            subscription_price: 5.52
          },
          smartBrush: {
            title: 'Colgate Hum Smart Electric Toothbrush',
            description: 'Smart sonic toothbrush with app connectivity for personalized brushing feedback and tracking.',
            price: 89.99,
            compare_at_price: 119.99,
            image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center',
            rating: 4.7,
            review_count: '756 reviews',
            bestseller: true,
            subscription_available: true,
            subscription_price: 76.49
          },
          kidsToothpaste: {
            title: 'Colgate Kids Bubble Fruit Toothpaste',
            description: 'Sugar-free cavity protection toothpaste with a fun bubble fruit flavor kids love.',
            price: 3.99,
            image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop&crop=center',
            rating: 4.9,
            review_count: '3,142 reviews',
            bestseller: true,
            kids_product: true,
            subscription_available: true,
            subscription_price: 3.39
          }
        }
      };
    }
  })
};