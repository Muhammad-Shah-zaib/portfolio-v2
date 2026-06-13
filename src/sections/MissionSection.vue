<template>
  <section id="mission" class="py-28 px-6 relative overflow-hidden">
    <div class="absolute inset-0 bg-surface-alt bg-dot-pattern"></div>
    <div class="absolute inset-0"
      style="background: radial-gradient(ellipse 90% 70% at 50% 50%, transparent 30%, var(--color-surface) 100%)"></div>

    <div class="relative max-w-5xl mx-auto text-center mission-section">
      <div class="relative max-w-4xl mx-auto">
        <h2 class="mission-heading text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-text-primary">
          I love building&nbsp;
          <span class="text-gradient">SaaS products</span>
          &nbsp;and&nbsp;
          <span class="text-gradient">AI automations</span>
          <br />
          that solve real problems
          <br />
          and help businesses
          <span class="relative inline-block ml-2">
            automate.
            <svg class="absolute -bottom-1.5 left-0 w-full" height="6" viewBox="0 0 240 6" preserveAspectRatio="none">
              <path d="M0,5 Q60,0 120,4 Q180,8 240,3" stroke="#fbbc04" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            </svg>
          </span>
        </h2>
      </div>

      <div class="mt-12 flex flex-wrap justify-center gap-2.5">
        <span class="tag-pill">
          <Icon icon="mdi:web" class="w-4 h-4 text-primary-500" />
          Full Stack Web Apps
        </span>
        <span class="tag-pill">
          <Icon icon="mdi:robot-outline" class="w-4 h-4 text-primary-500" />
          Agentic AI Systems
        </span>
        <span class="tag-pill">
          <Icon icon="mdi:rocket-launch-outline" class="w-4 h-4 text-primary-500" />
          SaaS Products
        </span>
        <span class="tag-pill">
          <Icon icon="mdi:sync" class="w-4 h-4 text-primary-500" />
          Business Automations
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { animateOnScroll } from '@/composables/useScrollAnimations.js'

onMounted(() => {
  animateOnScroll('.mission-section', { y: 40, stagger: 0 })
})
</script>

<style scoped>
.mission-heading {
  font-family: 'Roboto', sans-serif;
}
</style>
