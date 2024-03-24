<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
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
      <img src="../../assets/images/Group 272.png" alt="Program Cinta Quran">
    </div>
  </div>
</template>