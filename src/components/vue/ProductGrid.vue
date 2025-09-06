<template>
  <div class="product-grid" :class="gridClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface ProductGridProps {
  columns?: 1 | 2 | 3 | 4 | 6;
  gap?: 'small' | 'medium' | 'large';
  responsive?: boolean;
}

const props = withDefaults(defineProps<ProductGridProps>(), {
  columns: 3,
  gap: 'medium',
  responsive: true
});

const gridClasses = computed(() => [
  `product-grid--columns-${props.columns}`,
  `product-grid--gap-${props.gap}`,
  {
    'product-grid--responsive': props.responsive
  }
]);
</script>

<style scoped>
.product-grid {
  display: grid;
  width: 100%;
}

/* Gap variants */
.product-grid--gap-small {
  gap: 12px;
}

.product-grid--gap-medium {
  gap: 20px;
}

.product-grid--gap-large {
  gap: 32px;
}

/* Column variants */
.product-grid--columns-1 {
  grid-template-columns: 1fr;
}

.product-grid--columns-2 {
  grid-template-columns: repeat(2, 1fr);
}

.product-grid--columns-3 {
  grid-template-columns: repeat(3, 1fr);
}

.product-grid--columns-4 {
  grid-template-columns: repeat(4, 1fr);
}

.product-grid--columns-6 {
  grid-template-columns: repeat(6, 1fr);
}

/* Responsive behavior */
.product-grid--responsive.product-grid--columns-6 {
  grid-template-columns: repeat(6, 1fr);
}

.product-grid--responsive.product-grid--columns-4 {
  grid-template-columns: repeat(4, 1fr);
}

.product-grid--responsive.product-grid--columns-3 {
  grid-template-columns: repeat(3, 1fr);
}

.product-grid--responsive.product-grid--columns-2 {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 1200px) {
  .product-grid--responsive.product-grid--columns-6 {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .product-grid--responsive.product-grid--columns-4 {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .product-grid--responsive.product-grid--columns-6,
  .product-grid--responsive.product-grid--columns-4,
  .product-grid--responsive.product-grid--columns-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .product-grid--responsive.product-grid--columns-6,
  .product-grid--responsive.product-grid--columns-4,
  .product-grid--responsive.product-grid--columns-3,
  .product-grid--responsive.product-grid--columns-2 {
    grid-template-columns: 1fr;
  }
  
  .product-grid--responsive {
    gap: 16px;
  }
}
</style>