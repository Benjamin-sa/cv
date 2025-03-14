<template>
  <div class="min-h-screen bg-gray-900/80 backdrop-blur-md shadow-xl rounded-2xl p-4 sm:p-6 border border-gray-800 overflow-y-auto py-6 sm:py-8">
    <div class="container mx-auto px-3 sm:px-4 md:px-8">
      <!-- Section Title -->
      <div class="text-center mb-8 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 text-transparent bg-clip-text mb-3 sm:mb-4">
          Professionele Vaardigheden
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Een overzicht van mijn professionele vaardigheden en persoonlijke kwaliteiten
        </p>
      </div>

      <!-- Core Skills Grid - Optimized for mobile -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-12">
        <!-- Communication Skills -->
        <div 
          class="bg-gray-950/80 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl border border-gray-800"
          data-aos="fade-up"
        >
          <div class="flex items-center mb-4 sm:mb-6">
            <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 mr-3 sm:mr-4">
              <i class="fas fa-comments text-white text-lg sm:text-xl"></i>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-200">Communicatie & Samenwerking</h3>
          </div>
          <ul class="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
            <li class="flex items-start">
              <i class="fas fa-check text-emerald-400 mt-1 mr-3"></i>
              <span>Sterke schriftelijke en mondelinge communicatievaardigheden</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check text-emerald-400 mt-1 mr-3"></i>
              <span>Effectief in teamverband en zelfstandig werk</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check text-emerald-400 mt-1 mr-3"></i>
              <span>Leiderlijke en motivatorische vaardigheden</span>
            </li>
          </ul>
        </div>

        <!-- Problem Solving -->
        <div 
          class="bg-gray-950/80 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl border border-gray-800"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="flex items-center mb-4 sm:mb-6">
            <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 mr-3 sm:mr-4">
              <i class="fas fa-lightbulb text-white text-lg sm:text-xl"></i>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-200">Probleemoplossend Vermogen</h3>
          </div>
          <ul class="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
            <li class="flex items-start">
              <i class="fas fa-check text-emerald-400 mt-1 mr-3"></i>
              <span>Analytisch en kritisch denkvermogen</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check text-emerald-400 mt-1 mr-3"></i>
              <span>Creatief in het vinden van oplossingen</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check text-emerald-400 mt-1 mr-3"></i>
              <span>Structurele aanpak van complexe vraagstukken</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Additional Skills - Optimized for mobile -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <!-- Project Management -->
        <div 
          class="bg-gray-950/80 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl border border-gray-800"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="flex items-center mb-4 sm:mb-6">
            <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 mr-3 sm:mr-4">
              <i class="fas fa-tasks text-white text-lg sm:text-xl"></i>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-200">Project Management</h3>
          </div>
          <ul class="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
            <li class="flex items-start">
              <i class="fas fa-check text-emerald-400 mt-1 mr-3"></i>
              <span>Ervaring met planning en organisatie</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check text-emerald-400 mt-1 mr-3"></i>
              <span>Agile/Scrum methodologie kennis</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check text-emerald-400 mt-1 mr-3"></i>
              <span>Efficiënt tijdmanagement</span>
            </li>
          </ul>
        </div>

        <!-- Personal Development -->
        <div 
          class="bg-gray-950/80 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:shadow-xl border border-gray-800"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="flex items-center mb-4 sm:mb-6">
            <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 mr-3 sm:mr-4">
              <i class="fas fa-chart-line text-white text-lg sm:text-xl"></i>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-200">Persoonlijke Ontwikkeling</h3>
          </div>
          <ul class="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
            <li class="flex items-start">
              <i class="fas fa-check text-emerald-400 mt-1 mr-3"></i>
              <span>Continu leren en aanpassen</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check text-emerald-400 mt-1 mr-3"></i>
              <span>Open voor feedback en nieuwe ideeën</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-check text-emerald-400 mt-1 mr-3"></i>
              <span>Proactieve werkhouding</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Key Characteristics - Optimized for mobile touch -->
      <div class="mt-6 sm:mt-12">
        <div class="text-center mb-4 sm:mb-8">
          <h3 class="text-lg sm:text-xl font-semibold text-gray-200">
            <i class="fas fa-star text-emerald-400 mr-2"></i>
            Kernkwaliteiten
          </h3>
        </div>
        <div class="flex flex-wrap justify-center gap-2 sm:gap-3">
          <span class="px-3 py-2 bg-gray-800/60 text-emerald-300 rounded-full border border-gray-700 hover:border-emerald-500 transition-all duration-300 text-xs sm:text-sm touch-item">
            Betrouwbaar
          </span>
          <span class="px-3 py-2 bg-gray-800/60 text-emerald-300 rounded-full border border-gray-700 hover:border-emerald-500 transition-all duration-300 text-xs sm:text-sm touch-item">
            Flexibel
          </span>
          <span class="px-3 py-2 bg-gray-800/60 text-emerald-300 rounded-full border border-gray-700 hover:border-emerald-500 transition-all duration-300 text-xs sm:text-sm touch-item">
            Leergierig
          </span>
          <span class="px-3 py-2 bg-gray-800/60 text-emerald-300 rounded-full border border-gray-700 hover:border-emerald-500 transition-all duration-300 text-xs sm:text-sm touch-item">
            Resultaatgericht
          </span>
          <span class="px-3 py-2 bg-gray-800/60 text-emerald-300 rounded-full border border-gray-700 hover:border-emerald-500 transition-all duration-300 text-xs sm:text-sm touch-item">
            Initiatiefrijk
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'VaardighedenIndex',
  setup() {
    const isMobile = ref(false);
    
    const checkMobile = () => {
      isMobile.value = window.innerWidth < 768 || ('ontouchstart' in window);
    };
    
    onMounted(() => {
      checkMobile();
      window.addEventListener('resize', checkMobile);
      
      // Configure AOS for better mobile performance
      AOS.init({
        duration: isMobile.value ? 800 : 1000,
        once: isMobile.value, // Only animate once on mobile for performance
        offset: 100,
        delay: isMobile.value ? 0 : 100, // No delay on mobile
        disable: window.innerWidth < 480 ? true : false // Disable on very small screens
      });
    });
    
    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkMobile);
    });
    
    return {
      isMobile
    };
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .touch-item {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    min-height: 36px;
  }
  
  /* Reduce hover effects on mobile */
  div:hover {
    transform: none !important;
  }
}

/* Optimize for reduced motion */
@media (prefers-reduced-motion: reduce) {
  [data-aos] {
    transition-duration: 0s !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
</style>