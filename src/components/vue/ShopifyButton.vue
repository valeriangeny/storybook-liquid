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

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
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

const buttonClasses = computed(() => [
  'shopify-btn',
  `shopify-btn--${props.variant}`,
  `shopify-btn--${props.size}`,
  {
    'shopify-btn--disabled': props.disabled,
    'shopify-btn--loading': props.loading,
    'shopify-btn--full-width': props.fullWidth
  }
]);

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>

<style scoped>
.shopify-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  white-space: nowrap;
}

.shopify-btn:focus {
  outline: 2px solid #005bd3;
  outline-offset: 2px;
}

/* Variants */
.shopify-btn--primary {
  background-color: #008060;
  color: white;
}

.shopify-btn--primary:hover:not(.shopify-btn--disabled):not(.shopify-btn--loading) {
  background-color: #004c3f;
}

.shopify-btn--secondary {
  background-color: #f1f1f1;
  color: #333;
}

.shopify-btn--secondary:hover:not(.shopify-btn--disabled):not(.shopify-btn--loading) {
  background-color: #e0e0e0;
}

.shopify-btn--outline {
  background-color: transparent;
  color: #008060;
  border: 1px solid #008060;
}

.shopify-btn--outline:hover:not(.shopify-btn--disabled):not(.shopify-btn--loading) {
  background-color: #008060;
  color: white;
}

.shopify-btn--text {
  background-color: transparent;
  color: #008060;
}

.shopify-btn--text:hover:not(.shopify-btn--disabled):not(.shopify-btn--loading) {
  background-color: rgba(0, 128, 96, 0.1);
}

/* Sizes */
.shopify-btn--small {
  padding: 6px 12px;
  font-size: 12px;
  height: 32px;
}

.shopify-btn--medium {
  padding: 8px 16px;
  font-size: 14px;
  height: 40px;
}

.shopify-btn--large {
  padding: 12px 24px;
  font-size: 16px;
  height: 48px;
}

/* States */
.shopify-btn--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.shopify-btn--loading {
  cursor: not-allowed;
}

.shopify-btn--full-width {
  width: 100%;
}

/* Loading spinner */
.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>