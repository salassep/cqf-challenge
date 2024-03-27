<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <nav class="navbar fixed top-0 w-screen h-16 bg-white z-50">
    <div class="wrapper h-full flex justify-between items-center">
      <img class="desktop-sm:h-10 h-8" src="../../assets/logo.png" alt="Logo Cinta Quran Foundation">
      <ul class="menu desktop-sm:flex hidden gap-6 items-center">
        <li class="nav-hover">Program</li>
        <li class="nav-hover">Kajian</li>
        <li class="nav-hover">Donasi</li>
        <li class="nav-hover">Kemitraan</li>
        <li class="nav-hover">Update</li>
        <li class="nav-hover">Kontak</li>
        <li class="text-xl nav-hover">
          <Icon icon="ri:search-line" />
        </li>
        <li>
          <button class="w-[116px] py-1.5 border border-app-blue text-app-blue bg-white rounded-btn btn-white-hover">
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