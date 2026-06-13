<template>
  <section id="projects" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <SectionHeading
        label="Selected Work"
        title="Projects"
        subtitle="Things I've built that I'm proud of."
      />

      <div class="projects-grid grid md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects.js'
import { animateOnScroll } from '@/composables/useScrollAnimations.js'

onMounted(() => {
  animateOnScroll('.projects-grid')
})
</script>
