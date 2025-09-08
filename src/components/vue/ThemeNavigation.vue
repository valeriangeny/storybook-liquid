<template>
  <nav class="bg-white border-b shadow-sm font-[var(--theme-font-family)]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Brand -->
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-[var(--theme-primary)] rounded-[var(--theme-border-radius)] flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="text-xl font-bold text-[var(--theme-secondary-dark)]">
            {{ brandName }}
          </span>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-8">
            <a 
              v-for="item in menuItems"
              :key="item"
              href="#" 
              class="text-[var(--theme-secondary)] hover:text-[var(--theme-primary)] px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              {{ item }}
            </a>
          </div>
        </div>
        
        <!-- Actions -->
        <div class="flex items-center space-x-4">
          <!-- Search Button -->
          <button 
            class="p-2 text-[var(--theme-secondary)] hover:text-[var(--theme-primary)] hover:bg-[var(--theme-primary-light)] rounded-[var(--theme-border-radius)] transition-all duration-200"
            aria-label="Search"
            @click="$emit('search')"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <!-- Cart Button -->
          <button 
            class="relative p-2 text-[var(--theme-secondary)] hover:text-[var(--theme-primary)] hover:bg-[var(--theme-primary-light)] rounded-[var(--theme-border-radius)] transition-all duration-200"
            aria-label="Cart"
            @click="$emit('cart')"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v5a2 2 0 11-4 0v-5m4 0V8a2 2 0 10-4 0v5" />
            </svg>
            <span 
              v-if="cartCount > 0"
              class="absolute -top-1 -right-1 w-5 h-5 bg-[var(--theme-accent)] text-white text-xs font-bold rounded-full flex items-center justify-center"
            >
              {{ cartCount > 99 ? '99+' : cartCount }}
            </span>
          </button>
          
          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden p-2 text-[var(--theme-secondary)] hover:text-[var(--theme-primary)] hover:bg-[var(--theme-primary-light)] rounded-[var(--theme-border-radius)]"
            aria-label="Open menu"
            @click="toggleMobileMenu"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="showMobileMenu" class="md:hidden border-t border-gray-200 py-4">
        <div class="flex flex-col space-y-2">
          <a 
            v-for="item in menuItems"
            :key="item"
            href="#" 
            class="px-3 py-2 text-[var(--theme-secondary)] hover:text-[var(--theme-primary)] hover:bg-[var(--theme-primary-light)] rounded-[var(--theme-border-radius)] font-medium transition-colors duration-200"
          >
            {{ item }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

export interface ThemeNavigationProps {
  brandName?: string;
  menuItems?: string[];
  cartCount?: number;
}

const props = withDefaults(defineProps<ThemeNavigationProps>(), {
  brandName: 'Store',
  menuItems: () => ['Home', 'Products', 'About', 'Contact'],
  cartCount: 0
});

const emit = defineEmits<{
  search: [];
  cart: [];
  menuClick: [item: string];
}>();

const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
</script>