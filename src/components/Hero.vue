<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <section class="hero h-screen relative flex items-center">
    <svg class="w-screen scale-150 absolute -z-10" width="1366" height="998" viewBox="0 0 1366 998" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="755.465" cy="504.242" rx="777.749" ry="417.149" transform="rotate(-4.28823 755.465 504.242)" fill="#389ED9" fill-opacity="0.06"/>
      <path d="M1395.33 342.441C1403.92 457.019 1318.34 567.887 1172.72 654.481C1027.12 741.058 821.648 803.277 
      590.803 820.586C359.958 837.896 147.502 807.016 -9.3763 743.119C-166.286 679.21 -267.443 582.345 -276.034 
      467.767C-284.626 353.189 -199.046 242.321 -53.4212 155.727C92.1738 69.1496 297.65 6.93142 528.495 -10.3782C759.34 
      -27.6878 971.796 3.19227 1128.67 67.0886C1285.58 130.998 1386.74 227.863 1395.33 342.441Z" stroke="#A4D0EA"/>
      <ellipse cx="601.782" cy="441.945" rx="880.783" ry="417.149" transform="rotate(-4.28823 601.782 441.945)" fill="#389ED9" fill-opacity="0.06"/>
    </svg>
    <div class="wrapper flex gap-12">
      <div class="">
        <h1 class="text-5xl font-bold leading-tight">
          Dukung Program Dakwah Syiar Qur'an Project.
        </h1>
        <p class="text-[#636363] mt-5">
          Menumbuhkan motivasi agar masyarakat mencintai Alquran dengan 
          program-program islami terbaik dan kreatif.
        </p>
        <button class="btn-blue py-[15px] pl-6 pr-4 mt-8 leading-none">
          <div class="flex gap-4 items-center">
            <span>Donasi Sekarang</span>
            <Icon class="text-xl" icon="bi:arrow-right-circle-fill" />
          </div>
        </button>
        <div class="mt-16 flex justify-between text-[#636363]">
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
      <div class=" max-w-[524px]">
        <img src="../assets/images/Group 272.png" alt="Program Cinta Quran">
      </div>
    </div>
  </section>
</template>