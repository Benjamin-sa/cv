<template>
  <section 
    id="hobbies"
    data-aos="fade-up" 
    class="hobbies w-full max-w-[95vw] mx-auto bg-gradient-to-br from-white/90 to-white/95 shadow-xl rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm"
  >
    <h2 class="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
      Hobby's & Interesses
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-7xl mx-auto">
      <div 
        v-for="(hobby, index) in hobbies" 
        :key="index"
        class="hobby-card w-full max-w-md overflow-hidden"
        :data-aos="getAosAnimation(index)"
        :data-aos-delay="index * 100"
      >
        <div class="relative h-48 mb-4 overflow-hidden rounded-t-lg">
          <img 
            :src="hobby.image" 
            :alt="hobby.naam"
            class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4">
            <h3 class="text-xl font-semibold text-white mb-1">{{ hobby.naam }}</h3>
            <div class="hobby-icon text-white">
              <i :class="hobby.icon"></i>
            </div>
          </div>
        </div>
        
        <div class="p-4">
          <p class="text-gray-600 mb-4">{{ hobby.beschrijving }}</p>
          <ul class="space-y-2">
            <li v-for="(detail, idx) in hobby.details" :key="idx" class="flex items-center">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  data() {
    return {
      hobbies: [
        {
          naam: 'Scouts Hoofdleider',
          icon: 'fas fa-campground',
          beschrijving: 'Hoofdverantwoordelijke voor de scoutsgroep sinds 2023.',
          image: '/images/scouts.jpg',
          details: [
            'Leiding geven aan het leidingsteam',
            'Organisatie van kampen en activiteiten',
            'Verantwoordelijk voor veiligheid en welzijn',
            'Communicatie met ouders'
          ]
        },
        {
          naam: 'Boksen',
          icon: 'fas fa-fist-raised',
          beschrijving: 'Passie voor bokssport en fysieke training.',
          image: '/images/boxing.jpg',
          details: [
            'Technische training',
            'Conditie en uithoudingsvermogen',
            'Mentale weerbaarheid',
            'Discipline en focus'
          ]
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      AOS.refresh();
    });
  },
  methods: {
    getAosAnimation(index) {
      const animations = ['fade-up', 'fade-left', 'fade-right'];
      return animations[index % animations.length];
    }
  }
};
</script>

<style scoped>
.hobbies {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hobbies::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
}

.hobby-card {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 100%;
}

.hobby-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.8);
}

.hobby-icon {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

/* Mobile-specific styles */
@media (max-width: 768px) {
  .hobby-card:active {
    transform: scale(0.98);
  }

  /* Add touch feedback */
  .hobby-card::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(59, 130, 246, 0.3);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  .hobby-card:active::after {
    animation: ripple 0.4s ease-out;
  }
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 0.5;
  }
  100% {
    transform: scale(40, 40);
    opacity: 0;
  }
}
</style>
