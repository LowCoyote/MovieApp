<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Vos séries</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      <div v-for="show in shows" :key="show.id" class="bg-white shadow rounded p-4 relative group">
        <input type="checkbox" @click="changeStatusWatchTonight(show)" v-model="show.isTonightWatch" class="absolute top-0 right-0 m-2 h-6 w-6 invisible group-hover:visible" />
        <img :src="show.image" v-if="show.image" :alt="show.title" class="w-full h-48 object-cover rounded">
        <h2 class="text-xl font-bold mt-2">{{ show.title }}</h2>
        <p class="text-sm text-gray-600">{{ getYearsOnly(show.year) }}</p>
        <p class="text-sm text-gray-600">{{ show.averageLength }} min</p>
        <p class="text-sm text-gray-600">{{ show.rating }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useShowStore} from "../store/ShowStore.ts";
import {getYearsOnly} from "../utils/DateUtils.ts";
import {Show} from "../services/models/Show.ts";

const shows = useShowStore().getShows;

const changeStatusWatchTonight = (show: Show) => {
  show.isTonightWatch = !show.isTonightWatch;
  useShowStore().updateShow(show);
}
</script>
