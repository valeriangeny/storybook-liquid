<template>
  <button 
    :type="type"
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="loading-spinner"></span>
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface ThemeButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<ThemeButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  type: 'button',
  disabled: false,
  loading: false,
  fullWidth: false
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonClasses = computed(() => {
  const baseClasses = [
    'inline-flex items-center justify-center font-medium transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'relative'
  ];
  
  // Font family from theme
  baseClasses.push('font-[var(--theme-font-family)]');
  
  // Border radius from theme  
  baseClasses.push('rounded-[var(--theme-border-radius)]');
  
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
  baseClasses.push(sizeClasses[props.size]);
  
  // Variant classes using CSS variables
  const variantClasses = {
    primary: [
      'bg-[var(--theme-primary)] text-white',
      'hover:bg-[var(--theme-primary-dark)]',
      'focus:ring-[var(--theme-primary)]'
    ],
    secondary: [
      'bg-[var(--theme-secondary-light)] text-[var(--theme-secondary-dark)]',
      'hover:bg-[var(--theme-secondary)] hover:text-white',
      'focus:ring-[var(--theme-secondary)]'
    ],
    outline: [
      'bg-transparent border-2 border-[var(--theme-primary)] text-[var(--theme-primary)]',
      'hover:bg-[var(--theme-primary)] hover:text-white',
      'focus:ring-[var(--theme-primary)]'
    ],
    text: [
      'bg-transparent text-[var(--theme-primary)]',
      'hover:bg-[var(--theme-primary-light)]',
      'focus:ring-[var(--theme-primary)]'
    ]
  };
  baseClasses.push(...variantClasses[props.variant]);
  
  // Full width
  if (props.fullWidth) {
    baseClasses.push('w-full');
  }
  
  return baseClasses;
});

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>

<style scoped>
.loading-spinner {
  @apply w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin;
}
</style>