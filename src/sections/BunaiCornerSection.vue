<template>
  <section id="bunai-corner" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="bunai-section relative rounded-3xl overflow-hidden border border-amber-200/60 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">

        <!-- Decorative background blobs -->
        <div class="absolute top-0 right-0 w-64 h-64 rounded-full opacity-30"
          style="background: radial-gradient(circle, #fde68a 0%, transparent 70%); transform: translate(30%, -30%)"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20"
          style="background: radial-gradient(circle, #fb923c 0%, transparent 70%); transform: translate(-30%, 30%)"></div>

        <div class="relative p-8 md:p-14 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <div class="flex items-center gap-2 mb-5">
              <span class="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-amber-200/70 text-amber-800 rounded-full">
                Coming Soon
              </span>
              <span class="text-lg">🧶</span>
            </div>

            <h2 class="text-3xl md:text-5xl font-extrabold text-stone-800 tracking-tight leading-tight">
              bunai<span class="text-amber-500">-corner</span>
            </h2>

            <p class="mt-2 text-stone-500 font-medium text-lg">
              An e-commerce store built with love.
            </p>

            <p class="mt-5 text-stone-600 leading-relaxed max-w-xl">
              My sister and I are building <strong class="text-stone-800">bunai-corner</strong> — a handcrafted crochet store where every piece
              is made with care and intention. Artisanal, unique, and made by hand.
              It's not just a side project — it's a small business we're pouring our energy into.
            </p>

            <div class="mt-8 flex items-center gap-4">
              <div class="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400/30 border border-amber-300 text-amber-800 font-semibold rounded-xl text-sm">
                <Icon icon="mdi:clock-outline" class="w-4 h-4" />
                Launching Soon
              </div>
              <p class="text-sm text-stone-400">— Inshallah</p>
            </div>
          </div>

          <!-- Decorative emoji stack -->
          <div class="hidden md:flex flex-col items-center gap-4 text-5xl select-none">
            <span class="rotate-[-8deg] block">🧶</span>
            <span class="rotate-[6deg] block">🪡</span>
            <span class="rotate-[-4deg] block">🎀</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { animateOnScroll } from '@/composables/useScrollAnimations.js'

onMounted(() => {
  animateOnScroll('.bunai-section')
})
</script>
