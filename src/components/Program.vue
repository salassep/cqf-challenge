<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <section class="program relative">
    <div class="bg-program-pattern bg-no-repeat bg-cover -z-10 bg-center h-full w-full absolute"></div>
    <div class="wrapper py-20">
      <div class="section-header">
        <div class="flex justify-between">
          <div class="section-title">
            <h2 class="font-semibold desktop-sm:text-5xl text-3xl">Program Pilihan</h2>
            <p class="mt-4 text-app-secondary-text">Program-program terbaik dari Cinta Quran Foundation untuk Sahabat Cinta Quran.</p>
          </div>
          <div class="desktop-sm:flex hidden gap-6 items-center text-app-blue">
            <button class="p-3 bg-transparent border border-app-blue rounded-full">
              <Icon icon="ic:baseline-keyboard-arrow-left" height="33px"/>
            </button>
            <button class="p-3 bg-transparent border border-app-blue rounded-full">
              <Icon icon="ic:baseline-keyboard-arrow-right" height="33px"/>
            </button>
          </div>
        </div>
      </div>
      <div class="content mt-8 grid desktop-sm:grid-cols-3 grid-cols-1 grid-flow-row desktop-sm:auto-rows-fr gap-6 text-white">
        <div class= "desktop-sm:col-span-2 row-span-2 relative">
          <img class="rounded-3xl object-cover h-full w-full" src="../assets/images/programs/program-1.png" alt="Program Cinta Quran">
          <div class="main-program-card-gradient rounded-3xl p-8 flex flex-col justify-end gap-4">
            <h3 class="font-semibold text-[32px]">Indonesia Bisa Baca Quran</h3>
            <p class="text-lg mobile-lg:block hidden">Sebuah Fakta mengejutkan menyatakan bahwa 53,57% (BPS 2018). kaum muslimin di Indonesia tidak bisa membaca Al-Quran.</p>
          </div>
        </div>
        <div class="desktop-sm:row-span-2 desktop-sm:h-full h-[200px] relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/programs/program-2.png" alt="Program Cinta Quran">
          <div class="program-card-gradient rounded-3xl p-8 flex flex-col justify-end gap-4">
            <h3 class="font-semibold text-[32px]">CintaQuran Call</h3>
            <p class="text-lg mobile-lg:block hidden">Cinta Quran Call merupakan layanan pendampingan.</p>
          </div>
        </div>
        <div class="relative max-h-[200px]">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/programs/program-3.png" alt="Program Cinta Quran">
          <div class="program-card-gradient rounded-3xl p-8 flex flex-col justify-end gap-4">
            <h3 class="font-semibold text-[32px]">Kajian Perkantoran</h3>
          </div>
        </div>
        <div class="relative max-h-[200px]">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/programs/program-4.png" alt="Program Cinta Quran">
          <div class="program-card-gradient rounded-3xl p-8 flex flex-col justify-end gap-4">
            <h3 class="font-semibold text-[32px]">Majelis Cinta Quran</h3>
          </div>
        </div>
        <div class="relative max-h-[200px]">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/programs/program-5.png" alt="Program Cinta Quran">
          <div class="program-card-gradient rounded-3xl p-8 flex flex-col justify-end gap-4">
            <h3 class="font-semibold text-[32px]">Cinta Quran TV</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>