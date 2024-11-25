<template>
  <section 
    id="contact"
    data-aos="fade-up" 
    class="contact bg-white shadow-xl rounded-lg p-8 transform hover:scale-105 transition-transform duration-300"
  >
    <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
      Contact
    </h2>
    
    <form @submit.prevent="handleSubmit" class="space-y-6 max-w-2xl mx-auto">
      <!-- Naam -->
      <div class="form-group">
        <label for="naam" class="block text-sm font-medium text-gray-700 mb-1">Naam</label>
        <input
          type="text"
          id="naam"
          v-model="formData.naam"
          :class="{'error': errors.naam}"
          class="form-input w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
        <span v-if="errors.naam" class="text-red-500 text-sm mt-1">{{ errors.naam }}</span>
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          :class="{'error': errors.email}"
          class="form-input w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
        <span v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</span>
      </div>

      <!-- Onderwerp -->
      <div class="form-group">
        <label for="onderwerp" class="block text-sm font-medium text-gray-700 mb-1">Onderwerp</label>
        <input
          type="text"
          id="onderwerp"
          v-model="formData.onderwerp"
          :class="{'error': errors.onderwerp}"
          class="form-input w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
        <span v-if="errors.onderwerp" class="text-red-500 text-sm mt-1">{{ errors.onderwerp }}</span>
      </div>

      <!-- Bericht -->
      <div class="form-group">
        <label for="bericht" class="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
        <textarea
          id="bericht"
          v-model="formData.bericht"
          :class="{'error': errors.bericht}"
          class="form-textarea w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows="5"
          required
        ></textarea>
        <span v-if="errors.bericht" class="text-red-500 text-sm mt-1">{{ errors.bericht }}</span>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end">
        <button
          type="submit"
          :disabled="isSubmitting"
          class="submit-button px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-300"
        >
          <span v-if="!isSubmitting">Verstuur</span>
          <span v-else class="flex items-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Versturen...
          </span>
        </button>
      </div>
    </form>

    <!-- Success Message -->
    <div v-if="showSuccess" class="success-message fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform translate-y-0 opacity-100 transition-all duration-500">
      Bericht succesvol verstuurd!
    </div>
  </section>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  data() {
    return {
      formData: {
        naam: '',
        email: '',
        onderwerp: '',
        bericht: ''
      },
      errors: {},
      isSubmitting: false,
      showSuccess: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      AOS.refresh();
    });
  },
  methods: {
    validateForm() {
      this.errors = {};
      
      if (!this.formData.naam) {
        this.errors.naam = 'Naam is verplicht';
      }
      
      if (!this.formData.email) {
        this.errors.email = 'Email is verplicht';
      } else if (!this.validateEmail(this.formData.email)) {
        this.errors.email = 'Ongeldig email adres';
      }
      
      if (!this.formData.onderwerp) {
        this.errors.onderwerp = 'Onderwerp is verplicht';
      }
      
      if (!this.formData.bericht) {
        this.errors.bericht = 'Bericht is verplicht';
      }
      
      return Object.keys(this.errors).length === 0;
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    async handleSubmit() {
      if (!this.validateForm()) return;
      
      this.isSubmitting = true;
      
      try {
        // Hier zou je normaal een API call maken om het formulier te versturen
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simuleer API call
        
        // Reset form
        this.formData = {
          naam: '',
          email: '',
          onderwerp: '',
          bericht: ''
        };
        
        // Toon success message
        this.showSuccess = true;
        setTimeout(() => {
          this.showSuccess = false;
        }, 3000);
        
      } catch (error) {
        console.error('Error:', error);
        // Hier zou je een error message kunnen tonen
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>

<style scoped>
.contact {
  background: linear-gradient(145deg, #ffffff, #f3f4f6);
  border: 1px solid rgba(229, 231, 235, 0.5);
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
}

.form-group {
  position: relative;
  transition: transform 0.3s ease;
}

.form-group:focus-within {
  transform: translateX(10px);
}

.form-input,
.form-textarea {
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}

.error {
  border-color: #ef4444 !important;
}

.submit-button {
  position: relative;
  overflow: hidden;
}

.submit-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transition: left 0.5s ease;
}

.submit-button:hover::before {
  left: 100%;
}

.success-message {
  animation: slideIn 0.5s ease forwards;
}

@keyframes slideIn {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive design */
@media (max-width: 640px) {
  .contact {
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .submit-button {
    width: 100%;
  }
}
</style>
