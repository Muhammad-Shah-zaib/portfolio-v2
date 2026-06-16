<template>
  <div
    class="group relative rounded-2xl border transition-all duration-300 overflow-hidden"
    :class="
      project.featured
        ? 'border-primary-300 bg-gradient-to-br from-primary-50 to-warm-50 shadow-lg shadow-primary-100/50 md:col-span-2'
        : project.fullWidth
          ? 'border-accent-400/60 bg-gradient-to-br from-accent-100 to-surface-card shadow-md md:col-span-2'
          : 'border-border bg-surface-card hover:border-primary-200 hover:shadow-md'
    "
  >
    <div class="absolute top-4 right-4 flex flex-col items-end gap-2">
      <span v-if="project.featured" class="px-3 py-1 text-xs font-semibold bg-primary-500 text-white rounded-full">
        Featured
      </span>
      <span
        v-if="project.badge"
        class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full border border-accent-500/40 bg-accent-200 text-accent-600 tracking-wide uppercase shadow-sm"
      >
        <Icon icon="mdi:lightning-bolt" class="w-3.5 h-3.5" />
        {{ project.badge }}
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

      <div v-if="project.links && project.links.length" class="mt-6 flex flex-wrap gap-3">
        <a
          v-for="link in project.links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl border transition-all"
          :class="
            link.label === 'GitHub'
              ? 'bg-gray-900 text-white border-gray-900 hover:bg-gray-700'
              : 'bg-primary-50 text-primary-700 border-primary-200 hover:bg-primary-100'
          "
        >
          <Icon :icon="link.icon" class="w-4 h-4" />
          {{ link.label }}
          <span v-if="link.label === 'Watch Walkthrough'" class="ml-1 px-1.5 py-0.5 text-[10px] font-bold rounded bg-[#625DF5] text-white leading-none">Loom</span>
        </a>
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
