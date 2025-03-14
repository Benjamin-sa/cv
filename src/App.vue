<template>
  <div class="app-wrapper bg-gradient-to-br from-gray-950 via-gray-900 to-slate-950 min-h-screen">
    <!-- Colorful Menu Toggle Button -->
    <button 
      @click="toggleMenu" 
      class="menu-toggle fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-gray-800 shadow-lg flex items-center justify-center overflow-hidden group"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-teal-700 via-emerald-700 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-gray-200 group-hover:text-white text-lg relative z-10 transition-transform duration-300"></i>
    </button>

    <!-- Colorful Fullscreen Menu -->
    <div 
      v-show="isMenuOpen"
      class="menu-overlay fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-lg"
    >
      <!-- Colorful accent shapes for menu background -->
      <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-teal-800/20 to-transparent rounded-bl-full opacity-60"></div>
      <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-800/20 to-transparent rounded-tr-full opacity-50"></div>
      <div class="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-green-800/20 blur-xl opacity-40"></div>
      <div class="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-teal-800/20 blur-xl opacity-40"></div>
      
      <nav class="relative z-10 h-full flex items-center justify-center">
        <ul class="space-y-6 text-center">
          <li v-for="(item, index) in menuItems" :key="index" class="menu-item-wrapper" :style="`--delay: ${index * 0.1}s`">
            <a
              :href="`#${item.toLowerCase()}`"
              @click="scrollToSection(item.toLowerCase())"
              class="menu-item text-2xl font-bold transition-all duration-300 relative inline-block px-6 py-2"
              :class="{ 'active': activeSection === item.toLowerCase() }"
            >
              <span class="relative z-10 text-gray-200">{{ item }}</span>
              <span class="absolute inset-0 scale-x-0 scale-y-100 origin-left bg-gradient-to-r rounded-lg transition-transform duration-300 -z-10 group-hover:scale-x-100" :class="getMenuItemGradient(index)"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Main Content with Professional Dark Background Elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <!-- Background Accent Elements -->
      <div class="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-teal-800/8 blur-3xl"></div>
      <div class="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-emerald-800/8 blur-3xl"></div>
      <div class="absolute top-1/4 -left-24 w-48 h-48 rounded-full bg-green-800/8 blur-2xl"></div>
      <div class="absolute bottom-1/3 -right-16 w-48 h-48 rounded-full bg-teal-800/8 blur-3xl"></div>
      
      <!-- Additional subtle background elements for professional look -->
      <div class="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-emerald-900/5 blur-3xl"></div>
      <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent opacity-40"></div>
      <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent opacity-40"></div>
      
      <!-- Deep background vignette effect -->
      <div class="absolute inset-0 bg-radial-vignette opacity-70"></div>
      
      <!-- Subtle grid pattern overlay with reduced opacity -->
      <div class="absolute inset-0 opacity-4 pattern-grid"></div>
      
      <!-- Subtle noise texture for added depth -->
      <div class="absolute inset-0 noise-bg opacity-[0.03]"></div>
    </div>

    <Layout>
      <div class="app-container max-w-5xl mx-auto px-4 relative z-10">
        <section id="introductie" class="py-10 mb-20 min-h-screen flex flex-col justify-center">
          <IntroductieIndex />
        </section>
        
        <section id="opleiding" class="py-10 mb-20">
          <OpleidingIndex />
        </section>
        
        <section id="vaardigheden" class="py-10 mb-20">
          <VaardighedenIndex />
        </section>
        
        <section id="projecten" class="py-10 mb-20">
          <ProjectenIndex />
        </section>
        
        <section id="hobbies" class="py-10 mb-20">
          <HobbiesIndex />
        </section>
        
        <section id="contact" class="py-10">
          <ContactForm />
        </section>
      </div>
    </Layout>
    
    <!-- Colorful Scroll Progress Indicator -->
    <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gray-800/70 rounded-full overflow-hidden z-30 backdrop-blur-sm shadow-sm">
      <div 
        class="h-full bg-gradient-to-r from-teal-700 via-emerald-700 to-green-700" 
        :style="`width: ${scrollProgress}%`"></div>
    </div>
        
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import Layout from './components/layout-index-snapniks.vue';
import IntroductieIndex from './components/Introductie-index.vue';
import OpleidingIndex from './components/Opleiding-index.vue';
import VaardighedenIndex from './components/Vaardigheden-index.vue';
import ProjectenIndex from './components/Projecten-index.vue';
import HobbiesIndex from './components/Hobbies-index.vue';
import ContactForm from './components/Contact-form.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'App',
  components: {
    Layout,
    IntroductieIndex,
    OpleidingIndex,
    VaardighedenIndex,
    ProjectenIndex,
    HobbiesIndex,
    ContactForm,
  },
  setup() {
    const isMenuOpen = ref(false);
    const activeSection = ref('introductie');
    const scrollProgress = ref(0);
    const menuItems = [
      'Introductie',
      'Opleiding',
      'Vaardigheden',
      'Projecten',
      'Hobbies',
      'Contact'
    ];

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
      document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
    };

    const getMenuItemGradient = (index) => {
      const gradients = [
        'from-teal-500 to-emerald-500',
        'from-emerald-500 to-green-500',
        'from-green-500 to-teal-500',
        'from-teal-500 to-emerald-500',
        'from-emerald-500 to-green-500'
      ];
      return gradients[index % gradients.length];
    };

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        isMenuOpen.value = false;
        document.body.style.overflow = '';
        activeSection.value = sectionId;
      }
    };

    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.value = (window.scrollY / totalHeight) * 100;
      
      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 300) {
          current = section.getAttribute('id');
        }
      });
      
      if (current !== activeSection.value) {
        activeSection.value = current;
        
        // If GSAP is available, animate section entrance
        if (window.gsap && window.ScrollTrigger) {
          gsap.to(`#${current}`, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          });
        }
      }
    };

    onMounted(() => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 150,
        delay: 100,
      });
      
      window.addEventListener('scroll', handleScroll);
      
      // Initialize the active section on load
      setTimeout(() => {
        handleScroll();
      }, 100);
      
      // Initialize GSAP ScrollTrigger if available
      if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        
        // Create scroll animations for each section
        document.querySelectorAll('section[id]').forEach(section => {
          gsap.fromTo(section, 
            { opacity: 0, y: 30 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8,
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
      
      // Clean up ScrollTriggers if they exist
      if (window.ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    });

    return {
      isMenuOpen,
      activeSection,
      menuItems,
      scrollProgress,
      toggleMenu,
      scrollToSection,
      getMenuItemGradient
    };
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 2rem;
}

body {
  overflow-x: hidden;
  color: #e2e8f0; /* Default text color for dark theme */
  background-color: #030712; /* Very dark background for body */
}

#app {
  min-height: 100vh;
}

/* Pattern grid background */
.pattern-grid {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Radial vignette effect */
.bg-radial-vignette {
  background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
}

/* Noise texture */
.noise-bg {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  pointer-events: none;
}

/* Animations and transitions for page sections */
section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

section.aos-animate {
  opacity: 1;
  transform: translateY(0);
}

/* Enhanced Navigation styles */
.menu-toggle {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-toggle:hover {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

/* Menu item animations */
.menu-item-wrapper {
  opacity: 0;
  transform: translateY(20px);
  animation: menuItemFadeIn 0.5s forwards;
}

@keyframes menuItemFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.menu-item-wrapper {
  animation-delay: calc(var(--delay) + 0.1s);
}

.menu-item {
  position: relative;
  overflow: hidden;
}

.menu-item.active {
  color: white;
}

.menu-item.active span:last-child {
  transform: scaleX(1);
}

/* Section transitions with colorful dividers */
section {
  position: relative;
}

section::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 2px;
  background: linear-gradient(to right, 
    transparent, 
    rgba(16, 185, 129, 0.4), 
    rgba(5, 150, 105, 0.4), 
    rgba(4, 120, 87, 0.4),
    rgba(16, 185, 129, 0.4),
    transparent
  );
}

section:last-child::after {
  display: none;
}

/* Custom scrollbar for dark theme - making it more subtle */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #111827;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #10b981, #059669, #047857);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #059669, #047857, #065f46);
}

/* Navigation dots styling - making them more subtle and elegant */
.nav-dots {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.nav-dots:hover {
  opacity: 0.9;
}

.nav-dot {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-dot.active {
  transform: scale(1.5);
  background: linear-gradient(to right, #10b981, #059669);
  border: none;
}

/* Page transition effects */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.app-wrapper {
  animation: fadeIn 1s ease forwards;
}
</style>