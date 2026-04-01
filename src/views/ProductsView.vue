<script setup lang="ts">
import { ref, computed } from "vue";
import ProductCard from "../components/ProductCard.vue";

// 1. Full Product Data with matching category tags
const products = ref([
  { id: 1, name: "Full Cream Milk", category: "Milk", price: "$4.50" },
  { id: 2, name: "Artisan Goat Cheese", category: "Cheese", price: "$12.00" },
  { id: 3, name: "Organic Greek Yogurt", category: "Milk", price: "$6.25" },
  { id: 4, name: "Golden Grass-fed Ghee", category: "Butter", price: "$18.50" },
  { id: 5, name: "Raw Honey Comb", category: "Pantry", price: "$14.00" },
  { id: 6, name: "Clotted Cream", category: "Milk", price: "$8.50" },
  { id: 7, name: "Aged Sharp Cheddar", category: "Cheese", price: "$15.00" },
  { id: 8, name: "Small Batch Butter", category: "Butter", price: "$9.25" },
]);

// 2. State for the active filter
const activeCategory = ref("All");
const categories = ["All", "Milk", "Cheese", "Butter", "Pantry"];

// 3. Logic: Filter products based on selection
const filteredProducts = computed(() => {
  if (activeCategory.value === "All") {
    return products.value;
  }
  return products.value.filter(
    (product) => product.category === activeCategory.value,
  );
});
</script>

<template>
  <main class="pt-40 pb-20 px-6 min-h-screen max-w-7xl mx-auto">
    <header class="mb-16">
      <span
        class="text-golden-grain font-bold tracking-[0.2em] uppercase text-xs"
        >The Creamery</span
      >
      <h1 class="font-serif text-5xl text-heritage-green mt-4 leading-tight">
        Purely Organic, <br />Daily Fresh.
      </h1>
    </header>

    <div
      class="flex gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar border-b border-heritage-green/5"
    >
      <button
        v-for="cat in categories"
        :key="cat"
        @click="activeCategory = cat"
        :class="[
          'px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer border',
          activeCategory === cat
            ? 'bg-heritage-green text-fresh-cream border-heritage-green shadow-lg scale-105'
            : 'bg-white text-heritage-green/60 border-heritage-green/10 hover:border-heritage-green/30',
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <div
      v-if="filteredProducts.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
    >
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :name="product.name"
        :category="product.category"
        :price="product.price"
      />
    </div>

    <div v-else class="text-center py-20">
      <p class="font-serif text-2xl text-heritage-green/30 italic">
        No products found in this category.
      </p>
    </div>
  </main>
</template>

<style scoped>
/* Hide scrollbar for the filter bar while keeping it scrollable on mobile */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
