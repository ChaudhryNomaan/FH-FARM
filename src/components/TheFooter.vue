<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="bg-heritage-green text-fresh-cream pt-24 pb-12 px-6 mt-20">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-2 mb-6">
            <div
              class="w-10 h-10 bg-fresh-cream rounded-full flex items-center justify-center"
            >
              <span class="text-heritage-green font-serif font-bold">FH</span>
            </div>
            <span class="font-serif font-bold tracking-tight uppercase"
              >FH Dairy Farm</span
            >
          </div>
          <p class="text-fresh-cream/60 leading-relaxed text-sm">
            Nurturing the land and honoring our cattle since 2026. Experience
            the purest organic dairy, delivered from our pastures to your table.
          </p>
        </div>

        <div>
          <h4 class="font-serif text-lg mb-6 text-golden-grain italic">
            Explore
          </h4>
          <ul class="space-y-4 text-sm font-medium">
            <li>
              <RouterLink
                to="/"
                class="hover:text-golden-grain transition-colors"
                >The Farm</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/products"
                class="hover:text-golden-grain transition-colors"
                >Our Creamery</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/heritage"
                class="hover:text-golden-grain transition-colors"
                >Our Heritage</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/cattle"
                class="hover:text-golden-grain transition-colors"
                >The Herd</RouterLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-serif text-lg mb-6 text-golden-grain italic">
            Visit Us
          </h4>
          <ul class="space-y-4 text-sm text-fresh-cream/70 leading-relaxed">
            <li>120 Green Pasture Lane<br />Organic Valley, Est. 2026</li>
            <li>hello@fhdairy.com</li>
            <li>+1 (555) 829-2026</li>
          </ul>
        </div>

        <div>
          <h4 class="font-serif text-lg mb-6 text-golden-grain italic">
            Stay Pure
          </h4>
          <p class="text-sm text-fresh-cream/60 mb-4">
            Join our circle for seasonal harvests and farm updates.
          </p>
          <div class="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              class="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:border-golden-grain transition-colors"
            />
            <button
              class="bg-golden-grain text-heritage-green px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-all"
            >
              Join
            </button>
          </div>
        </div>
      </div>

      <div
        class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-fresh-cream/40 font-bold"
      >
        <p>© 2026 FH CATTLE-DAIRY FARM • ALL RIGHTS RESERVED</p>
        <div class="flex gap-8">
          <a href="#" class="hover:text-fresh-cream transition-colors"
            >Privacy Policy</a
          >
          <a href="#" class="hover:text-fresh-cream transition-colors"
            >Terms of Service</a
          >
          <a href="#" class="hover:text-fresh-cream transition-colors"
            >Sustainability Report</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
