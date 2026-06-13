<template>
  <div class="mb-12">
    <div class="flex items-center gap-3 mb-3">
      <span class="w-8 h-[2px] bg-primary-500 rounded-full"></span>
      <span class="text-xs font-bold uppercase tracking-[0.2em] text-primary-600">{{ label }}</span>
    </div>
    <h2 class="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-3 text-text-secondary text-lg">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  label: { type: String, default: '—' },
})
</script>
