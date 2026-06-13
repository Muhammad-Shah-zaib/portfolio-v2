<template>
  <section class="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
    <div class="max-w-6xl w-full">
      <div class="grid md:grid-cols-[1fr_360px] gap-12 items-center">

        <div class="hero-content max-w-2xl order-2 md:order-1">
          <h1 class="text-5xl md:text-7xl font-extrabold text-text-primary leading-[1.05] tracking-tight">
            Muhammad
            <br />
            <span class="text-gradient">Shahzaib</span>
          </h1>

          <p class="mt-4 text-lg md:text-xl font-medium text-text-secondary tracking-wide">
            Full Stack Engineer &nbsp;·&nbsp; AI Automation Builder
          </p>

          <p class="mt-6 text-text-secondary leading-relaxed max-w-lg">
            {{ personal.tagline }}
          </p>

          <div class="mt-6 flex items-center gap-2 text-sm text-text-muted">
            <Icon icon="mdi:map-marker-outline" class="w-4 h-4 shrink-0" />
            <span>{{ personal.location }}</span>
          </div>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              class="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 active:scale-95 transition-all shadow-lg shadow-primary-200/50"
            >
              View My Work
              <Icon icon="mdi:arrow-right" class="w-4 h-4" />
            </a>
            <a
              :href="resumeUrl"
              download
              class="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary font-semibold rounded-xl hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 active:scale-95 transition-all"
            >
              <Icon icon="mdi:download-outline" class="w-4 h-4" />
              Resume
            </a>
          </div>

          <div class="mt-10 flex items-center gap-3">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-text-muted hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-all"
              :title="social.name"
            >
              <Icon :icon="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Portrait image — taller than wide -->
        <div class="hero-image flex justify-center md:justify-end order-1 md:order-2">
          <div class="relative">
            <div class="absolute inset-0 rounded-3xl rotate-3 bg-primary-100/70 scale-[0.97]"></div>
            <div class="relative w-[320px] h-[430px] md:w-[420px] md:h-[560px] rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary-100/40">
              <img
                :src="personal.photo"
                :alt="personal.name"
                class="w-full h-full object-cover object-top"
              />
            </div>
            <div class="absolute -bottom-5 -left-5 px-4 py-2.5 bg-surface-card border border-border rounded-2xl shadow-lg flex items-center gap-2">
              <Icon icon="mdi:fire" class="w-5 h-5 text-orange-500" />
              <p class="text-sm font-bold text-text-primary">{{ personal.motto }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 flex justify-center hero-scroll">
        <div class="flex flex-col items-center gap-1 text-text-muted">
          <span class="text-xs tracking-widest uppercase">Scroll</span>
          <Icon icon="mdi:chevron-down" class="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { gsap } from 'gsap'
import { personal, socials } from '@/data/personal.js'

const resumeUrl = '/resume/MuhammadShahzaib-Resume-SoftForm-5.pdf'

onMounted(() => {
  const tl = gsap.timeline()
  tl.from('.hero-content', { y: 50, opacity: 0, duration: 0.9, ease: 'power3.out' })
    .from('.hero-image', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
    .from('.hero-scroll', { opacity: 0, duration: 0.6 }, '-=0.2')
})
</script>
