<template>
  <section 
    id="hobbies"
    class="bg-gray-900/80 backdrop-blur-md shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 transform hover:scale-105 transition-transform duration-300 border border-gray-800"
  >
    <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 text-transparent bg-clip-text">
      Hobbies
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 place-items-center max-w-7xl mx-auto">
      <div 
        v-for="(hobby, index) in hobbies" 
        :key="index"
        class="hobby-card w-full bg-gray-950/80 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800"
      >
        <div class="relative h-48 sm:h-64 overflow-hidden rounded-t-lg">
          <img 
            :src="hobby.image" 
            :alt="hobby.naam"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">{{ hobby.naam }}</h3>
            <div class="flex items-center text-white/90">
              <i :class="hobby.icon + ' mr-2'"></i>
              <span class="text-sm">{{ hobby.periode }}</span>
            </div>
          </div>
        </div>
        
        <div 
          class="ml-6 md:ml-0 p-6 bg-gray-950/80 backdrop-blur-md rounded-lg"
          :class="{'md:mr-8': index % 2 === 1}"
        >
          <p class="text-gray-300 mb-6 leading-relaxed">{{ hobby.beschrijving }}</p>
          
          <div class="space-y-4">
            <h4 class="font-semibold text-gray-200 mb-3">Belangrijkste aspecten:</h4>
            <ul class="space-y-3">
              <li 
                v-for="(detail, idx) in hobby.details" 
                :key="idx" 
                class="flex items-start"
              >
                <span class="w-2 h-2 mt-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mr-3"></span>
                <span class="text-gray-300 flex-1">{{ detail }}</span>
              </li>
            </ul>
          </div>

          <div class="mt-6 flex flex-wrap gap-2">
            <span 
              v-for="(skill, sIdx) in hobby.vaardigheden" 
              :key="sIdx"
              class="px-3 py-1 text-sm bg-gray-800/60 text-emerald-300 rounded-full border border-gray-700 hover:border-emerald-500 transition-all duration-300"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  name: 'HobbiesIndex',

  setup() {
    const hobbies = ref([
      {
        naam: 'Scouts Hoofdleider',
        icon: 'fas fa-campground',
        periode: '2024 - heden',
        beschrijving: 'Als hoofdleider van de scoutsgroep ben ik verantwoordelijk voor de coördinatie van activiteiten, het begeleiden van het leidingsteam en het waarborgen van een veilige en leerzame omgeving voor alle leden.',
        image: '/images/scouts.jpg',
        details: [
          'Leiding geven aan een team van 20+ begeleiders',
          'Organisatie van evenementen en jaarlijkse kampen',
            'Verantwoordelijk voor veiligheid en welzijn van 100+ leden',
            'Communicatie met ouders en externe partners'
        ],
        vaardigheden: [
          'Leiderschap',
            'Verantwoordelijkheid',
            'Event management',
            'Crisismanagement'
        ]
      },
      {
        naam: 'Boksen',
        icon: 'fas fa-fist-raised',
        periode: '2024 - heden',
        beschrijving: 'Boksen is een manier om fysiek en mentaal sterker te worden. Door regelmatige training ontwikkel ik mijn discipline en doorzettingsvermogen.',
        image: '/images/boksen.webp',
        details: [
          'Intensieve technische training 4x per week',
          'Focus op conditie en uithoudingsvermogen',
          'Ontwikkeling van mentale weerbaarheid',
          'Combinatie van kracht- en cardiotraining'
        ],
        vaardigheden: [
          'Discipline',
          'Doorzettingsvermogen',
            'Fysieke Conditie',
            'Mentale Focus'
        ]
      }
    ]);

    onMounted(() => {
      // Force a reflow to ensure proper rendering
      const section = document.getElementById('hobbies');
      if (section) {
        section.style.display = 'none';
        section.offsetHeight; // Force a reflow
        section.style.display = '';
      }
    });

    return {
      hobbies
    };
  }
};
</script>

<style scoped>
#hobbies {
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}

.hobbies {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hobby-card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.hobby-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .hobby-card:active {
    transform: scale(0.98);
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
