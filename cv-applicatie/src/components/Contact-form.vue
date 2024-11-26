<template>
  <section 
    id="contact"
    data-aos="fade-up" 
    class="bg-white rounded-lg p-4 sm:p-6 md:p-8 transform hover:scale-105 transition-transform duration-300"
  >
    <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
      Contact & Netwerken
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
      <!-- Contact Form -->
      <div class="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h3 class="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">Neem Contact Op</h3>
        <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-6">
          <!-- Name field with icon -->
          <div class="relative">
            <label class="block text-gray-700 mb-2">Naam</label>
            <div class="relative">
              <input 
                v-model="formData.name"
                type="text"
                class="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                required
              >
              <i class="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>

          <!-- Email field with icon -->
          <div class="relative">
            <label class="block text-gray-700 mb-2">Email</label>
            <div class="relative">
              <input 
                v-model="formData.email"
                type="email"
                class="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                required
              >
              <i class="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>

          <!-- Message field with icon -->
          <div class="relative">
            <label class="block text-gray-700 mb-2">Bericht</label>
            <div class="relative">
              <textarea 
                v-model="formData.message"
                class="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 min-h-[120px]"
                required
              ></textarea>
              <i class="fas fa-comment absolute left-3 top-4 text-gray-400"></i>
            </div>
          </div>

          <button 
            type="submit"
            class="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            :disabled="isSubmitting"
          >
            <i class="fas fa-paper-plane mr-2"></i>
            {{ isSubmitting ? 'Verzenden...' : 'Verstuur Bericht' }}
          </button>
        </form>
      </div>

      <!-- Contact Info & Social Links -->
      <div class="space-y-6">
        <!-- Quick Contact -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Direct Contact</h3>
          <div class="space-y-4">
            <a href="mailto:benjamin.sautersb@gmail.com" class="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
              <div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <i class="fas fa-envelope text-white"></i>
              </div>
              <div class="ml-4">
                <p class="text-gray-800 font-medium">Email</p>
                <p class="text-gray-600 text-sm">benjamin.sautersb@gmail.com</p>
              </div>
            </a>
            <a href="tel:+32493789131" class="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
              <div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <i class="fas fa-phone text-white"></i>
              </div>
              <div class="ml-4">
                <p class="text-gray-800 font-medium">Telefoon</p>
                <p class="text-gray-600 text-sm">+32 493 78 91 31</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Social Links -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Sociale Media</h3>
          <div class="space-y-4">
            <a href="https://github.com/Benjamin-sa" target="_blank" class="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
              <div class="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center">
                <i class="fab fa-linkedin-in text-white"></i>
              </div>
              <div class="ml-4">
                <p class="text-gray-800 font-medium">LinkedIn</p>
                <p class="text-gray-600 text-sm">Bekijk mijn professionele profiel</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/benjamin-sauter-14222b2b0" target="_blank" class="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-all duration-300">
              <div class="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center">
                <i class="fab fa-github text-white"></i>
              </div>
              <div class="ml-4">
                <p class="text-gray-800 font-medium">GitHub</p>
                <p class="text-gray-600 text-sm">Bekijk mijn projecten</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Download CV -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Download CV</h3>
          <a 
            href="/path-to-your-cv.pdf" 
            download
            class="flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
          >
            <i class="fas fa-file-download mr-2"></i>
            Download PDF Versie
          </a>
        </div>
      </div>
    </div>

    <!-- Success Message -->
    <div 
      v-if="showSuccess" 
      class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500"
      :class="{'translate-y-0 opacity-100': showSuccess, 'translate-y-10 opacity-0': !showSuccess}"
    >
      Bericht succesvol verstuurd!
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'ContactForm',
  setup() {
    const formData = ref({
      name: '',
      email: '',
      message: ''
    });
    
    const showSuccess = ref(false);
    const showError = ref(false);
    const errorMessage = ref('');
    const isSubmitting = ref(false);

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };

    const validateForm = () => {
      if (!formData.value.name || !formData.value.email || !formData.value.message) {
        errorMessage.value = 'Alle velden zijn verplicht.';
        showError.value = true;
        return false;
      }

      if (!validateEmail(formData.value.email)) {
        errorMessage.value = 'Voer een geldig e-mailadres in.';
        showError.value = true;
        return false;
      }

      showError.value = false;
      return true;
    };

    const handleSubmit = async () => {
      if (!validateForm()) return;

      isSubmitting.value = true;
      showError.value = false;
      showSuccess.value = false;

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData.value),
        });

        const data = await response.json();

        if (response.ok) {
          showSuccess.value = true;
          formData.value = {
            name: '',
            email: '',
            message: ''
          };
        } else {
          throw new Error(data.error || 'Er is iets misgegaan.');
        }
      } catch (error) {
        showError.value = true;
        errorMessage.value = error.message || 'Er is iets misgegaan bij het verzenden.';
      } finally {
        isSubmitting.value = false;
      }
    };

    onMounted(() => {
      AOS.init();
    });

    return {
      formData,
      showSuccess,
      showError,
      errorMessage,
      isSubmitting,
      handleSubmit
    };
  }
};
</script>

<style scoped>
.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideIn 0.3s ease-out forwards;
}
</style>
