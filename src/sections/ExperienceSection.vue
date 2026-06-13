<template>
  <section id="experience" class="py-24 px-6">
    <div class="max-w-4xl mx-auto">
      <SectionHeading
        label="Career"
        title="Experience"
        subtitle="Where I've been, what I've shipped."
      />

      <div class="experience-timeline space-y-0">
        <ExperienceCard
          v-for="exp in experiences"
          :key="exp.company"
          :experience="exp"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import { experiences } from '@/data/experience.js'
import { animateOnScroll } from '@/composables/useScrollAnimations.js'

onMounted(() => {
  animateOnScroll('.experience-timeline')
})
</script>
