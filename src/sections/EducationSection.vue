<template>
  <section id="education" class="py-24 px-6">
    <div class="max-w-4xl mx-auto education-section">
      <SectionHeading
        label="Academic Background"
        title="Education"
        subtitle="Where the fundamentals were forged."
      />

      <div class="rounded-3xl border border-border bg-surface-card overflow-hidden">
        <div class="h-2 bg-gradient-to-r from-primary-500 to-primary-400"></div>
        <div class="p-8 md:p-10">
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
