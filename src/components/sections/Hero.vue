<script setup>
import { Icon } from '@iconify/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
      <swiper-slide v-for="n in 4">
        <div class="wrapper flex gap-12 items-center">
          <div class="mobile-sm:w-1/2 w-full min-w-[200px]">
            <h1 class="desktop-lg:text-5xl mobile-lg:text-[3.5vw] text-2xl font-bold desktop-lg:leading-tight leading-tight">
              Dukung Program Dakwah Syiar Qur'an Project.
            </h1>
            <p class="mobile-lg:block hidden text-[#636363] mt-5">
              Menumbuhkan motivasi agar masyarakat mencintai Alquran dengan 
              program-program islami terbaik dan kreatif.
            </p>
            <button class="btn-blue py-[15px] pl-6 pr-4 mt-8 leading-none">
              <div class="flex gap-4 items-center">
                <span class="mobile-lg:text-base text-sm">Donasi Sekarang</span>
                <Icon class="desktop-sm:inline-block hidden text-xl" icon="bi:arrow-right-circle-fill" />
              </div>
            </button>
            <div class="desktop-sm:flex hidden mt-16 justify-between text-[#636363]">
              <div class="w-[168px] flex flex-col gap-2">
                <Icon class="text-2xl" icon="material-symbols:menu-book-outline" />
                <span class="font-medium text-sm">Kajian Perkantoran</span>
                <span class=" text-app-blue text-xl font-semibold">+124</span>
              </div>
              <div class="w-[168px] flex flex-col gap-2">
                <Icon class="text-2xl" icon="material-symbols:mosque-outline-rounded" />
                <span class="font-medium text-sm">Majelis Cinta Quran</span>
                <span class=" text-app-blue text-xl font-semibold">+43</span>
              </div>
              <div class="w-[168px] flex flex-col gap-2">
                <Icon class="text-2xl" icon="mdi:account-online-outline" />
                <span class="font-medium text-sm">Kajian Online</span>
                <span class=" text-app-blue text-xl font-semibold">+92</span>
              </div>
            </div>
          </div>
          <div class="w-1/2 mobile-sm:block hidden">
            <img src="../../assets/images/heros/hero-1.png" alt="Program Cinta Quran">
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
