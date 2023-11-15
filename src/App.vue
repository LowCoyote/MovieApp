<template>
  <div class="flex flex-col min-h-screen">
    <Header/>
      <Home class="flex-grow"/>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Home from "./views/Home.vue";
import Header from "./components/layouts/Header.vue";
import Footer from "./components/layouts/Footer.vue";
</script>
