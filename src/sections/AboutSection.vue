<template>
  <section id="about" class="py-16 md:py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center about-section">

        <!-- Left: Text -->
        <div>
          <SectionHeading label="Bio" title="About Me" subtitle="The person behind the code." />

          <div class="space-y-4 text-text-secondary leading-relaxed">
            <p>
              I'm a final-year CS student at <strong class="text-text-primary font-semibold">NUST Islamabad</strong>. I
              originally moved from Bahawalpur to the capital for my Bachelor's degree and to get more exposure in the
              tech space.
            </p>
            <p>
              JavaScript is my go-to language, but I am completely comfortable jumping into Python, TypeScript, or C#
              when the job calls for it. Right now I am deep into agentic AI, building systems that actually execute
              tasks instead of just responding to prompts.
            </p>
            <p>
              Off-screen, I am a competitive gamer and football player. That exact same drive keeps me waking up to
              build and ship new things every day.
            </p>
          </div>

          <a :href="resumeUrl" download
            class="mt-8 inline-flex items-center gap-3 px-6 py-3.5 bg-surface-raised border border-border rounded-xl text-text-primary font-semibold hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 active:scale-95 transition-all group">
            <div
              class="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
              <Icon icon="mdi:file-account-outline" class="w-4 h-4 text-primary-600" />
            </div>
            Download Resume
            <Icon icon="mdi:download"
              class="w-4 h-4 text-text-muted group-hover:text-primary-600 transition-colors ml-auto" />
          </a>
        </div>

        <!-- Right: Interactive Cat -->
        <div class="flex flex-col items-center gap-5">

          <!-- Speech bubble -->
          <transition name="bubble">
            <div v-if="revealed" class="relative w-full max-w-[260px]">
              <div class="bg-white border border-border rounded-2xl px-4 py-3 shadow-sm">
                <p class="text-sm text-text-secondary leading-relaxed">{{ currentFact }}</p>
                <button class="mt-2 text-xs text-primary-600 font-semibold hover:underline"
                  @click.stop="nextFact">another one →</button>
              </div>
              <div
                class="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-0 h-0 border-x-[9px] border-x-transparent border-t-[9px] border-t-border">
              </div>
              <div
                class="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-x-[8px] border-x-transparent border-t-[8px] border-t-white">
              </div>
            </div>
          </transition>

          <!-- Cat SVG -->
          <div ref="catEl" class="cat-wrap cursor-pointer" @click="handleClick">
            <svg viewBox="0 0 200 210" xmlns="http://www.w3.org/2000/svg" width="220" height="231">

              <!-- Body -->
              <ellipse cx="100" cy="208" rx="52" ry="30" fill="#f97316" />

              <!-- Tail -->
              <path d="M 148,198 Q 190,170 183,144 Q 177,124 160,136" fill="none" stroke="#f97316" stroke-width="16"
                stroke-linecap="round" />
              <path d="M 148,198 Q 190,170 183,144 Q 177,124 160,136" fill="none" stroke="#c2410c" stroke-width="5"
                stroke-linecap="round" opacity="0.3" />

              <!-- Left outer ear -->
              <polygon points="36,72 50,18 82,62" fill="#f97316" />
              <!-- Left inner ear -->
              <polygon points="42,67 50,27 72,60" fill="#fbcfe8" />

              <!-- Right outer ear -->
              <polygon points="164,72 150,18 118,62" fill="#f97316" />
              <!-- Right inner ear -->
              <polygon points="158,67 150,27 128,60" fill="#fbcfe8" />

              <!-- Head (slightly oval for a more natural cat shape) -->
              <ellipse cx="100" cy="110" rx="72" ry="66" fill="#f97316" />

              <!-- Forehead tabby stripes -->
              <path d="M 87,52 Q 100,46 113,52" fill="none" stroke="#c2410c" stroke-width="2.5"
                stroke-linecap="round" />
              <path d="M 85,63 Q 100,57 115,63" fill="none" stroke="#c2410c" stroke-width="2.5"
                stroke-linecap="round" />
              <path d="M 83,74 Q 100,68 117,74" fill="none" stroke="#c2410c" stroke-width="2.5"
                stroke-linecap="round" />

              <!-- Muzzle -->
              <ellipse cx="100" cy="134" rx="26" ry="18" fill="#fef3c7" />

              <!-- ======= DYNAMIC EXPRESSIONS ======= -->

              <!-- NORMAL: open eyes, calm mouth -->
              <g v-if="mood === 'normal'">
                <circle cx="76" cy="103" r="13" fill="white" />
                <circle cx="76" cy="103" r="8" fill="#1a73e8" />
                <ellipse cx="77" cy="103" rx="3" ry="5.5" fill="#1a1a2e" />
                <circle cx="72" cy="99" r="2.5" fill="white" />
                <circle cx="124" cy="103" r="13" fill="white" />
                <circle cx="124" cy="103" r="8" fill="#1a73e8" />
                <ellipse cx="123" cy="103" rx="3" ry="5.5" fill="#1a1a2e" />
                <circle cx="120" cy="99" r="2.5" fill="white" />
                <path d="M 100,127 L 93,132" stroke="#92400e" stroke-width="2" stroke-linecap="round" fill="none" />
                <path d="M 100,127 L 107,132" stroke="#92400e" stroke-width="2" stroke-linecap="round" fill="none" />
                <path d="M 93,132 Q 100,139 107,132" fill="none" stroke="#92400e" stroke-width="2"
                  stroke-linecap="round" />
              </g>

              <!-- LAUGHING: arc eyes, cheeks, big smile (no white overlay) -->
              <g v-else-if="mood === 'laughing'">
                <circle cx="58" cy="116" r="14" fill="#fbcfe8" opacity="0.55" />
                <circle cx="142" cy="116" r="14" fill="#fbcfe8" opacity="0.55" />
                <path d="M 63,105 Q 76,90 89,105" fill="none" stroke="#1a1a2e" stroke-width="3.5"
                  stroke-linecap="round" />
                <path d="M 111,105 Q 124,90 137,105" fill="none" stroke="#1a1a2e" stroke-width="3.5"
                  stroke-linecap="round" />
                <path d="M 84,132 Q 100,153 116,132" fill="none" stroke="#92400e" stroke-width="2.5"
                  stroke-linecap="round" />
              </g>

              <!-- SAD: droopy brows, downcast pupils, teardrop, single frown -->
              <g v-else-if="mood === 'sad'">
                <path d="M 62,94 Q 70,101 80,97" fill="none" stroke="#c2410c" stroke-width="2.5"
                  stroke-linecap="round" />
                <path d="M 120,97 Q 130,101 138,94" fill="none" stroke="#c2410c" stroke-width="2.5"
                  stroke-linecap="round" />
                <circle cx="76" cy="103" r="13" fill="white" />
                <circle cx="76" cy="107" r="8" fill="#1a73e8" />
                <ellipse cx="76" cy="108" rx="3" ry="5" fill="#1a1a2e" />
                <circle cx="73" cy="104" r="2" fill="white" />
                <circle cx="124" cy="103" r="13" fill="white" />
                <circle cx="124" cy="107" r="8" fill="#1a73e8" />
                <ellipse cx="124" cy="108" rx="3" ry="5" fill="#1a1a2e" />
                <circle cx="121" cy="104" r="2" fill="white" />
                <ellipse cx="66" cy="122" rx="4.5" ry="7" fill="#93c5fd" opacity="0.9" />
                <path d="M 100,127 L 93,132" stroke="#92400e" stroke-width="2" stroke-linecap="round" fill="none" />
                <path d="M 100,127 L 107,132" stroke="#92400e" stroke-width="2" stroke-linecap="round" fill="none" />
                <path d="M 93,132 Q 100,126 107,132" fill="none" stroke="#92400e" stroke-width="2"
                  stroke-linecap="round" />
              </g>

              <!-- ANGRY: heavy brows, squinted eyes with lids, single frown -->
              <g v-else-if="mood === 'angry'">
                <path d="M 57,87 L 85,97" fill="none" stroke="#92400e" stroke-width="4.5" stroke-linecap="round" />
                <path d="M 143,87 L 115,97" fill="none" stroke="#92400e" stroke-width="4.5" stroke-linecap="round" />
                <circle cx="76" cy="107" r="11" fill="white" />
                <circle cx="76" cy="107" r="7" fill="#1a73e8" />
                <ellipse cx="76" cy="107" rx="2.5" ry="4.5" fill="#1a1a2e" />
                <circle cx="73" cy="104" r="1.5" fill="white" />
                <circle cx="124" cy="107" r="11" fill="white" />
                <circle cx="124" cy="107" r="7" fill="#1a73e8" />
                <ellipse cx="124" cy="107" rx="2.5" ry="4.5" fill="#1a1a2e" />
                <circle cx="121" cy="104" r="1.5" fill="white" />
                <path d="M 100,127 L 93,132" stroke="#92400e" stroke-width="2" stroke-linecap="round" fill="none" />
                <path d="M 100,127 L 107,132" stroke="#92400e" stroke-width="2" stroke-linecap="round" fill="none" />
                <path d="M 93,132 Q 100,126 107,132" fill="none" stroke="#92400e" stroke-width="2.5"
                  stroke-linecap="round" />
              </g>

              <!-- NONCHALANT: half-lids raised, pupils sideways, flat mouth -->
              <g v-else-if="mood === 'nonchalant'">
                <circle cx="76" cy="105" r="13" fill="white" />
                <circle cx="80" cy="105" r="8" fill="#1a73e8" />
                <ellipse cx="82" cy="105" rx="3" ry="5.5" fill="#1a1a2e" />
                <circle cx="79" cy="102" r="2" fill="white" />
                <circle cx="124" cy="105" r="13" fill="white" />
                <circle cx="128" cy="105" r="8" fill="#1a73e8" />
                <ellipse cx="130" cy="105" rx="3" ry="5.5" fill="#1a1a2e" />
                <circle cx="127" cy="102" r="2" fill="white" />
                <path d="M 100,127 L 93,132" stroke="#92400e" stroke-width="2" stroke-linecap="round" fill="none" />
                <path d="M 100,127 L 107,132" stroke="#92400e" stroke-width="2" stroke-linecap="round" fill="none" />
                <path d="M 93,133 L 114,132" fill="none" stroke="#92400e" stroke-width="2" stroke-linecap="round" />
              </g>

              <!-- ======= ALWAYS ON TOP ======= -->

              <!-- Nose -->
              <path d="M 95,120 L 105,120 L 100,127 Z" fill="#f472b6" />

              <!-- Whiskers left -->
              <line x1="74" y1="128" x2="12" y2="116" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" />
              <line x1="74" y1="133" x2="12" y2="133" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" />
              <line x1="74" y1="138" x2="12" y2="150" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" />

              <!-- Whiskers right -->
              <line x1="126" y1="128" x2="188" y2="116" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" />
              <line x1="126" y1="133" x2="188" y2="133" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" />
              <line x1="126" y1="138" x2="188" y2="150" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" />

            </svg>
          </div>

          <!-- Prompt / mood label -->
          <p class="text-xs font-medium text-text-muted">
            <span v-if="!revealed">{{ isTouchDevice ? '👆 tap the cat' : '🖱️ click the cat' }}</span>
            <span v-else>mood: <span class="font-bold" :class="currentMood.color">{{ currentMood.label }}</span></span>
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { gsap } from 'gsap'
import SectionHeading from '@/components/SectionHeading.vue'
import { animateOnScroll } from '@/composables/useScrollAnimations.js'

const resumeUrl = '/resume/MuhammadShahzaib-Resume-SoftForm-5.pdf'

const MOODS = [
  { name: 'normal', label: 'chilling 😐', color: 'text-text-secondary' },
  { name: 'laughing', label: 'absolutely hyped 😹', color: 'text-primary-600' },
  { name: 'sad', label: 'not today 😿', color: 'text-blue-400' },
  { name: 'angry', label: 'found a bug 😾', color: 'text-red-400' },
  { name: 'nonchalant', label: 'whatever 😒', color: 'text-text-muted' },
]

const facts = [
  'Has a deeply competitive mindset, gaming, football, coding. If there\'s a leaderboard, he wants the top spot.',
  'Final year CS student at NUST Islamabad, one of Pakistan\'s most selective engineering universities.',
  'Born and raised in Bahawalpur. Moved to Islamabad to chase bigger problems.',
  'Plays football regularly and treats it like a team sport version of engineering, systems, roles, and execution.',
  'Active in NUST societies. Believes the campus has as much to offer outside class as inside.',
  'Built his first client project during his first year of university. Hasn\'t stopped shipping since.',
  'Runs Fedora Linux daily. Has toured Arch, Manjaro, Pop!_OS, and Ubuntu before settling.',
  'Building an e-commerce brand with his sister, bunai-corner, a handcrafted crochet store, from scratch.',
  'Believes most clients need direction before they need code.',
  'Obsessed with agentic AI, systems that don\'t just respond, they act and decide.',
  'Loves watching real people use something he built. That\'s the whole point.',
]

const moodIdx = ref(0)
const currentMood = computed(() => MOODS[moodIdx.value])
const mood = computed(() => currentMood.value.name)

const revealed = ref(false)
const currentFact = ref('')
const catEl = ref(null)
const isTouchDevice = ref(false)
const usedFactIdx = ref([])

function pickFact() {
  if (usedFactIdx.value.length === facts.length) usedFactIdx.value = []
  const pool = facts.map((_, i) => i).filter(i => !usedFactIdx.value.includes(i))
  const idx = pool[Math.floor(Math.random() * pool.length)]
  usedFactIdx.value.push(idx)
  return facts[idx]
}

function handleClick() {
  moodIdx.value = (moodIdx.value + 1) % MOODS.length
  currentFact.value = pickFact()
  revealed.value = true
  gsap.fromTo(catEl.value,
    { scale: 0.88, rotate: -4 },
    { scale: 1, rotate: 0, duration: 0.45, ease: 'back.out(3)' }
  )
}

function nextFact() {
  currentFact.value = pickFact()
  gsap.fromTo(catEl.value,
    { x: -5 },
    { x: 0, duration: 0.3, ease: 'elastic.out(1, 0.4)' }
  )
}

onMounted(() => {
  isTouchDevice.value = window.matchMedia('(pointer: coarse)').matches
  animateOnScroll('.about-section')

  gsap.to(catEl.value, {
    rotate: 1.5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    transformOrigin: '50% 85%',
  })
})
</script>

<style scoped>
.cat-wrap {
  transition: filter 0.25s ease;
}

.cat-wrap:hover {
  filter: drop-shadow(0 10px 24px rgba(26, 115, 232, 0.18));
}

.bubble-enter-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.bubble-leave-active {
  transition: all 0.18s ease;
}

.bubble-enter-from {
  opacity: 0;
  transform: scale(0.82) translateY(8px);
}

.bubble-leave-to {
  opacity: 0;
  transform: scale(0.92);
}
</style>
