<template>
  <div v-html="renderedTemplate"></div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Liquid } from 'liquidjs';

interface Props {
  template: string;
  data?: Record<string, any>;
}

const props = withDefaults(defineProps<Props>(), {
  data: () => ({})
});

const engine = new Liquid();

// Add Shopify-like filters
engine.registerFilter('money_without_currency', (v) => {
  if (typeof v === 'number') {
    return v.toFixed(2);
  }
  return v;
});

engine.registerFilter('truncate', (v, length = 100) => {
  if (typeof v === 'string' && v.length > length) {
    return v.substring(0, length) + '...';
  }
  return v;
});

const renderedTemplate = ref('');

const renderTemplate = async () => {
  try {
    renderedTemplate.value = await engine.parseAndRender(props.template, props.data);
  } catch (error) {
    console.error('Liquid template error:', error);
    renderedTemplate.value = `<div style="color: red;">Error rendering template: ${error}</div>`;
  }
};

watch([() => props.template, () => props.data], renderTemplate, { immediate: true, deep: true });
</script>