<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
    <div class="h-full">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndexSnapniks'
}
</script>

<style scoped>
.bg-gradient-to-br {
  background-image: 
    linear-gradient(to bottom right, rgba(239, 246, 255, 0.95), rgba(245, 243, 255, 0.95)),
    url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
}
</style>