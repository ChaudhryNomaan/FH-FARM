<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isMenuOpen = ref(false);

const navLinks = [
  { name: "Our Heritage", path: "/heritage" },
  { name: "Cattle", path: "/cattle" },
  { name: "Products", path: "/products" },
];

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
    <div
      class="bg-white/80 backdrop-blur-md border border-heritage-green/10 px-6 md:px-8 py-4 rounded-full flex justify-between items-center shadow-sm relative z-50"
    >
      <RouterLink
        to="/"
        class="flex items-center gap-2 group"
        @click="closeMenu"
      >
        <div
          class="w-8 h-8 bg-heritage-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
        >
          <span class="text-fresh-cream font-serif font-bold text-xs">FH</span>
        </div>
        <span
          class="font-serif font-bold tracking-tight text-heritage-green uppercase hidden sm:inline-block"
          >FH Dairy Farm</span
        >
      </RouterLink>

      <div
        class="hidden md:flex items-center gap-8 text-sm font-medium text-iron-ore/70"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="hover:text-heritage-green transition-colors"
          active-class="text-heritage-green font-bold"
        >
          {{ link.name }}
        </RouterLink>
      </div>

      <div class="flex items-center gap-4">
        <RouterLink
          to="/products"
          class="hidden sm:block bg-heritage-green text-fresh-cream px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-md active:scale-95"
        >
          Shop Fresh
        </RouterLink>

        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span
            :class="[
              'w-6 h-0.5 bg-heritage-green transition-all duration-300',
              isMenuOpen ? 'rotate-45 translate-y-2' : '',
            ]"
          ></span>
          <span
            :class="[
              'w-6 h-0.5 bg-heritage-green transition-all duration-300',
              isMenuOpen ? 'opacity-0' : '',
            ]"
          ></span>
          <span
            :class="[
              'w-6 h-0.5 bg-heritage-green transition-all duration-300',
              isMenuOpen ? '-rotate-45 -translate-y-2' : '',
            ]"
          ></span>
        </button>
      </div>
    </div>

    <transition name="mobile-menu">
      <div
        v-if="isMenuOpen"
        class="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl border border-heritage-green/10 rounded-[2rem] p-8 shadow-2xl md:hidden flex flex-col items-center gap-6"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-xl font-serif text-heritage-green hover:text-golden-grain transition-colors"
          active-class="text-golden-grain italic"
          @click="closeMenu"
        >
          {{ link.name }}
        </RouterLink>

        <RouterLink
          to="/products"
          class="w-full text-center bg-heritage-green text-fresh-cream py-4 rounded-full font-bold shadow-lg"
          @click="closeMenu"
        >
          Shop Fresh
        </RouterLink>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
/* Transition Animations */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

/* Existing Active Link Styles */
.router-link-active {
  position: relative;
}

.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #c5a059; /* Using the hex for golden grain */
  border-radius: 2px;
}

/* Remove underline from logo and mobile menu large buttons */
.group.router-link-active::after,
.w-full.router-link-active::after {
  display: none;
}
</style>
