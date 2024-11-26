  <template>
  <section 
    id="opleiding"
    data-aos="fade-up" 
    class="bg-white rounded-lg p-4 sm:p-6 md:p-8 transform hover:scale-105 transition-transform duration-300"
  >
    <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
      Opleiding
    </h2>
    <ul class="space-y-4 sm:space-y-6 md:space-y-8">
      <li 
        v-for="(opl, index) in opleidingen" 
        :key="index"
        class="p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
        :style="{'--animation-order': index}"
        :data-aos="getAosAnimation(index)"
        :data-aos-delay="opl.animationDelay"
      >
        <div 
          class="ml-6 md:ml-0 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          :class="{'md:mr-8': index % 2 === 1}"
        >
          <h3 class="text-xl font-semibold text-blue-600 mb-3">{{ opl.titel }}</h3>
          <div class="flex items-center text-gray-600 mb-3">
            <span class="font-medium company-badge">{{ opl.school }}</span>
            <span class="mx-3">•</span>
            <span class="text-gray-500 year-badge">{{ opl.jaar }}</span>
          </div>
          <p class="text-gray-700 leading-relaxed description">{{ opl.beschrijving }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span 
              v-for="(vak, vIndex) in opl.vakken" 
              :key="vIndex"
              class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors duration-300"
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
import { ref, onMounted } from 'vue';
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
          jaar: '2017 - 2023',
          beschrijving: 'studierichting met sterke basis in wiskunde en wetenschappen.',
          vakken: ['Wiskunde', 'Fysica', 'Chemie', 'Technologie'],
          animationDelay: 200
      }
    ]);

    const getAosAnimation = (index) => {
      return index % 2 === 0 ? 'fade-right' : 'fade-left';
    };

    onMounted(() => {
      AOS.init();
    });

    return {
      opleidingen,
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
  background: linear-gradient(90deg, #3b82f6, transparent);
  transition: width 0.3s ease;
}

.opleiding:hover h2::after {
  width: 100%;
}

li {
  border-left: 3px solid transparent;
  position: relative;
  background: white;
}

li::before {
  content: '';
  position: absolute;
  left: -3px;
  top: 0;
  height: 0;
  width: 3px;
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  transition: height 0.3s ease;
}

li:hover::before {
  height: 100%;
}

.text-blue-600 {
  background: linear-gradient(90deg, #3b82f6, #2563eb);
  -webkit-background-clip: text;
  color: transparent;
  transition: all 0.3s ease;
}

li:hover .text-blue-600 {
  letter-spacing: 0.5px;
}

/* Company badge */
.company-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 9999px;
  transition: all 0.3s ease;
}

li:hover .company-badge {
  background: rgba(59, 130, 246, 0.2);
  transform: translateX(5px);
}

/* Year badge */
.year-badge {
  background: rgba(139, 92, 246, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

li:hover .year-badge {
  background: rgba(139, 92, 246, 0.2);
}

/* Description animation */
.description {
  position: relative;
  padding-left: 1rem;
  border-left: 2px solid transparent;
  transition: all 0.3s ease;
}

li:hover .description {
  border-left-color: #3b82f6;
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
</style>
