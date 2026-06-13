<template>
  <section id="contact" class="py-12 md:py-24 px-6">
    <div class="max-w-4xl mx-auto contact-section">
      <div class="rounded-3xl border border-border bg-surface-alt overflow-hidden">
        <div class="p-8 md:p-14">
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-4">
            Contact
          </p>
          <h2 class="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
            Let's connect.
            <br />
            <span class="text-gradient">I'd love to hear from you.</span>
          </h2>

          <p class="mt-5 text-text-secondary text-lg leading-relaxed max-w-xl">
            Whether you're a recruiter, a fellow developer, or someone curious about my work, feel free to reach out. I'm always open to interesting conversations.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              :href="`mailto:${personal.email}`"
              class="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 active:scale-95 transition-all shadow-lg shadow-primary-200/50"
            >
              <Icon icon="mdi:email-fast-outline" class="w-5 h-5" />
              Send an Email
            </a>
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-3 border border-border bg-surface-card text-text-secondary font-semibold rounded-xl hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 active:scale-95 transition-all"
            >
              <Icon :icon="social.icon" class="w-5 h-5" />
              {{ social.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { personal, socials } from '@/data/personal.js'
import { animateOnScroll } from '@/composables/useScrollAnimations.js'

onMounted(() => {
  animateOnScroll('.contact-section')
})
</script>
