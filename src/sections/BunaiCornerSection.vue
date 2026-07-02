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
              <span class="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-amber-200/80 text-amber-700 rounded-full">
                Live Now
              </span>
              <span class="text-lg">🧶</span>
            </div>

            <h2 class="text-3xl md:text-5xl font-extrabold text-stone-800 tracking-tight leading-tight">
              Bunai<span class="text-amber-500">-Corner</span>
            </h2>

            <p class="mt-2 text-stone-500 font-medium text-lg">
              An e-commerce store built with love.
            </p>

            <p class="mt-5 text-stone-600 leading-relaxed max-w-xl">
              My sister and I are building <strong class="text-stone-800">Bunai-Corner</strong>, a handcrafted crochet store where every piece
              is made with care and intention. Artisanal, unique, and made by hand.
              It's not just a side project. It's a small business we're pouring our energy into.
            </p>

            <div class="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://www.bunaicorner.com"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 active:scale-95 transition-all shadow-lg shadow-amber-200/50"
              >
                <Icon icon="mdi:store-outline" class="w-5 h-5" />
                Visit the Store
              </a>
              <div class="flex gap-3 ml-2">
                <a
                  href="https://www.instagram.com/bunai.corner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-stone-100 text-stone-500 rounded-lg hover:text-[#E1306C] hover:bg-stone-200 transition-colors"
                  aria-label="Instagram"
                >
                  <Icon icon="mdi:instagram" class="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@bunai.corner?_r=1&_t=ZS-97XV3VPoJID"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-stone-100 text-stone-500 rounded-lg hover:text-stone-900 hover:bg-stone-200 transition-colors"
                  aria-label="TikTok"
                >
                  <Icon icon="simple-icons:tiktok" class="w-5 h-5" />
                </a>
                <a
                  href="mailto:support@bunaicorner.com"
                  class="p-2 bg-stone-100 text-stone-500 rounded-lg hover:text-amber-600 hover:bg-stone-200 transition-colors"
                  aria-label="Email"
                >
                  <Icon icon="mdi:email-outline" class="w-5 h-5" />
                </a>
              </div>
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
