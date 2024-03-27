<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="wrapper py-20">
    <div class="relative h-[272px]" data-aos="fade-up">
      <img class="rounded-3xl object-cover h-full w-full" src="../../assets/images/ctas/cta-1.png" alt="Background CTA">
      <div class="cta-gradient rounded-3xl opacity-80"></div>
      <div class="absolute top-0 left-0 desktop-sm:w-[70%] w-full h-full flex flex-col justify-center px-9 gap-6">
        <p class="text-white font-semibold mobile-lg:text-[32px] mobile-sm:text-2xl text-xl mobile-sm:leading-snug leading-normal">Mari bergabung menjadi keluarga Cinta Quran Foundation agar bisa berbagi dengan sesama</p>
        <button class="py-4 rounded-btn mobile-lg:w-[390px] mobile-sm:w-[250px] w-[200px] border border-app-blue text-app-blue flex justify-center items-center gap-3">
          <span class="font-semibold">Daftar Sekarang</span>
          <Icon class="text-xl" icon="bi:arrow-right-circle-fill" />
        </button>
      </div>
    </div>
  </div>
</template>