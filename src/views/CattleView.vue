<script setup lang="ts">
import { ref, computed } from "vue";

const searchQuery = ref("");
const activeBreed = ref("All Breeds");

const herd = [
  { id: "FH-101", breed: "Holstein Friesian", yield: 32, status: "Healthy" },
  { id: "FH-104", breed: "Jersey", yield: 24, status: "Healthy" },
  { id: "FH-202", breed: "Guernsey", yield: 21, status: "Healthy" },
  { id: "FH-305", breed: "Brown Swiss", yield: 29, status: "Resting" },
  { id: "FH-412", breed: "Holstein Friesian", yield: 30, status: "Healthy" },
  { id: "FH-501", breed: "Jersey", yield: 26, status: "Healthy" },
];

const breedCategories = computed(() => {
  const breeds = herd.map((cow) => cow.breed);
  return ["All Breeds", ...new Set(breeds)];
});

const filteredHerd = computed(() => {
  return herd.filter((cow) => {
    const matchesSearch =
      cow.id.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      cow.breed.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesBreed =
      activeBreed.value === "All Breeds" || cow.breed === activeBreed.value;

    return matchesSearch && matchesBreed;
  });
});
</script>

<template>
  <main class="pt-40 px-6 pb-20 min-h-screen max-w-7xl mx-auto">
    <header class="mb-16 text-center">
      <span
        class="text-golden-grain font-bold tracking-[0.3em] uppercase text-xs"
      >
        The FH Herd
      </span>
      <h1
        class="font-serif text-5xl md:text-6xl text-heritage-green mt-4 italic"
      >
        Heritage Livestock
      </h1>
    </header>

    <div
      class="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 bg-white p-6 rounded-[2rem] border border-heritage-green/5 shadow-sm"
    >
      <div
        class="flex gap-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto"
      >
        <button
          v-for="cat in breedCategories"
          :key="cat"
          @click="activeBreed = cat"
          :class="[
            'px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap',
            activeBreed === cat
              ? 'bg-heritage-green text-fresh-cream'
              : 'text-heritage-green/40 hover:text-heritage-green hover:bg-heritage-green/5',
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <div class="relative w-full md:w-64">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search Tag ID..."
          class="w-full pl-4 pr-10 py-3 rounded-2xl bg-fresh-cream border border-heritage-green/10 focus:outline-none focus:border-golden-grain text-sm"
        />
        <span
          class="absolute right-4 top-1/2 -translate-y-1/2 text-heritage-green/30"
          >🔍</span
        >
      </div>
    </div>

    <div
      class="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-xl border border-heritage-green/5 overflow-hidden"
    >
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead>
            <tr class="border-b border-heritage-green/10">
              <th
                class="pb-6 font-serif text-heritage-green uppercase tracking-widest text-xs"
              >
                Tag ID
              </th>
              <th
                class="pb-6 font-serif text-heritage-green uppercase tracking-widest text-xs"
              >
                Breed
              </th>
              <th
                class="pb-6 font-serif text-heritage-green uppercase tracking-widest text-xs"
              >
                Status
              </th>
              <th
                class="pb-6 font-serif text-heritage-green uppercase tracking-widest text-xs text-right"
              >
                Daily Yield
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-heritage-green/5">
            <tr
              v-for="cow in filteredHerd"
              :key="cow.id"
              class="group hover:bg-fresh-cream/50 transition-colors"
            >
              <td class="py-6 font-mono text-sage font-bold text-sm">
                #{{ cow.id }}
              </td>
              <td class="py-6 text-iron-ore/80 font-medium">{{ cow.breed }}</td>
              <td class="py-6">
                <span
                  :class="[
                    'px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter',
                    cow.status === 'Healthy'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-amber-100 text-amber-700',
                  ]"
                >
                  {{ cow.status }}
                </span>
              </td>
              <td
                class="py-6 text-right font-serif italic text-lg text-heritage-green"
              >
                {{ cow.yield
                }}<span class="text-xs ml-1 not-italic opacity-50">L</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div
          v-if="filteredHerd.length === 0"
          class="text-center py-20 italic text-iron-ore/30"
        >
          No cattle matching your search criteria.
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
