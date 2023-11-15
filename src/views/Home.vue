<template>
  <div class="my-4">
    <SearchBar/>
    <MyList/>
    <WatchTonight />
  </div>
</template>

<script setup lang="ts">
import SearchBar from "../components/SearchBar.vue";
import MyList from "../components/MyList.vue";
import WatchTonight from "../components/WatchTonight.vue";
</script>
