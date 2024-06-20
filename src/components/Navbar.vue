<template>
    <div class="bg-gray-900 text-white">
      <!-- Mobile Header -->
      <div class="flex justify-between items-center h-16 p-5 md:hidden">
        <div class="text-xl font-bold">Designer</div>
        <button @click="toggleSidebar">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
  
      <!-- Sidebar (Hidden by default on mobile) -->
      <div :class="{'transform duration-300 ease-in-out': true, '-translate-x-full': !isOpen, 'translate-x-0': isOpen}"
           class="fixed top-0 left-0 h-full bg-gray-900 text-white p-5 md:relative md:translate-x-0 md:flex md:flex-col md:justify-between md:h-24">
        <!-- Desktop Header -->
        <div class="hidden md:flex md:justify-around md:items-center md:h-full">
          <div class="text-xl font-bold">Designer</div>
          <nav class="flex gap-10 text-xl font-semibold">
            <a href="#" class="block py-2 hover:text-red-500 duration-150">Home</a>
            <a href="#" class="block py-2 hover:text-red-500 duration-150">About</a>
            <a href="#" class="block py-2 hover:text-red-500 duration-150">Services</a>
            <a href="#" class="block py-2 hover:text-red-500 duration-150">Blog's</a>
            <a href="#" class="block py-2 hover:text-red-500 duration-150">Contact</a>
          </nav>
        </div>
        <!-- Mobile Nav Links (Visible when toggled open) -->
        <nav class="mt-4 md:hidden w-40">
          <a href="#" class="block py-2">Home</a>
          <a href="#" class="block py-2">About</a>
          <a href="#" class="block py-2">Services</a>
          <a href="#" class="block py-2">Blog's</a>
          <a href="#" class="block py-2">Contact</a>
        </nav>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleSidebar() {
        this.isOpen = !this.isOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  .translate-x-0 {
    transform: translateX(0);
  }
  @media (min-width: 768px) {
    .md\:hidden {
      display: none !important;
    }
  }
  </style>
  
  