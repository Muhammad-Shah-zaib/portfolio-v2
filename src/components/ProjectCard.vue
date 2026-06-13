<template>
  <div
    class="group relative rounded-2xl border transition-all duration-300 overflow-hidden"
    :class="
      project.featured
        ? 'border-primary-300 bg-gradient-to-br from-primary-50 to-warm-50 shadow-lg shadow-primary-100/50 md:col-span-2'
        : 'border-border bg-surface-card hover:border-primary-200 hover:shadow-md'
    "
  >
    <div v-if="project.featured" class="absolute top-4 right-4">
      <span class="px-3 py-1 text-xs font-semibold bg-primary-500 text-white rounded-full">
        Featured
      </span>
    </div>

    <div class="p-6 md:p-8">
      <h3 class="text-xl font-bold text-text-primary group-hover:text-primary-600 transition-colors">
        {{ project.title }}
      </h3>

      <p class="mt-3 text-text-secondary leading-relaxed">
        {{ project.description }}
      </p>

      <ul class="mt-4 space-y-2">
        <li
          v-for="(highlight, i) in project.highlights"
          :key="i"
          class="flex items-start gap-2 text-sm text-text-secondary"
        >
          <Icon icon="mdi:check-circle" class="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
          <span>{{ highlight }}</span>
        </li>
      </ul>

      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  project: { type: Object, required: true },
})
</script>
