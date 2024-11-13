<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "#imports";
import NavLink from "./NavLink.vue"; // Import the NavLink component

const route = useRoute();

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false;
  }
);
</script>

<template>
  <header class="md:block flex bg-white shadow-md justify-between">
    <div
      class="flex items-center justify-between max-w-7xl md:mx-auto flex-row"
    >
      <img src="../public/logo.png" alt="logo" class="w-64" />
      <!-- nav for bigger screens -->
      <nav class="hidden lg:flex gap-6">
        <NavLink to="/" label="Rankings" :currentPath="route.path" />
        <NavLink to="/contact" label="Contact" :currentPath="route.path" />
      </nav>
    </div>

    <button
      @click="toggleMenu"
      class="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label="Toggle menu"
    >
      <svg
        v-if="!isMenuOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <aside
      v-if="isMenuOpen"
      class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 lg:hidden z-50"
    >
      <button
        @click="toggleMenu"
        class="absolute top-4 right-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Close menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- nav for mobile -->
      <nav class="flex flex-col mt-8 space-y-4">
        <NavLink to="/" label="Rankings" :currentPath="route.path" />
        <NavLink to="/contact" label="Contact" :currentPath="route.path" />
      </nav>
    </aside>
  </header>
</template>
