<script setup>
import Content from './Content.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const modules = [Pagination, Autoplay];
</script>

<style scoped>
.hero-pagination-horizontal {
  /* top: 0;
  z-index: 9999;
  left: 50%;
  transform: translateX(-50%);
  white-space-collapse: collapse;
  text-wrap: nowrap; */
  background-color: red;
}
</style>

<template>
  <section class="hero mt-16 desktop-sm:py-[120px] mobile-lg:py-16 py-8 flex items-center relative overflow-hidden">
    <!-- <div class="bg-hero-pattern bg-no-repeat bg-[length:120%] bg-[-100px_70%] h-[800px] w-screen absolute"></div> -->
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
      }"
      :pagination="{
        dynamicBullets: true,
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <Content />
      </swiper-slide>
      <swiper-slide>
        <Content />
      </swiper-slide>
      <swiper-slide>
        <Content />
      </swiper-slide>
    </swiper>
  </section>
</template>