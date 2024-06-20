<template>
  <div class="bg-white h-screen">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"; // Ensure this path is correct

export default {
  name: "App",
  components: {
    Navbar, // Register the Navbar component
  },
};
</script>

<style>
/* Component-specific styles */
</style>
