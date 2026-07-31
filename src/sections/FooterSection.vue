<template>
  <footer class="relative overflow-hidden pt-12 pb-4 px-6 border-t border-border flex flex-col items-center">
    <!-- Existing footer content -->
    <div class="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4 z-10 relative">
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

    <!-- Giant Name -->
    <div class="w-full flex justify-center mt-20 select-none overflow-hidden relative pointer-events-none">
      <h1 class="text-[18vw] leading-[0.8] font-black text-text-primary uppercase tracking-tighter flex items-end m-0">
        <span>S</span><span>H</span><span>A</span><span>H</span><span>Z</span><span>A</span>
        <span ref="letterI" class="inline-block transform-gpu">I</span>
        <span ref="letterB" class="inline-block transform-gpu">B</span>
      </h1>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { socials } from '@/data/personal.js'
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const letterI = ref(null)
const letterB = ref(null)
let ctx

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  ctx = gsap.context(() => {
    gsap.from(letterI.value, {
      yPercent: -40,
      ease: "none",
      scrollTrigger: {
        trigger: letterI.value,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      }
    })
    
    gsap.from(letterB.value, {
      yPercent: -80,
      ease: "none",
      scrollTrigger: {
        trigger: letterB.value,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      }
    })
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
