<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import ProductCard from "../components/ProductCard.vue";

const products = ref([
  { id: 1, name: "Full Cream Milk", category: "Fresh Dairy", price: "$4.50" },
  {
    id: 2,
    name: "Artisan Goat Cheese",
    category: "Aged Cheese",
    price: "$12.00",
  },
  { id: 3, name: "Organic Greek Yogurt", category: "Cultured", price: "$6.25" },
  { id: 4, name: "Golden Grass-fed Ghee", category: "Butter", price: "$18.50" },
]);

const stats = [
  { label: "Active Pasture", value: "120 Acres" },
  { label: "Happy Cattle", value: "85 Head" },
  { label: "Daily Yield", value: "420 Liters" },
  { label: "Organic Years", value: "15+" },
];
</script>

<template>
  <main class="relative min-h-screen pt-32 px-6">
    <section
      class="max-w-7xl mx-auto flex flex-col items-center text-center py-20"
    >
      <span
        class="text-golden-grain font-semibold tracking-[0.2em] uppercase text-xs mb-4"
      >
        Established 2026 • Organic & Pure
      </span>

      <h1
        class="font-serif text-5xl md:text-7xl text-heritage-green leading-[1.1] mb-8 max-w-4xl"
      >
        Nurturing the Land, <br />
        <span class="italic text-sage font-light">Honoring the Cattle.</span>
      </h1>

      <p
        class="text-iron-ore/60 max-w-xl text-lg leading-relaxed mb-10 font-sans"
      >
        Experience the rich, creamy heritage of FH Farm. Where every drop of
        milk is a testament to sustainable pastures and the finest livestock
        care.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 mb-20">
        <RouterLink
          to="/products"
          class="bg-heritage-green text-fresh-cream px-10 py-4 rounded-full font-bold shadow-xl hover:translate-y-[-2px] transition-all"
        >
          Explore the Dairy
        </RouterLink>
        <RouterLink
          to="/heritage"
          class="border border-heritage-green/20 text-heritage-green px-10 py-4 rounded-full font-bold hover:bg-heritage-green/5 transition-all"
        >
          Our Story
        </RouterLink>
      </div>

      <div
        class="w-full aspect-[16/7] bg-sage/10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 flex items-center justify-center italic text-heritage-green/30"
      >
        [ High-Resolution Golden Hour Photo of FH Cattle ]
      </div>
    </section>

    <section class="max-w-6xl mx-auto py-24 border-y border-heritage-green/10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <p class="text-3xl md:text-4xl font-serif text-heritage-green mb-2">
            {{ stat.value }}
          </p>
          <p
            class="text-xs uppercase tracking-widest text-golden-grain font-bold"
          >
            {{ stat.label }}
          </p>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto py-32">
      <div
        class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-4"
      >
        <div class="max-w-md text-left">
          <h2 class="font-serif text-4xl text-heritage-green mb-4">
            The Creamery Selection
          </h2>
          <p class="text-iron-ore/50 font-sans">
            Our dairy is harvested daily from FH pastures ensuring the purest
            flavor.
          </p>
        </div>
        <RouterLink
          to="/products"
          class="text-heritage-green font-bold border-b-2 border-golden-grain pb-1 hover:text-golden-grain transition-all"
        >
          View All Products →
        </RouterLink>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
      >
        <ProductCard
          v-for="p in products"
          :key="p.id"
          :name="p.name"
          :category="p.category"
          :price="p.price"
        />
      </div>
    </section>

    <footer
      class="max-w-7xl mx-auto pt-20 pb-10 text-center border-t border-heritage-green/5"
    >
      <p class="text-sage text-sm font-serif">© 2026 FH Cattle-Dairy Farm</p>
    </footer>
  </main>
</template>
