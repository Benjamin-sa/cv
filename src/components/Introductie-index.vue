<template>
  <section
    id="introductie"
    data-aos="fade-up"
    data-aos-duration="1000"
    class="h-full w-full overflow-y-auto"
  >
    <div class="flex flex-col items-center py-8 px-4 md:px-8">
      <div class="w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 relative">
        <!-- Profile Section -->
        <div class="relative w-32 h-32 mx-auto mb-8" data-aos="zoom-in" data-aos-delay="200">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          <img
            :src="foto"
            alt="Profielfoto"
            class="relative z-10 rounded-full w-full h-full object-cover shadow-lg border-4 border-white hover:border-blue-500 transition-all duration-300"
          />
        </div>

        <!-- Name and Title -->
        <div class="text-center space-y-4" data-aos="fade-up" data-aos-delay="400">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            {{ naam }}
          </h1>
          <h2 class="text-lg sm:text-xl md:text-2xl text-gray-600">{{ titel }}</h2>
        </div>

        <!-- Description -->
        <p class="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto my-6 sm:my-8 leading-relaxed" data-aos="fade-up" data-aos-delay="600">
          {{ beschrijving }}
        </p>

        <!-- Contact Information Grid -->
        <div 
          class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto my-6 sm:my-8" 
          data-aos="fade-up" 
          data-aos-delay="800"
        >
          <div 
            v-for="(info, index) in contactInfo" 
            :key="index"
            class="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-white/50 hover:bg-blue-50 transition-all duration-300 group"
          >
            <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-400 group-hover:scale-110 transition-transform duration-300">
              <i :class="info.icon" class="text-white text-lg sm:text-xl"></i>
            </div>
            <div>
              <h3 class="text-sm sm:text-base font-medium text-gray-900">{{ info.label }}</h3>
              <p class="text-xs sm:text-sm text-gray-600">{{ info.value }}</p>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center space-x-6 mt-8" data-aos="fade-up" data-aos-delay="1000">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import profielfoto from '@/assets/profielfoto.jpeg';

export default {
  name: 'IntroductieIndex',
  setup() {
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
          value: '05 oktober 200'
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

    return {
      ...introductie.value
    };
  }
};
</script>

<style scoped>
.introductie {
  position: relative;
  overflow: hidden;
}

.introductie::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at top left, rgba(59, 130, 246, 0.1), transparent 50%),
    radial-gradient(circle at bottom right, rgba(147, 51, 234, 0.1), transparent 50%);
  pointer-events: none;
}

.social-link {
  @apply w-12 h-12 flex items-center justify-center rounded-full bg-white/80 text-gray-600 text-xl 
         hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:text-white
         transform transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-md;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Responsive Design */
@media (max-width: 640px) {
  .introductie {
    padding: 1rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.25rem;
  }
  
  .contact-info {
    padding: 0.75rem;
  }
}

/* Improved scroll behavior */
.introductie {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* Better touch targets for mobile */
@media (max-width: 768px) {
  .social-link {
    @apply w-14 h-14;
  }
}
</style>