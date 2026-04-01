<template>
  <main class="pt-40 px-6 min-h-screen max-w-4xl mx-auto">
    <div class="text-center mb-24">
      <h1 class="font-serif text-6xl text-heritage-green mb-6">Our Heritage</h1>
      <p class="text-iron-ore/60 text-lg italic">
        "A legacy written in the soil since 2026."
      </p>
    </div>

    <div
      class="space-y-24 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-heritage-green/20 before:to-transparent"
    >
      <div
        v-for="(event, index) in timeline"
        :key="index"
        class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
      >
        <div
          class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-heritage-green shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
        ></div>
        <div
          class="w-[calc(100%-4rem)] md:w-[45%] p-8 bg-white rounded-3xl border border-heritage-green/5 shadow-sm"
        >
          <time class="font-serif text-golden-grain font-bold">{{
            event.year
          }}</time>
          <h3 class="text-xl font-bold text-heritage-green mt-2">
            {{ event.title }}
          </h3>
          <p class="text-iron-ore/50 mt-2 text-sm">{{ event.desc }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const timeline = [
  {
    year: "2024",
    title: "The Foundation",
    desc: "FH Farm was established with 85 head of elite cattle and a dream of organic purity.",
  },
  {
    year: "2025",
    title: "Sustainable Milestone",
    desc: "Achieved 100% solar-powered dairy operations and zero-waste packaging.",
  },
  {
    year: "2026",
    title: "The Gold Medal",
    desc: 'Our Full Cream Milk voted "Purest in the Region" for its natural A2 protein levels.',
  },
];
</script>
