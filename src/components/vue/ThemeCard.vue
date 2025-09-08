<template>
  <div :class="cardClasses">
    <div v-if="imageUrl" class="card-image">
      <img :src="imageUrl" :alt="title" class="w-full h-full object-cover" loading="lazy">
    </div>
    <div v-else-if="showPlaceholder" class="card-image-placeholder">
      <div class="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
        No Image
      </div>
    </div>
    
    <div class="p-4">
      <h3 v-if="title" class="text-lg font-semibold mb-2 text-[var(--theme-secondary-dark)]">
        {{ title }}
      </h3>
      
      <p v-if="description" class="text-sm text-gray-600 mb-3 line-clamp-3">
        {{ description }}
      </p>
      
      <div v-if="price || compareAtPrice" class="mb-4">
        <div v-if="compareAtPrice && compareAtPrice > price" class="flex items-center gap-2 flex-wrap">
          <span class="text-sm text-gray-400 line-through">${{ compareAtPrice }}</span>
          <span class="text-lg font-semibold text-[var(--theme-accent)]">${{ price }}</span>
          <span class="px-2 py-1 text-xs font-medium bg-[var(--theme-accent)] text-white rounded-full">
            {{ Math.round((1 - price / compareAtPrice) * 100) }}% off
          </span>
        </div>
        <div v-else class="text-lg font-semibold text-[var(--theme-secondary-dark)]">
          ${{ price }}
        </div>
      </div>
      
      <slot name="actions">
        <button 
          v-if="showButton"
          :class="buttonClasses"
          @click="$emit('buttonClick')"
        >
          {{ buttonText }}
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface ThemeCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  price?: number;
  compareAtPrice?: number;
  showPlaceholder?: boolean;
  showButton?: boolean;
  buttonText?: string;
  variant?: 'default' | 'elevated' | 'outlined';
}

const props = withDefaults(defineProps<ThemeCardProps>(), {
  showPlaceholder: false,
  showButton: true,
  buttonText: 'Add to Cart',
  variant: 'default'
});

const emit = defineEmits<{
  buttonClick: [];
}>();

const cardClasses = computed(() => {
  const baseClasses = [
    'bg-white overflow-hidden transition-transform duration-200 hover:scale-[1.02]',
    'font-[var(--theme-font-family)]'
  ];
  
  // Variant-specific classes
  const variantClasses = {
    default: [
      'border border-gray-200 shadow-sm',
      'rounded-[var(--theme-border-radius)]'
    ],
    elevated: [
      'shadow-lg hover:shadow-xl',
      'rounded-[calc(var(--theme-border-radius)*1.5)]'
    ],
    outlined: [
      'border-2 border-[var(--theme-primary)] shadow-none',
      'rounded-[var(--theme-border-radius)]'
    ]
  };
  
  baseClasses.push(...variantClasses[props.variant]);
  
  return baseClasses;
});

const buttonClasses = computed(() => [
  'w-full px-4 py-2 font-medium transition-colors duration-200',
  'bg-[var(--theme-primary)] text-white',
  'hover:bg-[var(--theme-primary-dark)]',
  'rounded-[var(--theme-border-radius)]',
  'font-[var(--theme-font-family)]'
]);
</script>

<style scoped>
.card-image {
  @apply w-full h-48 overflow-hidden;
}

.card-image-placeholder {
  @apply w-full h-48;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>