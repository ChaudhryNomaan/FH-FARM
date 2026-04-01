<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue"; // Added the footer import
</script>

<template>
  <TheNavbar />

  <div class="min-h-screen">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>

  <TheFooter />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap");

body {
  background-image: radial-gradient(#2d462815 0.5px, transparent 0.5px);
  background-size: 30px 30px;
  background-color: #f9f7f2;
  margin: 0;
  color: #1a1a1a;
  /* Smooth scrolling for the whole site */
  scroll-behavior: smooth;
}

::selection {
  background: #2d4628;
  color: #f9f7f2;
}

/* Page Transition Styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
