<template>
  <section
    class="w-full overflow-hidden relative flex items-center justify-center"
  >
    <!-- Main Content with Centered Structure -->
    <div class="flex flex-col justify-center items-center w-full px-4 md:px-8 relative z-10">
      <div 
        class="w-full max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 pb-12 sm:pb-16 relative border border-gray-800"
        data-aos="fade-up"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center">
          <!-- Profile Section with Simplified Animation for Mobile -->
          <div class="md:col-span-1 flex justify-center">
            <div class="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 animate-float-reduced" data-aos="zoom-in" data-aos-delay="200">
              <!-- Reduced animations for mobile -->
              <div class="absolute inset-[-2px] rounded-full bg-gradient-to-r from-teal-700 via-emerald-700 to-green-700 animate-spin-slow opacity-90 reduced-animation"></div>
              <div class="absolute inset-[-6px] rounded-full opacity-50 bg-gradient-to-br from-teal-600 via-emerald-600 to-green-600 reduced-animation"></div>
              <div class="absolute inset-[-10px] rounded-full profile-glow reduced-animation"></div>
              <img
                :src="foto"
                alt="Profielfoto" 
                class="relative z-10 rounded-full w-full h-full object-cover shadow-lg border-4 border-gray-800 hover:scale-105 hover:border-emerald-600 transition-all duration-300"
              />
            </div>
          </div>
          
          <!-- Info Section - Optimized for mobile -->
          <div class="md:col-span-2">
            <!-- Name and Title with Simplified Text Animation -->
            <div class="text-center md:text-left space-y-3" data-aos="fade-up" data-aos-delay="400">
              <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 text-transparent bg-clip-text animate-gradient">
                {{ naam }}
              </h1>
              <h2 class="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 text-transparent bg-clip-text animated-text">{{ titel }}</h2>
              
              <!-- Colorful Animated Divider -->
              <div class="flex justify-center md:justify-start py-2">
                <div class="w-24 h-1.5 bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 rounded-full animate-pulse-reduced"></div>
              </div>
            </div>

            <!-- Description with Simple Fade for Mobile -->
            <div class="relative max-w-2xl mx-auto md:mx-0 my-4 sm:my-6" data-aos="fade-up" data-aos-delay="200">
              <div class="typing-container" :style="`min-height: ${calculateTextHeight()}px;`">
                <p ref="typingText" class="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed md:text-left typing-text">
                  {{ beschrijving }}
                </p>
              </div>
            </div>

            <!-- Colorful Tags - Better spacing for mobile -->
            <div class="flex flex-wrap gap-2 justify-center md:justify-start mb-4 sm:mb-6">
              <span class="px-2 sm:px-3 py-1 rounded-full bg-teal-900/60 text-teal-300 text-xs sm:text-sm font-medium border border-teal-800/50">Programmeren</span>
              <span class="px-2 sm:px-3 py-1 rounded-full bg-emerald-900/60 text-emerald-300 text-xs sm:text-sm font-medium border border-emerald-800/50">Elektronica</span>
              <span class="px-2 sm:px-3 py-1 rounded-full bg-green-900/60 text-green-300 text-xs sm:text-sm font-medium border border-green-800/50">ICT</span>
              <span class="px-2 sm:px-3 py-1 rounded-full bg-teal-900/60 text-teal-300 text-xs sm:text-sm font-medium border border-teal-800/50">Creativiteit</span>
            </div>
          </div>
        </div>

        <!-- Contact Information Grid - Better touch targets for mobile -->
        <div 
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8" 
          data-aos="fade-up" 
          data-aos-delay="800"
        >
          <div 
            v-for="(info, index) in contactInfo" 
            :key="index"
            class="flex items-center space-x-3 p-3 sm:p-4 rounded-lg bg-gray-950/80 hover:bg-gradient-to-br transition-all duration-500 group transform hover:scale-105 hover:shadow-lg border border-gray-800/50 touch-target"
            :class="getContactCardClass(index)"
            :data-aos-delay="800 + (index * 100)"
            data-aos="zoom-in-up"
          >
            <div class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full transition-transform duration-300"
                 :class="getContactIconClass(index)">
              <i :class="info.icon" class="text-white text-base sm:text-lg md:text-xl"></i>
            </div>
            <div class="group-hover:translate-x-1 transition-transform duration-300">
              <h3 class="text-xs sm:text-sm md:text-base font-medium text-gray-200">{{ info.label }}</h3>
              <p class="text-xs sm:text-sm text-gray-400">{{ info.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import profielfoto from '@/assets/profielfoto.jpeg';

export default {
  name: 'IntroductieIndex',
  setup() {
    const typingText = ref(null);
    const introductie = ref({
      naam: 'Benjamin Sauter',
      titel: 'Student Industrieel Ingenieur',
      beschrijving: 'Student industrieel ingenieur met een passie voor softwareontwikkeling en elektronica. Op zoek naar uitdagende projecten om mijn technische vaardigheden verder te ontwikkelen.',
      foto: profielfoto,
      contactInfo: [
        {
          icon: 'fas fa-envelope',
          label: 'Email',
          value: 'benjamin.sautersb@gmail.com'
        },
        {
          icon: 'fas fa-phone',
          label: 'Telefoon',
          value: '+32 493 78 91 31'
        },
        {
          icon: 'fas fa-calendar',
          label: 'Geboortedatum',
          value: '05 oktober 2003'
        }
      ],
      socials: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/benjamin-sauter-14222b2b0',
          icon: 'fab fa-linkedin'
        },
        {
          name: 'GitHub',
          url: 'https://github.com/benjamin-sa',
          icon: 'fab fa-github'
        }
      ]
    });

    const isMobile = ref(false);

    // Check if device is mobile
    const checkMobile = () => {
      isMobile.value = window.innerWidth < 768 || ('ontouchstart' in window);
    };

    // Calculate approximate height based on text length and container width
    const calculateTextHeight = () => {
      const text = introductie.value.beschrijving;
      // Adjust chars per line for mobile
      const width = window.innerWidth;
      let charsPerLine = 60; // Default for desktop
      
      if (width < 640) {
        charsPerLine = 30;
      } else if (width < 768) {
        charsPerLine = 40;
      }
      
      const lineHeight = isMobile.value ? 24 : 28; // Smaller line height for mobile
      const lines = Math.ceil(text.length / charsPerLine);
      return lines * lineHeight;
    };

    const getContactCardClass = (index) => {
      const classes = [
        'hover:from-teal-900/40 hover:to-emerald-900/40',
        'hover:from-emerald-900/40 hover:to-green-900/40',
        'hover:from-teal-900/40 hover:to-emerald-900/40'
      ];
      return classes[index % classes.length];
    };
    
    const getContactIconClass = (index) => {
      const classes = [
        'bg-gradient-to-br from-teal-700 to-emerald-700',
        'bg-gradient-to-br from-emerald-700 to-green-700',
        'bg-gradient-to-br from-teal-700 to-emerald-700'
      ];
      return classes[index % classes.length];
    };
    
    const getSocialLinkClass = (index) => {
      const classes = [
        'social-teal',
        'social-emerald'
      ];
      return classes[index % classes.length];
    };

    onMounted(() => {
      checkMobile();
      window.addEventListener('resize', checkMobile);
      
      // Apply simplified animation for mobile
      const text = typingText.value;
      if (text) {
        const content = introductie.value.beschrijving;
        text.textContent = '';
        let i = 0;
        
        // Faster typing for mobile
        const typeSpeed = isMobile.value ? 15 : 20  ;
        
        const typeChar = () => {
          if (i < content.length) {
            text.textContent += content.charAt(i);
            i++;
            setTimeout(typeChar, Math.random() * typeSpeed + typeSpeed);
          } else {
            text.classList.add('typing-done');
          }
        };
        
        // Start typing sooner on mobile
        setTimeout(typeChar, isMobile.value ? 500 : 1000);
      }

      // Use simpler animations on mobile
      if (window.gsap) {
        const duration = isMobile.value ? 0.5 : 0.8;
        
        gsap.from('.animated-char', {
          y: isMobile.value ? 50 : 100,
          opacity: 0,
          stagger: 0.03,
          duration: duration,
          ease: "back.out(1.5)"
        });

        gsap.from('.social-link', {
          scale: 0,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.5)",
          delay: 0.8
        });
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkMobile);
    });

    return {
      naam: introductie.value.naam,
      titel: introductie.value.titel,
      beschrijving: introductie.value.beschrijving, 
      foto: introductie.value.foto,
      contactInfo: introductie.value.contactInfo,
      typingText,
      isMobile,
      calculateTextHeight,
      getContactCardClass,
      getContactIconClass,
      getSocialLinkClass
    };
  }
};
</script>

<style scoped>
.introductie {
  position: relative;
  overflow: hidden;
}

/* Floating animation for profile photo */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Slow ping animation */
@keyframes ping-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.3;
  }
}

.animate-ping-slow {
  animation: ping-slow 3s ease-in-out infinite;
}

/* Slow spin animation */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 12s linear infinite;
}

/* Reverse spin animation */
@keyframes spin-reverse-slow {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.animate-spin-reverse-slow {
  animation: spin-reverse-slow 15s linear infinite;
}

/* Slow pulse animation */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

/* Moving background gradient */
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient-shift 5s ease infinite;
}

/* Animated text fade in */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-text {
  animation: fadeInUp 1s ease forwards;
  animation-delay: 0.8s;
  opacity: 0;
}

.animated-char {
  animation: fadeInUp 0.5s ease forwards;
}

/* Typing text container with fixed dimensions */
.typing-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.typing-text {
  position: relative;
  width: 100%;
}

/* Typing cursor animation */
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.typing-cursor {
  display: inline-block;
  width: 0.5em;
  height: 1.2em;
  background: linear-gradient(to bottom, #10b981, #059669);
  margin-left: 0.2em;
  animation: blink 1s step-end infinite;
  vertical-align: text-bottom;
  border-radius: 1px;
  position: relative;
  top: 2px;
}

.typing-done + .typing-cursor {
  display: none;
}

/* Enhanced Social Link Animations for Dark Theme */
.social-link {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111827;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transform: translateY(0);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.social-bg-effect {
  transform: scale(0);
  transition: transform 0.5s ease;
}

.social-link:hover .social-bg-effect {
  transform: scale(1);
}

/* Social link variations for dark theme */
.social-teal .social-bg-effect {
  background: linear-gradient(135deg, #10b981, #059669);
}

.social-emerald .social-bg-effect {
  background: linear-gradient(135deg, #059669, #047857);
}

/* Profile glow effect for dark theme */
.profile-glow {
  background: conic-gradient(
    transparent,
    rgba(16, 185, 129, 0.3),
    rgba(5, 150, 105, 0.3),
    rgba(4, 120, 87, 0.3),
    rgba(16, 185, 129, 0.3),
    transparent
  );
}

/* Media query adjustments */
@media (max-width: 640px) {
  .social-link {
    width: 3rem;
    height: 3rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.25rem;
  }
}

/* Ensure the section takes full viewport height on mobile */
@media (max-width: 768px) {
  section {
    min-height: calc(100vh - 4rem);
  }
}

/* Reduced animations for mobile */
@media (max-width: 768px) or (prefers-reduced-motion: reduce) {
  .reduced-animation {
    animation-duration: 15s !important; /* Slower animation */
    animation-iteration-count: 1 !important; /* Only play once */
  }
  
  .animate-float-reduced {
    animation: float 4s ease-in-out infinite;
    animation-name: float-mobile;
  }
  
  .animate-pulse-reduced {
    animation-duration: 4s;
  }
  
  .mobile-hidden {
    display: none;
  }
  
  .touch-animation:hover {
    transform: none !important; /* Disable hover animations on mobile */
  }
  
  @keyframes float-mobile {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
}

/* Optimize touch targets */
.touch-target {
  min-height: 60px;
}

/* Mobile optimized typing animation */
@media (max-width: 768px) {
  .typing-cursor {
    height: 1em;
    width: 0.4em;
  }
  
  /* Simple fade-in for text on mobile instead of typing */
  @keyframes simpleFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .typing-text {
    animation: simpleFadeIn 1s ease forwards;
  }
}
</style>