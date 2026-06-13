<template>
  <BackgroundDecor />
  <AppNavbar />
  <main>
    <HeroSection />
    <MissionSection />
    <ProjectsSection />
    <BunaiCornerSection />
    <ExperienceSection />
    <EducationSection />
    <SkillsSection />
    <FreelanceSection />
    <AboutSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>

<script setup>
import { useScrollAnimations } from '@/composables/useScrollAnimations.js'
import BackgroundDecor from '@/components/BackgroundDecor.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import HeroSection from '@/sections/HeroSection.vue'
import MissionSection from '@/sections/MissionSection.vue'
import ProjectsSection from '@/sections/ProjectsSection.vue'
import ExperienceSection from '@/sections/ExperienceSection.vue'
import EducationSection from '@/sections/EducationSection.vue'
import SkillsSection from '@/sections/SkillsSection.vue'
import FreelanceSection from '@/sections/FreelanceSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import BunaiCornerSection from '@/sections/BunaiCornerSection.vue'
import ContactSection from '@/sections/ContactSection.vue'
import FooterSection from '@/sections/FooterSection.vue'

useScrollAnimations()
</script>
