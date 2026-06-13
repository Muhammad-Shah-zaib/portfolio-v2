<template>
  <footer class="py-8 px-6 border-t border-border">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-sm text-text-muted">
        Built with Vue & passion by <span class="text-text-secondary font-medium">Muhammad Shahzaib</span>
      </p>
      <div class="flex items-center gap-4">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-text-muted hover:text-primary-600 transition-colors"
          :title="social.name"
        >
          <Icon :icon="social.icon" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { socials } from '@/data/personal.js'
</script>
