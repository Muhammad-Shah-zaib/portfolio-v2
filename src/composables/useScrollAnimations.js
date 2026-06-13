import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance = null

export function useScrollAnimations() {
  onMounted(() => {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenisInstance.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenisInstance.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
  })

  onUnmounted(() => {
    if (lenisInstance) {
      lenisInstance.destroy()
      lenisInstance = null
    }
    ScrollTrigger.getAll().forEach((t) => t.kill())
  })
}

export function animateOnScroll(selector, options = {}) {
  const defaults = {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.1,
  }

  const config = { ...defaults, ...options }

  gsap.from(selector, {
    y: config.y,
    opacity: config.opacity,
    duration: config.duration,
    ease: config.ease,
    stagger: config.stagger,
    scrollTrigger: {
      trigger: selector,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  })
}

export function parallaxEffect(selector, speed = 0.3) {
  gsap.to(selector, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: selector,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}
