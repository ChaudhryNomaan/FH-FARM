<template>
  <div class="group cursor-pointer">
    <div
      class="relative aspect-[4/5] bg-white rounded-3xl overflow-hidden mb-6 border border-heritage-green/5 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2"
    >
      <div
        class="absolute inset-0 flex items-center justify-center text-heritage-green/10 text-xs italic"
      >
        [ Product Photo ]
      </div>

      <div
        class="absolute bottom-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
      >
        <button
          class="bg-heritage-green text-fresh-cream w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
        >
          <span class="text-xl">+</span>
        </button>
      </div>
    </div>

    <div class="text-center">
      <h3 class="font-serif text-xl text-heritage-green mb-1">{{ name }}</h3>
      <p class="text-xs text-sage uppercase tracking-widest font-semibold mb-2">
        {{ category }}
      </p>
      <p class="font-sans font-bold text-golden-grain">{{ price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  category: string;
  price: string;
}>();
</script>
