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

<style>
.hero-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
  top: 50%;
  position: absolute;
  z-index: 99999;
  right: 3%;
  transform: translateX(-50%);
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hero-pagination-bullet {
  width: 4px;
  height: 16px;
  display: inline-block;
  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
  background: var(--swiper-pagination-bullet-inactive-color, #000);
  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
  border-radius: 100px;
}

.hero-pagination-bullets-active {
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: #389ED9;
  transform: scale(1);
  height: 32px;
}

@media screen and (max-width: 955px) {
  .hero-pagination-bullets-dynamic {
    display: none;
  }
}
</style>

<template>
  <section class="hero mt-16 desktop-sm:py-[120px] mobile-lg:py-16 py-8 flex items-center relative overflow-hidden">
    <div class="bg-hero-pattern bg-no-repeat bg-cover bg-[0px_82%] h-full w-full absolute"></div>
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 5000
      }"
      :pagination="{
        dynamicBullets: true,
        clickable: true,
        modifierClass: 'hero-pagination-',
        bulletActiveClass: 'hero-pagination-bullets-active',
        bulletClass: 'hero-pagination-bullet'
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