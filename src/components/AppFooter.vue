<script setup>
import { Icon } from '@iconify/vue';
import BottomNavbar from './navbars/BottomNavbar.vue';
</script>

<template>
  <footer class="mt-20 relative">
    <div class="desktop-sm:block hidden bg-footer-pattern bg-no-repeat bg-contain bg-left-bottom -z-10 h-full w-screen absolute"></div>
    <div class="wrapper desktop-sm:flex hidden h-[453px] py-20 w-full justify-between">
      <div class="container">
        <img class="h-12" src="../assets/logo.png" alt="Logo Cinta Quran Foundation">
        <p class="mt-6">
          Cinta Quran Foundation adalah lembaga independen yang mendakwahkan Alquran sebagai solusi 
          dan inspirasi untuk negeri.
        </p>
        <button class="btn-blue mt-8 text-sm">
          <div class="flex pl-[15px] pr-[43px] py-2.5 gap-2">
            <Icon class="text-xl" icon="bi:arrow-right-circle-fill" />
            <span>Lihat Laporan CQ Foundation</span>
          </div>
        </button>
      </div>
      <div class="container flex justify-around">
        <ul class="flex flex-col gap-2">
          <li>Program</li>
          <li>Donasi</li>
          <li>Kajian</li>
          <li>Kemitraan</li>
        <li>Inspirasi</li>
        </ul>
        <ul class="flex flex-col gap-2">
          <li>Volunteer</li>
          <li>Tentang Kami</li>
          <li>FAQ</li>
          <li>Syarat & Ketentuan</li>
          <li>Kebijakan Privasi</li>
        </ul>
      </div>
      <div class="container">
        <ul class="flex flex-col gap-4">
          <li class="flex gap-4">
            <div class="text-2xl">
              <Icon icon="iconamoon:location-pin" />
            </div>
            <span>
              Jl. Parikesit Raya No.35-37 Bantarjati, Bogor Utara, Kota Bogor 16153, Jawa Barat, Indonesia
            </span>
          </li>
          <li class="flex gap-4">
            <div class="text-2xl">
              <Icon icon="iconamoon:email-light" />
            </div>
            <span>info@cintaquran.or.id</span>
          </li>
          <li class="flex gap-4">
            <div class="text-2xl">
              <Icon icon="uil:phone" />
            </div>
            <span>(0251) 85 717 62</span>
          </li>
          <li>
            <span class="text-sm font-semibold">Ikuti kami di</span>
            <div class="socials mt-3 flex gap-2">
              <div class="w-6 h-6 bg-[#636363] rounded-full text-white flex justify-center items-center p-1.5">
                <Icon icon="bi:facebook" />
              </div>
              <div class="w-6 h-6 bg-[#636363] rounded-full text-white flex justify-center items-center p-1.5">
                <Icon icon="bi:youtube" />
              </div>
              <div class="w-6 h-6 bg-[#636363] rounded-full text-white flex justify-center items-center p-1.5">
                <Icon icon="bi:instagram" />
              </div>
              <div class="w-6 h-6 bg-[#636363] rounded-full text-white flex justify-center items-center">
                <Icon icon="flowbite:linkedin-solid" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <BottomNavbar />
  </footer>
</template>