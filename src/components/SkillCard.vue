<template>
  <div
    class="p-5 rounded-2xl border bg-surface-card hover:shadow-md transition-all duration-300"
    :class="category.primary ? 'border-primary-300 bg-primary-50/40 col-span-full md:col-span-1' : 'border-border hover:border-primary-200'"
  >
    <div class="flex items-center gap-3 mb-4">
      <div class="w-9 h-9 rounded-xl flex items-center justify-center"
        :class="category.primary ? 'bg-primary-100' : 'bg-surface-alt'">
        <Icon :icon="category.icon" class="w-4 h-4 text-primary-600" />
      </div>
      <h3 class="font-semibold text-sm text-text-primary">{{ category.title }}</h3>
    </div>

    <!-- Primary language — big display -->
    <template v-if="category.primary">
      <div class="flex items-center gap-3 mb-3">
        <span class="font-mono text-2xl font-bold text-primary-600">JavaScript</span>
        <span class="px-2 py-0.5 text-xs font-semibold bg-primary-600 text-white rounded-full">primary</span>
      </div>
      <p class="text-xs text-text-muted mb-3">Also comfortable with:</p>
      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="lang in category.extras"
          :key="lang"
          class="font-mono px-2.5 py-1 text-xs bg-surface-raised border border-border text-text-secondary rounded-lg"
        >
          {{ lang }}
        </span>
      </div>
    </template>

    <!-- Regular category -->
    <template v-else>
      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="item in category.items"
          :key="item.name"
          class="font-mono inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg border transition-colors"
          :class="item.note === 'expert'
            ? 'bg-primary-50 border-primary-200 text-primary-700 font-semibold'
            : item.note === 'core'
            ? 'bg-accent-100/60 border-accent-300/50 text-accent-600 font-semibold'
            : 'bg-surface-alt border-border text-text-secondary'"
        >
          {{ item.name }}
          <span v-if="item.note === 'expert'" class="text-[10px] text-primary-500">★</span>
          <span v-else-if="item.note === 'core'" class="text-[10px] text-accent-500">●</span>
        </span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  category: { type: Object, required: true },
})
</script>
