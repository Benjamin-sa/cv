<template>
  <div class="layout-container">
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndexSnapniks'
}
</script>

<style scoped>
.layout-container {
  width: 100%;
  min-height: 100vh;
  background: white;
}

.content-wrapper {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
}

@media (min-width: 640px) {
  .content-wrapper {
    padding: 2rem;
  }
}

@media (min-width: 768px) {
  .content-wrapper {
    padding: 2rem 3rem;
  }
}

@media (min-width: 1024px) {
  .content-wrapper {
    padding: 2rem 4rem;
  }
}
</style>