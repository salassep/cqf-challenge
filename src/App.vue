<script setup>
import { onMounted } from 'vue';
import Header from './components/layouts/Header.vue';
import Footer from './components/layouts/Footer.vue';
import Home from './pages/Home.vue';

onMounted(() => {
    AOS.init();
})
</script>

<template>
  <div class="relative">
    <Header />
    <Home />
    <Footer />
  </div>
</template>
