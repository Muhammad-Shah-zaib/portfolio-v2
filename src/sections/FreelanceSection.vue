<template>
  <div id="freelance">
    <!-- Header sits above the pin -->
    <div class="px-6 py-24 pb-0 max-w-6xl mx-auto freelance-header">
      <SectionHeading
        label="Independent Work"
        :title="freelance.title"
        :subtitle="freelance.subtitle"
      />
      <p class="text-text-secondary text-lg leading-relaxed max-w-2xl">
        {{ freelance.description }}
      </p>
    </div>

    <!-- Pin container -->
    <div ref="pinContainer" class="relative overflow-hidden" style="height: 100vh">
      <!-- Track: left-padded so first card is inset, gap lets next card peek -->
      <div ref="track" class="flex items-center h-full gap-6 pl-[8vw] pr-[12vw]" style="width: max-content">
        <div
          v-for="lesson in freelance.lessons"
          :key="lesson.number"
          class="freelance-card relative flex-shrink-0 flex flex-col justify-between rounded-3xl border border-border bg-surface-card shadow-sm overflow-hidden"
          style="width: min(72vw, 780px); height: min(72vh, 560px)"
        >
          <!-- Top accent line — unique per card using index-based opacity -->
          <div class="h-1 w-full bg-gradient-to-r from-primary-400 to-primary-600"
            :style="{ opacity: 0.4 + lessonIndex(lesson) * 0.12 }"></div>

          <div class="flex-1 flex flex-col justify-center px-8 md:px-12 py-8">
            <p class="font-mono text-6xl md:text-7xl font-black leading-none select-none mb-5"
              style="color: var(--color-border)">
              {{ lesson.number }}
            </p>
            <div class="w-11 h-11 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-5">
              <Icon :icon="lesson.icon" class="w-5 h-5 text-primary-600" />
            </div>
            <h3 class="text-xl md:text-2xl font-extrabold text-text-primary leading-snug mb-4">
              {{ lesson.title }}
            </h3>
            <p class="text-text-secondary leading-relaxed max-w-lg">
              {{ lesson.text }}
            </p>
          </div>

          <!-- Counter chip -->
          <div class="absolute top-5 right-6 text-xs font-mono text-text-muted bg-surface-alt border border-border rounded-full px-2.5 py-1">
            {{ lessonIndex(lesson) + 1 }}&thinsp;/&thinsp;{{ freelance.lessons.length }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from '@/components/SectionHeading.vue'
import { freelance } from '@/data/freelance.js'

gsap.registerPlugin(ScrollTrigger)

const pinContainer = ref(null)
const track = ref(null)
const activeIndex = ref(0)

let scrollTriggerInstance = null

function lessonIndex(lesson) {
  return freelance.lessons.indexOf(lesson)
}

onMounted(() => {
  const el = pinContainer.value
  const trackEl = track.value
  if (!el || !trackEl) return

  const cards = trackEl.querySelectorAll('.freelance-card')
  const lastCard = cards[cards.length - 1]
  if (!lastCard) return

  // Stop when the last card is centered in the viewport
  const viewportWidth = window.innerWidth
  const lastCardCenter = lastCard.offsetLeft + lastCard.offsetWidth / 2
  const scrollDistance = lastCardCenter - viewportWidth / 2

  scrollTriggerInstance = ScrollTrigger.create({
    trigger: el,
    pin: true,
    start: 'top top',
    end: `+=${scrollDistance}`,
    scrub: 1,
    onUpdate: (self) => {
      gsap.set(trackEl, { x: -self.progress * scrollDistance })
      activeIndex.value = Math.round(self.progress * (freelance.lessons.length - 1))
    },
  })
})

onUnmounted(() => {
  scrollTriggerInstance?.kill()
})
</script>
