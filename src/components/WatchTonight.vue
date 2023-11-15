<template>
  <div v-if="tonightShow" class="xl:w-8/12 w-full my-4 mx-auto bg-white shadow-xl rounded p-4">
    <h1 class="text-2xl font-bold mb-4">Ce soir, vous regardez</h1>
    <div class="flex flex-row justify-between">
      <div class="flex-none">
        <img :src="tonightShow.image" v-if="tonightShow.image" :alt="tonightShow.title" class="h-48 object-cover rounded">
        <h2 class="text-xl font-bold mt-2">{{ tonightShow.title }}</h2>
        <p class="text-sm text-gray-600">{{ getYearsOnly(tonightShow.year) }}</p>
        <p class="text-sm text-gray-600">{{ tonightShow.averageLength }} min</p>
        <p class="text-sm text-gray-600">{{ tonightShow.rating }}</p>
      </div>
      <div class="flex-grow ml-4">
        <p>{{ tonightShow.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useShowStore } from "../store/ShowStore.ts";
import { getYearsOnly } from "../utils/DateUtils.ts";

const showStore = useShowStore();
const tonightShow = computed(() => {
  const tonightShows = showStore.getShows.filter(show => show.isTonightWatch);
  if (tonightShows.length) {
    const randomIndex = Math.floor(Math.random() * tonightShows.length);
    return tonightShows[randomIndex];
  }
  return null;
});
</script>
