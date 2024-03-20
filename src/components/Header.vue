<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <header>
    <nav class="fixed top-0 right-0 left-0 h-16 bg-white flex items-center w-full px-120px justify-between">
      <img src="../assets/logo.png" width="150" height="40" alt="Logo Cinta Quran Foundation">
      <ul class="menu flex gap-6 items-center">
        <li>Program</li>
        <li>Kajian</li>
        <li>Donasi</li>
        <li>Kemitraan</li>
        <li>Update</li>
        <li>Kontak</li>
        <li>
          <Icon icon="ri:search-line" />
        </li>
        <li>
          <button class="w-[116px] py-1.5 border border-app-blue text-app-blue bg-white rounded-btn">
            <span class="text-sm font-medium">Masuk</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>