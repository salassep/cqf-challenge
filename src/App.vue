<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import Hero from './components/hero/Hero.vue';
import Donation from './components/Donation.vue';
import Program from './components/Program.vue';
import Kajian from './components/Kajian.vue';
import Partner from './components/Partner.vue';
import Cta from './components/Cta.vue';
import { onMounted } from 'vue';

onMounted(() => {
    AOS.init();
})
</script>

<template>
  <div class="relative">
    <AppHeader />
    <Hero />
    <Donation />
    <Program />
    <Kajian />
    <Partner />
    <Cta />
    <AppFooter />
  </div>
</template>

<style scoped>
</style>
