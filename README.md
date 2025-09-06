# Storybook with Shopify Liquid Components

A Storybook project that demonstrates rendering Shopify Liquid templates alongside Vue 3 components with TypeScript support.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start Storybook development server
npm run dev
# or
npm run storybook

# Build Storybook for production
npm run build
# or 
npm run build-storybook
```

Storybook will be available at `http://localhost:6006`

## 📦 Components by Technology

### 🟢 Vue 3 Components
- **LiquidRenderer**: Wrapper component that renders Liquid templates with reactive data
- **ShopifyButton**: Customizable button with Shopify design system variants  
- **ProductGrid**: Responsive grid layout for products
- **Button & Header**: Original Storybook example components (reorganized)

### 💧 Liquid Templates
- **Product Card**: Shopify-style product card with pricing, images, and sale indicators
- **Cart Item**: Shopping cart item with quantity controls and variant information

### 🌐 Pure HTML Components  
- **Button**: Framework-free button component with CSS styling
- **Product Card**: Pure HTML product card for lightweight implementations
- **Navigation**: Responsive navigation bar with cart and search functionality

## 🔧 Features

### Liquid Template Support
- Uses LiquidJS engine for Shopify Liquid compatibility
- Custom filters: `money_without_currency`, `truncate`
- Support for loops, conditionals, and variables
- Shopify-style component patterns

### Vue 3 + TypeScript
- Full TypeScript support with proper typing
- Composition API with `<script setup>`
- Scoped CSS styling
- Reactive data binding

### Storybook Integration
- Interactive controls for all components
- Comprehensive documentation with autodocs
- Multiple story variations per component
- Responsive design testing

## 📁 Project Structure

**Organized by Technology Type:**

```
src/
└── components/
    ├── vue/                     # Vue 3 Components
    │   ├── LiquidRenderer.vue   # Liquid template wrapper
    │   ├── ShopifyButton.vue    # Shopify-styled button
    │   └── ProductGrid.vue      # Responsive product grid
    ├── liquid/                  # Liquid Templates  
    │   ├── product-card.liquid  # Product card template
    │   └── cart-item.liquid     # Cart item template
    └── html/                    # Pure HTML Components
        ├── button.html          # HTML button component
        ├── product-card.html    # HTML product card
        └── navigation.html      # HTML navigation

stories/
├── vue/                         # Vue Component Stories
│   ├── LiquidRenderer.stories.ts
│   ├── ShopifyButton.stories.ts
│   ├── ProductGrid.stories.ts
│   ├── Button.stories.ts        # Example components
│   └── Header.stories.ts
├── liquid/                      # Liquid Template Stories  
│   ├── ProductCard.stories.ts
│   └── CartItem.stories.ts
└── html/                        # HTML Component Stories
    ├── Button.stories.ts
    ├── ProductCard.stories.ts
    └── Navigation.stories.ts
```

## 🛠️ What Was Fixed & Reorganized

### ✅ Issues Fixed
- **Import Issues**: Fixed `@storybook/test` import conflicts and updated paths
- **Component Registration**: Fixed Header component naming and template syntax
- **Liquid Template Engine**: Added custom Shopify-like filters with proper error handling
- **Configuration**: Fixed Vite Vue plugin and TypeScript configurations

### 🔄 Reorganization Completed
- **Technology-Based Structure**: Separated components by Vue, Liquid, and HTML
- **Clean Story Organization**: Stories now grouped by technology type in Storybook sidebar
- **Clear Separation of Concerns**: Each technology has its own directory and namespace
- **Enhanced Maintainability**: Easier to find and work with specific component types
- **Better Documentation**: Each component category has dedicated examples and documentation

### 🎯 Storybook Navigation
Components are now organized in the sidebar by:
- **Vue Components**: Interactive Vue 3 components with TypeScript
- **Liquid Components**: Shopify Liquid templates with data binding  
- **HTML Components**: Framework-free HTML components with CSS styling

## 🎯 Example Usage

### Liquid Template Rendering

```vue
<LiquidRenderer 
  :template="productTemplate" 
  :data="{ product: { title: 'Headphones', price: 99.99 } }"
/>
```

### Vue Component Usage

```vue
<ShopifyButton 
  variant="primary" 
  size="large" 
  :loading="false"
  @click="handleClick"
>
  Add to Cart
</ShopifyButton>
```

## 🧪 Testing

- All components render successfully ✅
- Storybook builds without errors ✅  
- Stories are interactive with controls ✅
- Responsive layouts work correctly ✅

## 📖 Documentation

Each component includes:
- Interactive Storybook stories
- TypeScript prop definitions
- Usage examples
- Variant demonstrations

Visit the running Storybook instance to explore all components and their variations interactively.