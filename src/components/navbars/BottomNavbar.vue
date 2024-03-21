<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <nav class="desktop-sm:hidden block fixed bottom-0 right-0 left-0 h-16 bg-white">
    <div class="wrapper">
      <ul class="menu flex justify-around">
        <li>
          <Icon class="text-2xl mx-auto" icon="akar-icons:home" />
          <span class="text-xs">Beranda</span>
        </li>
        <li>
          <Icon class="text-2xl mx-auto" icon="akar-icons:home" />
          <span class="text-xs">Donasi</span>
        </li>
        <li>
          <Icon class="text-2xl mx-auto" icon="akar-icons:home" />
          <span class="text-xs">Program</span>
        </li>
        <li>
          <Icon class="text-2xl mx-auto" icon="akar-icons:home" />
          <span class="text-xs">Kajian</span>
        </li>
        <li>
          <Icon class="text-2xl mx-auto" icon="akar-icons:home" />
          <span class="text-xs">Lainnya</span>
        </li>
      </ul>
    </div>
  </nav>
</template>