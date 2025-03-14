<template>
  <section 
    id="projecten"
    data-aos="fade-up" 
    class="bg-gray-900/80 backdrop-blur-md shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 transform hover:scale-105 transition-transform duration-300 border border-gray-800"
  >
    <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 text-transparent bg-clip-text">
      Projecten
    </h2>
    
    <div class="space-y-6 sm:space-y-8">
      <!-- Project Card -->
      <div 
        v-for="(project, index) in projects" 
        :key="index"
        class="bg-gray-950/80 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-gray-800"
      >
        <!-- Project Header with Clickable Image -->
        <div class="relative h-48 sm:h-56 md:h-64 overflow-hidden group cursor-pointer">
          <!-- Project Image -->
          <a :href="project.liveUrl || project.githubUrl" target="_blank" class="block w-full h-full">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              @error="handleImageError($event, index)"
            />
            
            <!-- Overlay Gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-teal-900/70 via-emerald-900/60 to-black/50 group-hover:opacity-80 transition-opacity duration-300"></div>
            
            <!-- Centered Play/Visit Button (shows on hover) -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-16 h-16 rounded-full bg-teal-600/80 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <i class="fas fa-external-link-alt text-white text-xl"></i>
              </div>
            </div>
          </a>
          
          <!-- Project Info Overlay (always visible) -->
          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <div class="flex items-center justify-between">
              <h3 class="text-xl sm:text-2xl font-bold text-white">{{ project.title }}</h3>
              <a 
                :href="project.githubUrl" 
                target="_blank" 
                class="w-10 h-10 bg-gray-800/80 rounded-full flex items-center justify-center hover:bg-gray-700/80 transition-colors duration-300"
              >
                <i class="fab fa-github text-white"></i>
              </a>
            </div>
            <p class="text-gray-300 mt-2">{{ project.description }}</p>
          </div>
        </div>
        
        <!-- Project Content -->
        <div class="p-4 sm:p-6">
          <!-- Tech Stack Tags -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="(tech, techIndex) in project.techStack" 
              :key="techIndex"
              class="px-3 py-1 rounded-full text-xs border"
              :class="getTechClass(techIndex)"
            >
              {{ tech }}
            </span>
          </div>
          
          <!-- Features Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div 
              v-for="(feature, featureIndex) in project.features" 
              :key="featureIndex"
              class="flex items-start space-x-2"
            >
              <i :class="['fas', feature.icon, 'text-emerald-400 mt-1']"></i>
              <span class="text-gray-300 text-sm">{{ feature.text }}</span>
            </div>
          </div>
          
          <!-- Project Description -->
          <p class="text-gray-400 text-sm mb-4">
            {{ project.longDescription || project.description }}
          </p>
          
          <!-- Project Actions -->
          <div class="flex flex-wrap gap-3 items-center">
            <a 
              :href="project.githubUrl" 
              target="_blank"
              class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg hover:from-teal-500 hover:to-emerald-500 transition-all duration-300 text-sm"
            >
              <i class="fab fa-github mr-2"></i>
              Bekijk op GitHub
            </a>
            
            <a 
              v-if="project.liveUrl"
              :href="project.liveUrl" 
              target="_blank"
              class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg hover:from-emerald-500 hover:to-green-500 transition-all duration-300 text-sm"
            >
              <i class="fas fa-external-link-alt mr-2"></i>
              Bezoek Website
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import shopfoto from '@/assets/shop-lodlavki.jpeg';


export default {
  name: 'ProjectenIndex',
  setup() {
    // Projects data
    const projects = ref([
      {
        title: 'Scouts Payment System',
        description: 'Web applicatie voor het beheren van bestellingen en betalingen voor Scouts evenementen',
        longDescription: 'Volledige webapp voor het beheren van scouts activiteiten, inclusief betalingsverwerking, ledenbeheer, kampen en materiaalvoorraad.',
        image: shopfoto, // Add this image to your public/images folder
        githubUrl: 'https://github.com/Benjamin-sa/betaling-2.0.git',
        liveUrl: 'https://shop.lodlavki.be', // Replace with your actual URL if available
        techStack: ['Vue.js', 'Express', 'Stripe', 'Firebase', 'SQLite', 'Node.js'],
        features: [
          { icon: 'fa-shopping-cart', text: 'Product management met afbeelding uploads' },
          { icon: 'fa-credit-card', text: 'Veilige betalingen via Stripe' },
          { icon: 'fa-clock', text: 'Tijdslot reserveringssysteem' },
          { icon: 'fa-user-shield', text: 'Gebruikersauthenticatie met Firebase' },
          { icon: 'fa-chart-bar', text: 'Admin dashboard' },
          { icon: 'fa-mobile-alt', text: 'Responsive design' },
          { icon: 'fa-users', text: 'Ledenbeheer systeem' },
          { icon: 'fa-campground', text: 'Kamp planning en organisatie' }
        ]
      }
      // You can add more projects here
    ]);

    // Get CSS class for tech stack items for visual variety
    const getTechClass = (index) => {
      const classes = [
        'bg-teal-900/40 text-teal-300 border-teal-800/50',
        'bg-emerald-900/40 text-emerald-300 border-emerald-800/50',
        'bg-green-900/40 text-green-300 border-green-800/50'
      ];
      return classes[index % classes.length];
    };

    // Handle image loading errors
    const handleImageError = (event, index) => {
      // Set a fallback image or a placeholder if the image fails to load
      event.target.src = shopfoto   ;
    };

    onMounted(() => {
      AOS.init({
        duration: 500,
        easing: 'ease-in-out',
        once: false,
        mirror: true
      });
    });

    return {
      projects,
      getTechClass,
      handleImageError
    };
  }
};
</script>

<style scoped>
.project-card {
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

/* Prevent image stretching with object-fit */
img {
  object-fit: cover;
}
</style>
