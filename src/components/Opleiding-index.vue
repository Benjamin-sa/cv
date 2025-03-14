<template>
  <section 
    id="opleiding"
    data-aos="fade-up" 
    class="bg-gray-900/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 transform hover:scale-105 transition-transform duration-300 border border-gray-800 shadow-xl"
  >
    <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 text-transparent bg-clip-text">
      Opleiding
    </h2>
    <ul class="space-y-4 sm:space-y-6 md:space-y-8">
      <li 
        v-for="(opl, index) in opleidingen" 
        :key="index"
        class="p-3 sm:p-6 rounded-lg transition-all duration-300 transform"
        :style="{'--animation-order': index}"
        :data-aos="isMobile ? 'fade-up' : getAosAnimation(index)"
        :data-aos-delay="isMobile ? 0 : opl.animationDelay"
      >
        <div 
          class="ml-3 md:ml-0 p-4 sm:p-6 bg-gray-950/80 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800"
          :class="{'md:mr-8': !isMobile && index % 2 === 1}"
        >
          <h3 class="text-lg sm:text-xl font-semibold bg-gradient-to-r from-teal-400 to-emerald-400 text-transparent bg-clip-text mb-2 sm:mb-3">{{ opl.titel }}</h3>
          <div class="flex flex-wrap items-center text-gray-300 mb-2 sm:mb-3 gap-2">
            <span class="font-medium company-badge">{{ opl.school }}</span>
            <span class="mx-1 sm:mx-3 text-gray-400 hidden sm:inline">•</span>
            <span class="text-gray-400 year-badge">{{ opl.jaar }}</span>
          </div>
          <p class="text-gray-300 leading-relaxed description text-sm sm:text-base">{{ opl.beschrijving }}</p>
          <div class="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
            <span 
              v-for="(vak, vIndex) in opl.vakken" 
              :key="vIndex"
              class="px-2 sm:px-3 py-1 bg-gray-800/80 text-teal-300 rounded-full text-xs sm:text-sm hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
            >
              {{ vak }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'OpleidingIndex',
  setup() {
    const opleidingen = ref([
      {
          titel: 'Bachelor in Industriële Ingenieurswetenschappen',
          school: 'Universiteit Hasselt',
          jaar: '2023 - heden',
          beschrijving: 'Specialisatie in elektronica en ICT.',
          vakken: ['Programmeren', 'Elektronica', 'Wiskunde', 'Netwerken'],
          animationDelay: 0
      },
      {
          titel: 'Secundair Onderwijs Techniek wetenschappen',
          school: 'Instituut Mariaburcht',
          jaar: '2015 - 2022',
          beschrijving: 'studierichting met sterke basis in wiskunde en wetenschappen.',
          vakken: ['Wiskunde', 'Fysica', 'Chemie', 'Biologie'],
          animationDelay: 200
      }
    ]);

    const isMobile = ref(false);

    const checkMobile = () => {
      isMobile.value = window.innerWidth < 768 || ('ontouchstart' in window);
    };

    const getAosAnimation = (index) => {
      // On mobile, use simpler animations
      if (isMobile.value) {
        return 'fade-up';
      }
      return index % 2 === 0 ? 'fade-right' : 'fade-left';
    };

    onMounted(() => {
      checkMobile();
      window.addEventListener('resize', checkMobile);
      
      // Configure AOS for better mobile performance
      AOS.init({
        duration: isMobile.value ? 800 : 1000,
        once: isMobile.value, // Only animate once on mobile for performance
        mirror: !isMobile.value,
        disable: 'phone' // Disable complex animations on phone
      });
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkMobile);
    });

    return {
      opleidingen,
      isMobile,
      getAosAnimation
    };
  }
};
</script>

<style scoped>
.opleiding {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

h2 {
  position: relative;
  display: inline-block;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40%;
  height: 3px;
  background: linear-gradient(90deg, #10b981, transparent);
  transition: width 0.3s ease;
}

.opleiding:hover h2::after {
  width: 100%;
}

li {
  border-left: 3px solid transparent;
  position: relative;
  background: transparent;
}

li::before {
  content: '';
  position: absolute;
  left: -3px;
  top: 0;
  height: 0;
  width: 3px;
  background: linear-gradient(to bottom, #10b981, #059669);
  transition: height 0.3s ease;
}

li:hover::before {
  height: 100%;
}

/* Company badge */
.company-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 9999px;
  transition: all 0.3s ease;
}

li:hover .company-badge {
  background: rgba(16, 185, 129, 0.2);
  transform: translateX(5px);
}

/* Year badge */
.year-badge {
  background: rgba(5, 150, 105, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

li:hover .year-badge {
  background: rgba(5, 150, 105, 0.2);
}

/* Description animation */
.description {
  position: relative;
  padding-left: 1rem;
  border-left: 2px solid transparent;
  transition: all 0.3s ease;
}

li:hover .description {
  border-left-color: #10b981;
  padding-left: 1.5rem;
}

/* Animation for new items */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

li {
  animation: slideIn 0.5s ease forwards;
  animation-delay: calc(var(--animation-order) * 100ms);
}

/* Responsive design */
@media (max-width: 640px) {
  .opleiding {
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  li {
    padding: 1rem;
  }

  .company-badge,
  .year-badge {
    font-size: 0.875rem;
  }
}

/* Mobile optimizations */
@media (max-width: 768px) or (prefers-reduced-motion: reduce) {
  li::before {
    display: none; /* Remove complex animations on mobile */
  }
  
  li:hover::before {
    height: 0;
  }
  
  li:hover .company-badge,
  li:hover .year-badge,
  li:hover .description {
    transform: none; /* Disable hover animations on mobile */
  }
  
  .company-badge, .year-badge {
    font-size: 0.75rem;
    padding: 0.15rem 0.5rem;
  }
}

/* Touch-friendly adjustments */
@media (max-width: 640px) {
  .description {
    padding-left: 0.5rem;
    border-left-width: 1px;
  }
  
  li {
    animation-delay: 0ms !important; /* No sequential animations on small mobile */
  }
  
  /* Simpler animations for mobile */
  @keyframes simpleFadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  li {
    animation: simpleFadeIn 0.5s ease forwards;
  }
}
</style>
