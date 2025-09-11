import type { Meta, StoryObj } from '@storybook/vue3';
import ThemeNavigation from '../../src/components/vue/ThemeNavigation.vue';
import ThemeButton from '../../src/components/vue/ThemeButton.vue';

const meta: Meta<typeof ThemeNavigation> = {
  title: 'Brand Showcase/Navigation & UI',
  component: ThemeNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Navigation and UI components with real brand content and menu structures extracted from actual websites.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// PCA Skin Professional Navigation
export const PCANavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Professional navigation structure from PCA Skin website with actual menu items and professional styling.'
      }
    }
  },
  render: () => ({
    components: { ThemeNavigation, ThemeButton },
    template: `
      <div data-theme="pca" class="min-h-screen bg-[var(--token-color-background)]">
        <!-- Header Navigation -->
        <header class="pca-nav sticky top-0 z-50">
          <div class="max-w-7xl mx-auto px-4">
            <nav class="flex items-center justify-between h-16">
              <!-- Logo -->
              <div class="flex items-center">
                <div class="text-2xl font-bold text-[var(--token-color-primary)]" style="font-family: var(--token-font-family-primary)">
                  PCA SKIN<sup>®</sup>
                </div>
              </div>

              <!-- Main Navigation -->
              <div class="hidden md:flex items-center space-x-8">
                <div class="relative group">
                  <button class="text-[var(--token-color-text-primary)] hover:text-[var(--token-color-primary)] font-medium">
                    Products
                  </button>
                  <!-- Dropdown would appear here -->
                </div>
                <div class="relative group">
                  <button class="text-[var(--token-color-text-primary)] hover:text-[var(--token-color-primary)] font-medium">
                    Treatments
                  </button>
                </div>
                <div class="relative group">
                  <button class="text-[var(--token-color-text-primary)] hover:text-[var(--token-color-primary)] font-medium">
                    Education
                  </button>
                </div>
                <div class="relative group">
                  <button class="text-[var(--token-color-text-primary)] hover:text-[var(--token-color-primary)] font-medium">
                    Find a Professional
                  </button>
                </div>
              </div>

              <!-- Right Side Actions -->
              <div class="flex items-center space-x-4">
                <button class="text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)]">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button class="pca-btn-primary text-sm px-4 py-2">
                  Professional Login
                </button>
              </div>
            </nav>
          </div>
        </header>

        <!-- Professional Banner -->
        <div class="bg-[var(--token-color-surface-elevated)] border-b border-[var(--token-color-border)]">
          <div class="max-w-7xl mx-auto px-4 py-3">
            <p class="text-center text-sm text-[var(--token-color-text-secondary)]">
              <strong class="text-[var(--token-color-primary)]">Professional Products:</strong> 
              Available exclusively through licensed skincare professionals. 
              <a href="#" class="text-[var(--token-color-primary)] hover:underline">Find a provider near you</a>
            </p>
          </div>
        </div>

        <!-- Main Content -->
        <main class="max-w-7xl mx-auto px-4 py-8">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <!-- Sidebar Navigation -->
            <aside class="lg:col-span-1">
              <div class="pca-card p-6">
                <h3 class="font-semibold text-[var(--token-color-text-primary)] mb-4">Product Categories</h3>
                <nav class="space-y-2">
                  <a href="#" class="block py-2 px-3 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)] hover:bg-[var(--token-color-surface-elevated)] rounded">
                    Daily Care
                  </a>
                  <a href="#" class="block py-2 px-3 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)] hover:bg-[var(--token-color-surface-elevated)] rounded">
                    Targeted Solutions
                  </a>
                  <a href="#" class="block py-2 px-3 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)] hover:bg-[var(--token-color-surface-elevated)] rounded">
                    Professional Peels
                  </a>
                  <a href="#" class="block py-2 px-3 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)] hover:bg-[var(--token-color-surface-elevated)] rounded">
                    Sun Protection
                  </a>
                  <a href="#" class="block py-2 px-3 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)] hover:bg-[var(--token-color-surface-elevated)] rounded">
                    Body Care
                  </a>
                </nav>
              </div>

              <div class="pca-card p-6 mt-6">
                <h3 class="font-semibold text-[var(--token-color-text-primary)] mb-4">Skin Concerns</h3>
                <nav class="space-y-2">
                  <a href="#" class="block py-2 px-3 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)] hover:bg-[var(--token-color-surface-elevated)] rounded">
                    Acne & Blemishes
                  </a>
                  <a href="#" class="block py-2 px-3 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)] hover:bg-[var(--token-color-surface-elevated)] rounded">
                    Anti-Aging
                  </a>
                  <a href="#" class="block py-2 px-3 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)] hover:bg-[var(--token-color-surface-elevated)] rounded">
                    Brightening
                  </a>
                  <a href="#" class="block py-2 px-3 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)] hover:bg-[var(--token-color-surface-elevated)] rounded">
                    Sensitive Skin
                  </a>
                </nav>
              </div>
            </aside>

            <!-- Main Content Area -->
            <div class="lg:col-span-3">
              <div class="pca-hero p-8 text-center mb-8">
                <h1 class="text-3xl font-bold mb-4">Professional Skincare Solutions</h1>
                <p class="text-lg opacity-90">
                  Discover clinically-proven treatments designed by dermatologists and skincare professionals.
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="pca-card p-6">
                  <h3 class="text-lg font-semibold text-[var(--token-color-text-primary)] mb-3">Find a Provider</h3>
                  <p class="text-[var(--token-color-text-secondary)] mb-4">
                    Locate licensed skincare professionals in your area who carry PCA SKIN® products.
                  </p>
                  <button class="pca-btn-primary">Search Providers</button>
                </div>
                
                <div class="pca-card p-6">
                  <h3 class="text-lg font-semibold text-[var(--token-color-text-primary)] mb-3">Professional Education</h3>
                  <p class="text-[var(--token-color-text-secondary)] mb-4">
                    Access continuing education courses and certification programs for skincare professionals.
                  </p>
                  <button class="pca-btn-secondary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <!-- Footer -->
        <footer class="pca-footer mt-16">
          <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div class="text-xl font-bold mb-4">PCA SKIN<sup>®</sup></div>
                <p class="text-sm opacity-75">Professional skincare solutions trusted by dermatologists worldwide.</p>
              </div>
              <div>
                <h4 class="font-semibold mb-4">Products</h4>
                <ul class="space-y-2 text-sm opacity-75">
                  <li><a href="#" class="hover:opacity-100">Daily Care</a></li>
                  <li><a href="#" class="hover:opacity-100">Targeted Solutions</a></li>
                  <li><a href="#" class="hover:opacity-100">Professional Peels</a></li>
                  <li><a href="#" class="hover:opacity-100">Sun Protection</a></li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold mb-4">Support</h4>
                <ul class="space-y-2 text-sm opacity-75">
                  <li><a href="#" class="hover:opacity-100">Find a Professional</a></li>
                  <li><a href="#" class="hover:opacity-100">Professional Login</a></li>
                  <li><a href="#" class="hover:opacity-100">Education</a></li>
                  <li><a href="#" class="hover:opacity-100">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold mb-4">Company</h4>
                <ul class="space-y-2 text-sm opacity-75">
                  <li><a href="#" class="hover:opacity-100">About</a></li>
                  <li><a href="#" class="hover:opacity-100">Careers</a></li>
                  <li><a href="#" class="hover:opacity-100">Privacy Policy</a></li>
                  <li><a href="#" class="hover:opacity-100">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    `,
  }),
};

// ShopSmiles Consumer Navigation
export const ShopSmilesNavigation: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Consumer-friendly navigation from ShopSmiles with accessible pricing, subscription options, and family-oriented categories.'
      }
    }
  },
  render: () => ({
    components: { ThemeNavigation, ThemeButton },
    template: `
      <div data-theme="shopsmiles" class="min-h-screen bg-[var(--token-color-background)]">
        <!-- Header Navigation -->
        <header class="colgate-nav sticky top-0 z-50">
          <div class="max-w-7xl mx-auto px-4">
            <nav class="flex items-center justify-between h-16">
              <!-- Logo -->
              <div class="flex items-center">
                <div class="text-2xl font-bold text-[var(--token-color-primary)]" style="font-family: var(--token-font-family-primary)">
                  ShopSmiles
                  <span class="text-lg text-[var(--token-color-text-secondary)]">by Colgate</span>
                </div>
              </div>

              <!-- Main Navigation -->
              <div class="hidden md:flex items-center space-x-6">
                <a href="#" class="text-[var(--token-color-text-primary)] hover:text-[var(--token-color-primary)] font-medium">
                  Toothpaste
                </a>
                <a href="#" class="text-[var(--token-color-text-primary)] hover:text-[var(--token-color-primary)] font-medium">
                  Toothbrushes
                </a>
                <a href="#" class="text-[var(--token-color-text-primary)] hover:text-[var(--token-color-primary)] font-medium">
                  Mouthwash
                </a>
                <a href="#" class="text-[var(--token-color-text-primary)] hover:text-[var(--token-color-primary)] font-medium">
                  Kids
                </a>
                <div class="colgate-badge">
                  Subscribe & Save
                </div>
              </div>

              <!-- Right Side Actions -->
              <div class="flex items-center space-x-4">
                <button class="text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)]">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button class="relative">
                  <svg class="w-6 h-6 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span class="colgate-badge absolute -top-2 -right-2 text-xs">3</span>
                </button>
                <button class="colgate-btn-primary text-sm px-4 py-2">
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        </header>

        <!-- Promotional Banner -->
        <div class="colgate-curved-container text-center py-3" style="background: var(--token-background-gradient-warm);">
          <p class="text-sm">
            <strong>Free Shipping</strong> on orders over $25 • 
            <strong>Subscribe & Save 15%</strong> on all products
          </p>
        </div>

        <!-- Main Content -->
        <main class="max-w-7xl mx-auto px-4 py-8">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <!-- Sidebar Navigation -->
            <aside class="lg:col-span-1">
              <div class="colgate-card p-6">
                <h3 class="font-semibold text-[var(--token-color-text-primary)] mb-4">Shop by Category</h3>
                <nav class="space-y-2">
                  <a href="#" class="block py-2 px-3 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)] hover:bg-[var(--token-color-surface-elevated)] rounded-lg">
                    🦷 Toothpaste
                  </a>
                  <a href="#" class="block py-2 px-3 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)] hover:bg-[var(--token-color-surface-elevated)] rounded-lg">
                    🪥 Toothbrushes
                  </a>
                  <a href="#" class="block py-2 px-3 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)] hover:bg-[var(--token-color-surface-elevated)] rounded-lg">
                    🧴 Mouthwash
                  </a>
                  <a href="#" class="block py-2 px-3 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)] hover:bg-[var(--token-color-surface-elevated)] rounded-lg">
                    👶 Kids Products
                  </a>
                  <a href="#" class="block py-2 px-3 text-[var(--token-color-text-secondary)] hover:text-[var(--token-color-primary)] hover:bg-[var(--token-color-surface-elevated)] rounded-lg">
                    ✨ Whitening
                  </a>
                </nav>
              </div>

              <div class="colgate-card p-6 mt-6">
                <h3 class="font-semibold text-[var(--token-color-text-primary)] mb-4">Price Range</h3>
                <div class="space-y-3">
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2" />
                    <span class="text-[var(--token-color-text-secondary)]">Under $5</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2" />
                    <span class="text-[var(--token-color-text-secondary)]">$5 - $10</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2" />
                    <span class="text-[var(--token-color-text-secondary)]">$10 - $25</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2" />
                    <span class="text-[var(--token-color-text-secondary)]">Over $25</span>
                  </label>
                </div>
              </div>

              <div class="colgate-curved-container p-6 mt-6 text-center" style="background: var(--token-background-gradient-warm);">
                <h3 class="font-semibold text-[var(--token-color-text-primary)] mb-2">Start a Subscription!</h3>
                <p class="text-sm text-[var(--token-color-text-secondary)] mb-4">
                  Never run out of your favorites. Save 15% with free delivery.
                </p>
                <button class="colgate-btn-primary text-sm">
                  Learn More
                </button>
              </div>
            </aside>

            <!-- Main Content Area -->
            <div class="lg:col-span-3">
              <div class="colgate-hero p-8 text-center mb-8">
                <h1 class="text-3xl font-bold mb-4">Fresh Smiles Delivered</h1>
                <p class="text-lg">
                  Quality oral care products from the brand dentists recommend most, delivered to your door.
                </p>
              </div>

              <!-- Featured Sections -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="colgate-card text-center">
                  <div class="p-6">
                    <div class="text-4xl mb-3">🏆</div>
                    <h3 class="font-semibold text-[var(--token-color-text-primary)] mb-2">Best Sellers</h3>
                    <p class="text-sm text-[var(--token-color-text-secondary)] mb-4">
                      Our most popular products loved by families
                    </p>
                    <button class="colgate-btn-secondary">Shop Now</button>
                  </div>
                </div>
                
                <div class="colgate-card text-center">
                  <div class="p-6">
                    <div class="text-4xl mb-3">👨‍👩‍👧‍👦</div>
                    <h3 class="font-semibold text-[var(--token-color-text-primary)] mb-2">Family Packs</h3>
                    <p class="text-sm text-[var(--token-color-text-secondary)] mb-4">
                      Save more when you buy for the whole family
                    </p>
                    <button class="colgate-btn-secondary">Shop Family</button>
                  </div>
                </div>
                
                <div class="colgate-card text-center">
                  <div class="p-6">
                    <div class="text-4xl mb-3">🎯</div>
                    <h3 class="font-semibold text-[var(--token-color-text-primary)] mb-2">Subscribe & Save</h3>
                    <p class="text-sm text-[var(--token-color-text-secondary)] mb-4">
                      Automatic delivery with 15% savings
                    </p>
                    <button class="colgate-btn-primary">Start Saving</button>
                  </div>
                </div>
              </div>

              <!-- Customer Reviews -->
              <div class="colgate-card p-6">
                <h3 class="text-lg font-semibold text-[var(--token-color-text-primary)] mb-4">What Our Customers Say</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-[var(--token-color-surface-elevated)] p-4 rounded-lg">
                    <div class="flex items-center mb-2">
                      <div class="text-yellow-500">★★★★★</div>
                      <span class="ml-2 text-sm text-[var(--token-color-text-secondary)]">Sarah M.</span>
                    </div>
                    <p class="text-sm text-[var(--token-color-text-secondary)]">
                      "Love the subscription service! Never have to worry about running out of toothpaste again."
                    </p>
                  </div>
                  <div class="bg-[var(--token-color-surface-elevated)] p-4 rounded-lg">
                    <div class="flex items-center mb-2">
                      <div class="text-yellow-500">★★★★★</div>
                      <span class="ml-2 text-sm text-[var(--token-color-text-secondary)]">Mike R.</span>
                    </div>
                    <p class="text-sm text-[var(--token-color-text-secondary)]">
                      "Great prices and fast delivery. The kids love the bubble fruit flavor!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <!-- Footer -->
        <footer class="colgate-footer mt-16">
          <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div class="text-xl font-bold mb-4">ShopSmiles</div>
                <p class="text-sm opacity-75">Fresh smiles delivered to your door with trusted Colgate quality.</p>
              </div>
              <div>
                <h4 class="font-semibold mb-4">Shop</h4>
                <ul class="space-y-2 text-sm opacity-75">
                  <li><a href="#" class="hover:opacity-100">Toothpaste</a></li>
                  <li><a href="#" class="hover:opacity-100">Toothbrushes</a></li>
                  <li><a href="#" class="hover:opacity-100">Mouthwash</a></li>
                  <li><a href="#" class="hover:opacity-100">Kids Products</a></li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold mb-4">Support</h4>
                <ul class="space-y-2 text-sm opacity-75">
                  <li><a href="#" class="hover:opacity-100">Contact Us</a></li>
                  <li><a href="#" class="hover:opacity-100">FAQ</a></li>
                  <li><a href="#" class="hover:opacity-100">Shipping Info</a></li>
                  <li><a href="#" class="hover:opacity-100">Returns</a></li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold mb-4">Account</h4>
                <ul class="space-y-2 text-sm opacity-75">
                  <li><a href="#" class="hover:opacity-100">My Orders</a></li>
                  <li><a href="#" class="hover:opacity-100">Subscriptions</a></li>
                  <li><a href="#" class="hover:opacity-100">Account Settings</a></li>
                  <li><a href="#" class="hover:opacity-100">Rewards</a></li>
                </ul>
              </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center">
              <p class="text-sm opacity-75">© 2024 Colgate-Palmolive Company. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    `,
  }),
};

// Button Component Showcase
export const BrandButtons: Story = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Comprehensive button showcase showing how the same component adapts to different brand personalities with real CTA text from both websites.'
      }
    }
  },
  render: () => ({
    components: { ThemeButton },
    template: `
      <div class="space-y-12 p-8">
        <!-- PCA Skin Buttons -->
        <div data-theme="pca" class="space-y-6">
          <h2 class="text-2xl font-bold text-[var(--token-color-text-primary)] mb-6">PCA SKIN® Professional Buttons</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-[var(--token-color-text-primary)]">Primary Actions</h3>
              <button class="pca-btn-primary">Find a Professional</button>
              <button class="pca-btn-primary">Professional Login</button>
              <button class="pca-btn-primary">Schedule Consultation</button>
              <button class="pca-btn-primary">View Clinical Results</button>
            </div>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-[var(--token-color-text-primary)]">Secondary Actions</h3>
              <button class="pca-btn-secondary">Learn More</button>
              <button class="pca-btn-secondary">Download Brochure</button>
              <button class="pca-btn-secondary">Contact Support</button>
              <button class="pca-btn-secondary">Education Center</button>
            </div>
          </div>
          
          <div class="bg-[var(--token-color-surface-elevated)] p-6 rounded">
            <p class="text-sm text-[var(--token-color-text-secondary)]">
              <strong>Design Notes:</strong> Professional styling with minimal borders, sophisticated blue tones, 
              and clinical terminology reflecting the medical/professional nature of the brand.
            </p>
          </div>
        </div>

        <!-- ShopSmiles Buttons -->
        <div data-theme="shopsmiles" class="space-y-6">
          <h2 class="text-2xl font-bold text-[var(--token-color-text-primary)] mb-6">ShopSmiles by Colgate Buttons</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-[var(--token-color-text-primary)]">Primary Actions</h3>
              <button class="colgate-btn-primary">Add to Cart</button>
              <button class="colgate-btn-primary">Start Subscription</button>
              <button class="colgate-btn-primary">Shop Family Packs</button>
              <button class="colgate-btn-primary">Subscribe & Save 15%</button>
            </div>
            
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-[var(--token-color-text-primary)]">Secondary Actions</h3>
              <button class="colgate-btn-secondary">Learn More</button>
              <button class="colgate-btn-secondary">View All Products</button>
              <button class="colgate-btn-secondary">Customer Reviews</button>
              <button class="colgate-btn-secondary">Track My Order</button>
            </div>
          </div>
          
          <div class="colgate-curved-container p-6" style="background: var(--token-background-gradient-warm);">
            <p class="text-sm text-[var(--token-color-text-secondary)]">
              <strong>Design Notes:</strong> Friendly, approachable styling with pill-shaped buttons, warm colors, 
              and consumer-focused language emphasizing convenience and family benefits.
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};