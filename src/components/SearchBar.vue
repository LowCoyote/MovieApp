<template>
  <div class="relative w-8/12 mx-auto z-50">
    <h1 class="text-2xl font-bold mb-4">Recherchez une série</h1>
    <label for="search" class="sr-only">Chercher une série</label>
    <input type="text" name="search" @input="e => search(e.target.value)" class="w-full px-3 py-2 border rounded" placeholder="Entrez un nom pour rechercher">
    <div v-if="results.length" class="absolute w-full mt-2 bg-white border rounded shadow-lg overflow-y-auto max-h-96">
      <div v-for="show in results" :key="show.id" class="h-3/12  overflow-y-auto p-2 hover:bg-gray-200 cursor-pointer">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img :src="show.image" v-if="show.image" :alt="show.title" class="w-16 h-24 mr-2">
            <div class="flex flex-col">
              <span class="text-xl font-bold">{{show.title}}</span>
              <span class="text-sm text-gray-600" v-if="show.rating">{{show.rating}}</span>
              <span class="text-sm text-gray-600" v-if="show.averageLength">{{show.averageLength}} min</span>
              <span class="text-sm text-gray-600">{{getYearsOnly(show.year)}}</span>
            </div>
          </div>
          <button class="px-3 py-2 bg-blue-500 text-white rounded" @click="addToShowStore(show)">Ajouter à ma liste</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {Show} from "../services/models/Show.ts";
import {searchShows} from "../services/TVmazeApi.ts";
import {getYearsOnly} from "../utils/DateUtils.ts";
import {useShowStore} from "../store/ShowStore.ts";

const query = ref('');
const results = ref<Array<Show>>([]);
const showStore = useShowStore();

const search = async (value: string) => {
  query.value = value;
  if (query.value) {
    results.value = await searchShows(query.value);
  } else {
    results.value = [];
  }
};

const addToShowStore = (show: Show) => {
  showStore.addShow(show);
  closeSearch();
}

const closeSearch = () => {
  results.value = [];
};
</script>
