<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
const isSearchActive = ref(false);
const isSearchToggle = () => {
  isSearchActive.value = !isSearchActive.value;
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: width 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  width: 0;
}
</style>

<template>
  <nav class="navbar fixed top-0 w-screen h-16 bg-white z-50">
    <div class="wrapper h-full flex justify-between items-center">
      <img class="desktop-sm:h-10 h-8" src="../../assets/logo.png" alt="Logo Cinta Quran Foundation">
      <ul class="menu desktop-sm:flex hidden gap-6 items-center relative">
        <li class="nav-hover">Program</li>
        <li class="nav-hover">Kajian</li>
        <li class="nav-hover">Donasi</li>
        <li class="nav-hover">Kemitraan</li>
        <li class="nav-hover">Update</li>
        <li class="nav-hover">Kontak</li>
        <Transition>
          <li v-if="isSearchActive"class="absolute bg-white h-full right-[27%] w-[75%]">
            <input class="bg-white border rounded-3xl h-full w-full px-4 outline-none" type="text">
          </li>
        </Transition>
        <li class="text-xl nav-hover">
          <Icon v-if="isSearchActive" @click="isSearchToggle" icon="ic:baseline-close" />
          <Icon v-else @click="isSearchToggle" icon="ri:search-line" />
        </li>
        <li>
          <button class="w-[116px] py-1.5 border border-app-blue text-app-blue bg-white rounded-btn btn-white-hover">
            <span class="text-sm font-medium">Masuk</span>
          </button>
        </li>
      </ul>
      <div class="desktop-sm:hidden flex items-center gap-2 justify-end text-xl">
        <Transition>
          <div v-if="isSearchActive"class="bg-white h-full right-[27%] text-base w-full">
            <input class="bg-white border rounded-3xl h-full w-full px-4 outline-none" type="text">
          </div>
        </Transition>
        <Icon v-if="isSearchActive" @click="isSearchToggle" icon="ic:baseline-close" />
          <Icon v-else @click="isSearchToggle" icon="ri:search-line" />
      </div>
    </div>
  </nav>
</template>