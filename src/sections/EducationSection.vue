<template>
  <section id="education" class="py-24 px-6">
    <div class="max-w-4xl mx-auto education-section space-y-6">
      <SectionHeading
        label="Academic Background"
        title="Education"
        subtitle="Where the fundamentals were forged."
      />

      <!-- Current degree card -->
      <div class="relative">
        <div class="absolute inset-0 rounded-3xl -rotate-2 bg-primary-100/70 scale-[0.98]"></div>
      <div class="relative rounded-3xl border border-border bg-surface-card overflow-hidden">
        <div class="relative p-8 md:p-10">
          <div class="flex flex-col md:flex-row md:items-start gap-6">
            <div class="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center shrink-0">
              <Icon icon="mdi:school-outline" class="w-8 h-8 text-primary-600" />
            </div>

            <div class="flex-1">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 class="text-xl font-bold text-text-primary">{{ education.degree }}</h3>
                  <p class="text-primary-600 font-semibold mt-1">{{ education.university }}</p>
                  <p class="text-sm text-text-muted mt-0.5">{{ education.campus }}</p>
                </div>
                <div class="text-right shrink-0">
                  <span class="px-3 py-1 text-sm font-semibold bg-primary-50 text-primary-700 border border-primary-200 rounded-full">
                    {{ education.semester }}
                  </span>
                  <p class="text-sm text-text-muted mt-2">{{ education.period }}</p>
                </div>
              </div>

              <div class="mt-6">
                <p class="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                  Relevant Coursework
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="course in education.coursework"
                    :key="course"
                    class="px-3 py-1.5 text-xs font-medium bg-surface-alt border border-border text-text-secondary rounded-xl hover:border-primary-200 hover:text-primary-700 transition-colors"
                  >
                    {{ course }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <!-- Upcoming: Masters teaser -->
      <div class="rounded-3xl border border-dashed border-border bg-surface-alt/60 overflow-hidden">
        <div class="p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-5">
          <div class="w-14 h-14 rounded-2xl bg-surface-raised flex items-center justify-center shrink-0">
            <Icon icon="mdi:lock-outline" class="w-7 h-7 text-text-muted" />
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3 mb-1">
              <h3 class="text-base font-bold text-text-muted">Loading more...</h3>
              <span class="px-2.5 py-0.5 text-xs font-semibold bg-surface-raised text-text-muted border border-border rounded-full">
                Locked
              </span>
            </div>
            <p class="text-sm text-text-muted leading-relaxed max-w-xl">
              The next chapter hasn't started yet. Master's and beyond are on the roadmap once the undergraduate arc wraps up in 2027.
            </p>
          </div>
          <div class="hidden md:flex items-center gap-1 shrink-0">
            <span v-for="i in 3" :key="i" class="w-2 h-2 rounded-full bg-border animate-pulse" :style="{ animationDelay: `${i * 0.2}s` }"></span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { education } from '@/data/experience.js'
import { animateOnScroll } from '@/composables/useScrollAnimations.js'

onMounted(() => {
  animateOnScroll('.education-section')
})
</script>
