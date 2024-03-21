<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <nav class="navbar fixed top-0 right-0 left-0 h-16 bg-white">
    <div class="wrapper h-full flex justify-between items-center">
      <img class="desktop-sm:h-10 h-8" src="../../assets/logo.png" alt="Logo Cinta Quran Foundation">
      <ul class="menu desktop-sm:flex hidden gap-6 items-center">
        <li>Program</li>
        <li>Kajian</li>
        <li>Donasi</li>
        <li>Kemitraan</li>
        <li>Update</li>
        <li>Kontak</li>
        <li class="text-xl">
          <Icon icon="ri:search-line" />
        </li>
        <li>
          <button class="w-[116px] py-1.5 border border-app-blue text-app-blue bg-white rounded-btn">
            <span class="text-sm font-medium">Masuk</span>
          </button>
        </li>
      </ul>
      <div class="desktop-sm:hidden text-xl">
        <Icon icon="ri:search-line" />
      </div>
    </div>
  </nav>
</template>