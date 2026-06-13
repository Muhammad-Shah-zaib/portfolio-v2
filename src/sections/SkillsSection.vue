<template>
  <section id="skills" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <SectionHeading
        label="Tech Stack"
        title="Arsenal"
        subtitle="The tools and technologies in my kit."
      />

      <div class="skills-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SkillCard
          v-for="category in skillCategories"
          :key="category.title"
          :category="category"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'
import SkillCard from '@/components/SkillCard.vue'
import { skillCategories } from '@/data/skills.js'
import { animateOnScroll } from '@/composables/useScrollAnimations.js'

onMounted(() => {
  animateOnScroll('.skills-grid')
})
</script>
