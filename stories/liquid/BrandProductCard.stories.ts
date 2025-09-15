import type { Meta, StoryObj } from '@storybook/vue3';
import LiquidRenderer from '../../src/components/vue/LiquidRenderer.vue';
import pcaProductCollectionTemplate from '../../src/components/liquid/pca-product-collection.liquid?raw';
import shopsmilesProductCollectionTemplate from '../../src/components/liquid/shopsmiles-product-collection.liquid?raw';
import themeComparisonTemplate from '../../src/components/liquid/theme-comparison.liquid?raw';

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
    template: pcaProductCollectionTemplate,
    data: {
      brand_name: 'PCA SKIN®',
      brand_description: 'Clinically-proven skincare solutions available exclusively through licensed professionals. Each product is formulated with pharmaceutical-grade ingredients for optimal results.',
      show_professional_notice: true,
      primary_button_text: 'Find a Professional',
      secondary_button_text: 'View Clinical Data',
      notice_title: 'Professional Products Notice',
      notice_text: 'PCA SKIN® products are available exclusively through licensed skincare professionals. A professional consultation is recommended to determine the best treatment plan for your specific skin needs.',
      notice_button_text: 'Locate a Licensed Professional',
      products: [
        {
          title: 'Vitamin B3 Brightening Serum',
          description: 'A powerful brightening serum that targets discoloration and uneven skin tone. Contains pharmaceutical-grade niacinamide for optimal results.',
          price: '$112.00',
          ingredients: 'Niacinamide 20%, Alpha Arbutin, Kojic Acid',
          skin_concern: 'Hyperpigmentation & Discoloration',
          image: '/api/placeholder/300/300',
          badge: 'Professional Only'
        },
        {
          title: 'ExLinea® Peptide Smoothing Serum',
          description: 'Advanced peptide technology clinically proven to smooth fine lines and improve skin texture within 28 days of use.',
          price: '$120.00',
          ingredients: 'Acetyl Hexapeptide-8, Palmitoyl Oligopeptide',
          skin_concern: 'Fine Lines & Wrinkles',
          image: '/api/placeholder/300/300',
          badge: 'Professional Only'
        },
        {
          title: 'Ideal Complex® Revitalizing Eye Gel',
          description: 'Comprehensive eye treatment targeting multiple signs of aging around the delicate eye area with clinically-tested ingredients.',
          price: '$89.00',
          ingredients: 'Vitamin K Oxide, Peptides, Ceramides',
          skin_concern: 'Dark Circles & Puffiness',
          image: '/api/placeholder/300/300',
          badge: 'Professional Only'
        },
        {
          title: 'C&E Advanced Antioxidant Serum',
          description: 'Potent antioxidant serum with L-ascorbic acid and tocopherol for environmental protection and collagen support.',
          price: '$108.00',
          ingredients: 'L-Ascorbic Acid 15%, Vitamin E, Ferulic Acid',
          skin_concern: 'Environmental Damage & Aging',
          image: '/api/placeholder/300/300',
          badge: 'Professional Only'
        },
        {
          title: 'Daily Defense Broad Spectrum SPF 50+',
          description: 'Advanced sun protection with zinc oxide and antioxidants for comprehensive daily defense against environmental aggressors.',
          price: '$55.00',
          ingredients: 'Zinc Oxide 12%, Antioxidant Complex',
          skin_concern: 'Sun Protection & Prevention',
          image: '/api/placeholder/300/300',
          badge: 'Professional Only'
        },
        {
          title: 'Clearskin Professional Acne Treatment',
          description: 'Professional-strength acne treatment with niacinamide and salicylic acid for blemish-prone skin.',
          price: '$49.00',
          ingredients: 'Niacinamide 4%, Salicylic Acid 2%',
          skin_concern: 'Acne & Blemishes',
          image: '/api/placeholder/300/300',
          badge: 'Professional Only'
        }
      ]
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
    template: shopsmilesProductCollectionTemplate,
    data: {
      brand_name: 'ShopSmiles by Colgate',
      brand_description: 'Fresh, clean oral care products delivered to your door. From the brand dentists recommend most, with convenient subscription options and family-friendly prices.',
      show_subscription_banner: true,
      subscription_title: 'Subscribe & Save 15%',
      subscription_description: 'Free shipping on orders over $25 • Cancel anytime • Skip or modify deliveries',
      show_subscription: true,
      subscription_discount: '15% off',
      primary_button_text: 'Add to Cart',
      secondary_button_text: 'Subscribe & Save 15%',
      show_family_promotion: true,
      family_pack_title: 'Family Pack Savings',
      family_pack_description: 'Buy multiple products together and save even more. Perfect for families with different oral care needs.',
      family_pack_button_text: 'Shop Family Packs',
      auto_delivery_title: 'Never Run Out Again',
      auto_delivery_description: 'Set up automatic deliveries for your favorite products. Skip, modify, or cancel anytime.',
      auto_delivery_button_text: 'Learn About Subscriptions',
      testimonial_section_title: 'What Our Customers Say',
      products: [
        {
          title: 'Colgate Total Advanced Whitening',
          description: 'Breakthrough formula that fights bacteria on teeth, tongue, cheeks, and gums for 12 hours. Whitens teeth by gently removing surface stains.',
          price: '$4.99',
          rating: '★★★★★',
          review_count: '2,847',
          badge: 'Best Seller',
          subscription_price: '$4.24',
          image: '/api/placeholder/300/300'
        },
        {
          title: 'Colgate Optic White Renewal',
          description: 'Removes 10 years of yellow stains when brushing twice daily. Contains hydrogen peroxide, a dentist-recommended whitening ingredient.',
          price: '$6.49',
          rating: '★★★★☆',
          review_count: '1,923',
          badge: 'Family Pack',
          subscription_price: '$5.52',
          image: '/api/placeholder/300/300'
        },
        {
          title: 'Colgate Hum Smart Electric Toothbrush',
          description: 'Smart sonic toothbrush with app connectivity for personalized brushing feedback. Helps improve your brushing habits with real-time guidance.',
          price: '$89.99',
          rating: '★★★★★',
          review_count: '756',
          badge: 'Best Seller',
          subscription_price: '$76.49',
          image: '/api/placeholder/300/300'
        },
        {
          title: 'Colgate Kids Bubble Fruit Toothpaste',
          description: 'Sugar-free cavity protection toothpaste with a fun bubble fruit flavor kids love. Gentle on tooth enamel and safe if swallowed when used as directed.',
          price: '$3.99',
          rating: '★★★★★',
          review_count: '3,142',
          badge: 'Kids Favorite',
          subscription_price: '$3.39',
          image: '/api/placeholder/300/300'
        },
        {
          title: 'Colgate Total Pro-Shield Mouthwash',
          description: 'Alcohol-free mouthwash that kills 99% of germs and provides 12-hour protection against bacteria. Fresh mint flavor for long-lasting freshness.',
          price: '$5.99',
          rating: '★★★★☆',
          review_count: '1,456',
          badge: 'Best Seller',
          subscription_price: '$5.09',
          image: '/api/placeholder/300/300'
        },
        {
          title: 'Colgate 360° Whole Mouth Clean',
          description: 'Manual toothbrush with bristles that clean teeth plus a tongue & cheek cleaner. Reaches deep between teeth for a thorough clean.',
          price: '$2.99',
          rating: '★★★★☆',
          review_count: '2,089',
          subscription_price: '$2.54',
          image: '/api/placeholder/300/300'
        }
      ],
      testimonials: [
        {
          text: 'Love the subscription service! Never have to worry about running out of toothpaste again.',
          author: 'Sarah M.',
          rating: '★★★★★'
        },
        {
          text: 'Great prices and fast delivery. The kids love the bubble fruit flavor!',
          author: 'Mike R.',
          rating: '★★★★★'
        },
        {
          text: 'The smart toothbrush has really helped improve our family\'s brushing habits.',
          author: 'Jennifer L.',
          rating: '★★★★★'
        }
      ]
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
    template: themeComparisonTemplate,
    data: {
      pca_title: 'PCA SKIN® Professional',
      shopsmiles_title: 'ShopSmiles by Colgate',
      pca_product: {
        title: 'Retinol Treatment for Sensitive Skin',
        description: 'Pharmaceutical-grade retinol treatment specifically formulated for sensitive skin types. Clinically proven to improve skin texture and reduce signs of aging.',
        price: '$145.00',
        badge: 'Rx Only',
        clinical_results: '87% saw improvement in fine lines after 12 weeks',
        professional_note: 'Start with 2x weekly application',
        image: '/api/placeholder/300/200'
      },
      shopsmiles_product: {
        title: 'Family 4-Pack Electric Toothbrushes',
        description: 'Complete family set with different colored handles. Each brush removes 7x more plaque than manual brushing. Perfect for families with kids ages 6 and up.',
        price: '$79.99',
        subscription_price: '$67.99',
        savings: '$12',
        badge: 'Family Favorite',
        family_benefits: '4 different colors, kid-friendly design',
        customer_rating: '★★★★★ (4.8/5 stars, 2,340 reviews)',
        image: '/api/placeholder/300/200'
      },
      pca_primary_button: 'Find Licensed Provider',
      pca_secondary_button: 'Download Clinical Study',
      shopsmiles_primary_button: 'Add to Cart',
      shopsmiles_secondary_button: 'Subscribe & Save 15%',
      pca_notice: {
        title: 'Professional Consultation Required:',
        text: 'This product requires evaluation by a licensed skincare professional to ensure proper usage and safety.'
      },
      shopsmiles_notice: {
        text: '<strong>Free Shipping</strong> on this order! Delivered in 2-3 business days with tracking. <strong>30-day money-back guarantee.</strong>'
      }
    }
  },
};