<template>
  <div class="app-wrapper">
    <!-- Menu Toggle Button -->
    <button 
      @click="toggleMenu" 
      class="menu-toggle fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center"
    >
      <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-gray-800 text-lg"></i>
    </button>

    <!-- Fullscreen Menu -->
    <div 
      v-show="isMenuOpen"
      class="menu-overlay fixed inset-0 z-40 bg-white/80 backdrop-blur-lg"
    >
      <nav class="relative z-10 h-full flex items-center justify-center">
        <ul class="space-y-4 text-center">
          <li v-for="(item, index) in menuItems" :key="index">
            <button
              @click="navigateToSlide(index)"
              class="text-xl font-semibold text-gray-800 hover:text-blue-600"
              :class="{ 'text-blue-600': currentSlide === index }"
            >
              {{ item }}
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Main Content -->
    <Layout>
      <div class="app-container">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="0"
          :navigation="{ 
            enabled: true,
            hideOnClick: true
          }"
          :pagination="{ 
            enabled: true,
            clickable: true,
            dynamicBullets: true
          }"
          :direction="'horizontal'"
          :effect="'creative'"
          :creativeEffect="{
            prev: {
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
          :speed="800"
          :allowTouchMove="true"
          :touchRatio="1"
          :threshold="20"
          :resistance="true"
          :resistanceRatio="0.85"
          :autoHeight="false"
          class="swiper-container"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide class="swiper-slide-content">
            <IntroductieIndex />
          </swiper-slide>
          <swiper-slide class="swiper-slide-content">
            <OpleidingIndex />
          </swiper-slide>
          <swiper-slide class="swiper-slide-content">
            <VaardighedenIndex />
          </swiper-slide>
          <swiper-slide class="swiper-slide-content">
            <HobbiesIndex />
          </swiper-slide>
          <swiper-slide class="swiper-slide-content">
            <ContactForm />
          </swiper-slide>
        </swiper>
      </div>
    </Layout>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import Layout from './components/layout-index-snapniks.vue';
import IntroductieIndex from './components/Introductie-index.vue';
import OpleidingIndex from './components/Opleiding-index.vue';
import VaardighedenIndex from './components/Vaardigheden-index.vue';
import HobbiesIndex from './components/Hobbies-index.vue';
import ContactForm from './components/Contact-form.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'App',
  components: {
    Layout,
    IntroductieIndex,
    OpleidingIndex,
    VaardighedenIndex,
    HobbiesIndex,
    ContactForm,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const isMenuOpen = ref(false);
    const currentSlide = ref(0);
    const swiperInstance = ref(null);
    const menuItems = [
      'Introductie',
      'Opleiding',
      'Vaardigheden',
      'Hobbies',
      'Contact'
    ];

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
      document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
    };

    const navigateToSlide = (index) => {
      if (swiperInstance.value) {
        swiperInstance.value.slideTo(index);
        isMenuOpen.value = false;
        document.body.style.overflow = '';
      }
    };

    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };
    
    const onSlideChange = () => {
      if (swiperInstance.value) {
        currentSlide.value = swiperInstance.value.activeIndex;
      }
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    };
    
    return {
      modules: [Navigation, Pagination, EffectCreative],
      isMenuOpen,
      currentSlide,
      menuItems,
      toggleMenu,
      navigateToSlide,
      onSwiper,
      onSlideChange,
    };
  },
  mounted() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 50
    });
  },
};
</script>

<style>
.app-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.app-container {
  width: 100%;
  height: 100vh;
  position: relative;
}

/* Menu Styles */
.menu-toggle {
  transition: transform 0.2s ease;
}

/* Swiper styles */
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide-content {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background-color: white;
}

/* Navigation Buttons */
:root {
  --swiper-navigation-size: 24px;
  --swiper-theme-color: #3B82F6;
}

.swiper-button-next,
.swiper-button-prev {
  width: 40px !important;
  height: 40px !important;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }
}

/* Pagination */
.swiper-pagination {
  position: fixed;
  bottom: 20px;
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: rgba(59, 130, 246, 0.5);
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: #3B82F6;
  transform: scale(1.2);
}
</style>