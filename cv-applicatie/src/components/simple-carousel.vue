<template>
  <Carousel :items-to-show="1" navigation pagination>
    <Slide>
      <div class="h-64 bg-blue-500 flex items-center justify-center text-white text-3xl">
        Slide 1
      </div>
    </Slide>
    <Slide>
      <div class="h-64 bg-green-500 flex items-center justify-center text-white text-3xl">
        Slide 2
      </div>
    </Slide>
    <Slide>
      <div class="h-64 bg-red-500 flex items-center justify-center text-white text-3xl">
        Slide 3
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>