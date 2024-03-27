<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <nav class="desktop-sm:hidden block fixed bottom-0 right-0 left-0 h-16 bg-white z-50">
    <div class="wrapper h-full flex flex-col justify-center">
      <ul class="menu flex justify-around text-[#636363]">
        <li class="nav-hover">
          <Icon class="text-2xl mx-auto" icon="octicon:home-16" />
          <span class="text-xs">Beranda</span>
        </li>
        <li class="nav-hover">
          <Icon class="text-2xl mx-auto" icon="icon-park-outline:oval-love" />
          <span class="text-xs">Donasi</span>
        </li>
        <li class="nav-hover">
          <Icon class="text-2xl mx-auto" icon="material-symbols:mosque-outline-rounded" />
          <span class="text-xs">Program</span>
        </li>
        <li class="nav-hover">
          <Icon class="text-2xl mx-auto" icon="material-symbols:menu-book-outline" />
          <span class="text-xs">Kajian</span>
        </li>
        <li class="nav-hover">
          <Icon class="text-2xl mx-auto" icon="bi:three-dots" />
          <span class="text-xs">Lainnya</span>
        </li>
      </ul>
    </div>
  </nav>
</template>