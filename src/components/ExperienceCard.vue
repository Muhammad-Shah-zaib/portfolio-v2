<template>
  <div class="relative pl-8 pb-10 border-l-2 border-primary-200 last:pb-0">
    <div class="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-surface"></div>

    <div class="bg-surface-card border border-border rounded-2xl p-6 hover:border-primary-200 transition-colors">
      <div class="flex flex-wrap items-center gap-3 mb-2">
        <h3 class="font-bold text-text-primary">{{ experience.role }}</h3>
        <span class="px-2 py-0.5 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
          {{ experience.type }}
        </span>
      </div>

      <p class="text-sm text-text-secondary mb-3">
        {{ experience.company }} · {{ experience.period }}
      </p>

      <ul class="space-y-2">
        <li
          v-for="(point, i) in experience.highlights"
          :key="i"
          class="flex items-start gap-2 text-sm text-text-secondary"
        >
          <Icon icon="mdi:chevron-right" class="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
          <span>{{ point }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  experience: { type: Object, required: true },
})
</script>
