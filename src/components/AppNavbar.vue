<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/90 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#" class="text-xl font-bold text-primary-600 tracking-tight" @click.prevent="scrollTo('#')">
        shahzaib<span class="text-text-muted">.</span>
      </a>

      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium text-text-secondary hover:text-primary-600 transition-colors"
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <button
        class="md:hidden text-text-secondary"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <Icon :icon="mobileOpen ? 'mdi:close' : 'mdi:menu'" class="w-6 h-6" />
      </button>
    </div>

    <div
      v-if="mobileOpen"
      class="md:hidden bg-white/95 backdrop-blur-md border-t border-border px-6 py-4"
    >
      <ul class="flex flex-col gap-4">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium text-text-secondary hover:text-primary-600 transition-colors"
            @click.prevent="scrollTo(link.href); mobileOpen = false"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

const navLinks = [
  { label: 'What I Do', href: '#mission' },
  { label: 'Projects', href: '#projects' },
  { label: 'bunai-corner', href: '#bunai-corner' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Freelance', href: '#freelance' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const scrolled = ref(false)
const mobileOpen = ref(false)

function scrollTo(href) {
  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
