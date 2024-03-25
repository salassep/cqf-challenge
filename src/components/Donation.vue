<script setup>
import { Icon } from '@iconify/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const modules = [Pagination];
</script>

<template>
  <section class="donation py-20">
    <div class="wrapper">
      <div class="section-header">
        <div class="flex justify-between">
          <div class="section-title">
            <h2 class="font-semibold text-5xl">Donasi Pilihan</h2>
            <p class="mt-4 text-app-secondary-text">Pilih dan salurkan donasi melalui program-program kami yang berarti bagi sahabat Cinta Quran.</p>
          </div>
          <div class="flex gap-6 items-center text-app-blue">
            <button class="p-3 bg-transparent border border-app-blue rounded-full">
              <Icon icon="ic:baseline-keyboard-arrow-left" height="33px"/>
            </button>
            <button class="p-3 bg-transparent border border-app-blue rounded-full">
              <Icon icon="ic:baseline-keyboard-arrow-right" height="33px"/>
            </button>
          </div>
        </div>
        <ul class="categories mt-8 flex justify-between text-app-secondary-text">
          <li class="flex gap-2 justify-center py-3 px-4 w-52 border rounded-btn">
            <Icon icon="ri:apps-2-line" height="24"/>
            <span>Semua Kategori</span>
          </li>
          <li class="flex gap-2 justify-center py-3 px-4 w-52 border rounded-btn">
            <Icon icon="fluent-emoji-high-contrast:people-hugging" height="24"/>
            <span>Kemanusiaan</span>
          </li>
          <li class="flex gap-2 justify-center py-3 px-4 w-52 border rounded-btn">
            <Icon icon="material-symbols:mosque-outline-rounded" height="24"/>
            <span>IBBQ</span>
          </li>
          <li class="flex gap-2 justify-center py-3 px-4 w-52 border rounded-btn">
            <Icon icon="teenyicons:plant-outline" height="24"/>
            <span>Wakaf</span>
          </li>
          <li class="flex gap-2 justify-center py-3 px-4 w-52 border rounded-btn">
            <Icon icon="bi:three-dots" height="24"/>
            <span>Lainnya</span>
          </li>
        </ul>
      </div>
      <div class="content mt-8">
        <swiper
          :slidesPerView="3"
          :spaceBetween="24"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="donation-swiper"
        >
          <swiper-slide>
            <div class="card w-[360px] shadow-card rounded-b-lg">
              <img class="rounded-t-lg" src="../assets/images/donations/dono-1.jpg" alt="Anak Afrika Berlari">
              <div class="py-6 px-[14.69px] border border-[#EDF4F8] rounded-b-lg" >
                <h3 class="font-semibold text-lg" >Sedekah Beras untuk seluruh para keluarga di Afrika Selatan</h3>
                <div class="flex justify-between text-app-secondary-text mt-9">
                  <div>
                    <span class="text-sm">Dana Terkumpul</span><br>
                    <span class="font-semibold text-app-blue">Rp 0</span>
                  </div>
                  <div>
                    <span class="text-sm">Sisa Waktu</span><br>
                    <span class="font-semibold text-app-blue">1 Hari lagi</span>
                  </div>
                </div>
                <div class="progress-bar mt-4 w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                  <div class="bg-[#AFCD21] h-1 rounded-full relative" style="width: 45%">
                    <div class="bg-[#AFCD21] absolute right-0 -top-[1.5px] w-2 h-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card w-[360px] shadow-card rounded-b-lg">
              <img class="rounded-t-lg" src="../assets/images/donations/dono-1.jpg" alt="Anak Afrika Berlari">
              <div class="py-6 px-[14.69px] border border-[#EDF4F8] rounded-b-lg" >
                <h3 class="font-semibold text-lg" >Sedekah Beras untuk seluruh para keluarga di Afrika Selatan</h3>
                <div class="flex justify-between text-app-secondary-text mt-9">
                  <div>
                    <span class="text-sm">Dana Terkumpul</span><br>
                    <span class="font-semibold text-app-blue">Rp 0</span>
                  </div>
                  <div>
                    <span class="text-sm">Sisa Waktu</span><br>
                    <span class="font-semibold text-app-blue">1 Hari lagi</span>
                  </div>
                </div>
                <div class="progress-bar mt-4 w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                  <div class="bg-[#AFCD21] h-1 rounded-full relative" style="width: 45%">
                    <div class="bg-[#AFCD21] absolute right-0 -top-[1.5px] w-2 h-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card w-[360px] shadow-card rounded-b-lg">
              <img class="rounded-t-lg" src="../assets/images/donations/dono-1.jpg" alt="Anak Afrika Berlari">
              <div class="py-6 px-[14.69px] border border-[#EDF4F8] rounded-b-lg" >
                <h3 class="font-semibold text-lg" >Sedekah Beras untuk seluruh para keluarga di Afrika Selatan</h3>
                <div class="flex justify-between text-app-secondary-text mt-9">
                  <div>
                    <span class="text-sm">Dana Terkumpul</span><br>
                    <span class="font-semibold text-app-blue">Rp 0</span>
                  </div>
                  <div>
                    <span class="text-sm">Sisa Waktu</span><br>
                    <span class="font-semibold text-app-blue">1 Hari lagi</span>
                  </div>
                </div>
                <div class="progress-bar mt-4 w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                  <div class="bg-[#AFCD21] h-1 rounded-full relative" style="width: 45%">
                    <div class="bg-[#AFCD21] absolute right-0 -top-[1.5px] w-2 h-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card w-[360px] shadow-card rounded-b-lg">
              <img class="rounded-t-lg" src="../assets/images/donations/dono-1.jpg" alt="Anak Afrika Berlari">
              <div class="py-6 px-[14.69px] border border-[#EDF4F8] rounded-b-lg" >
                <h3 class="font-semibold text-lg" >Sedekah Beras untuk seluruh para keluarga di Afrika Selatan</h3>
                <div class="flex justify-between text-app-secondary-text mt-9">
                  <div>
                    <span class="text-sm">Dana Terkumpul</span><br>
                    <span class="font-semibold text-app-blue">Rp 0</span>
                  </div>
                  <div>
                    <span class="text-sm">Sisa Waktu</span><br>
                    <span class="font-semibold text-app-blue">1 Hari lagi</span>
                  </div>
                </div>
                <div class="progress-bar mt-4 w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                  <div class="bg-[#AFCD21] h-1 rounded-full relative" style="width: 45%">
                    <div class="bg-[#AFCD21] absolute right-0 -top-[1.5px] w-2 h-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <ul class="flex justify-between mt-[92px]">
        <li class="flex gap-4">
          <div class="bg-dono-pattern bg-cover w-20 h-20 flex justify-center items-center">
            <Icon class=" text-[#B1CF1F]" icon="bi:cash" width="35px" />
          </div>
          <div class="w-[220px]">
            <h3 class="font-semibold text-2xl">Zakat 100%</h3>
            <p class="text-app-secondary-text mt-2 mb-6">Tunaikan Zakat Anda melalui Program Zakat 100% Amanah.</p>
            <span class="text-app-blue">Selengkapnya</span>
          </div>
        </li>
        <li class="flex gap-4">
          <div class="bg-dono-pattern bg-cover w-20 h-20 flex justify-center items-center">
            <Icon class=" text-[#B1CF1F]" icon="iconoir:box-iso" width="35px" />
          </div>
          <div class="w-[220px]">
            <h3 class="font-semibold text-2xl">Barang Berkah</h3>
            <p class="text-app-secondary-text mt-2 mb-6">Yuk berikan barang bekas yang masih layak pakai untuk sahabat kita.</p>
            <span class="text-app-blue">Selengkapnya</span>
          </div>
        </li>
        <li class="flex gap-4">
          <div class="bg-dono-pattern bg-cover w-20 h-20 flex justify-center items-center">
            <Icon class=" text-[#B1CF1F]" icon="icon-park-outline:box" width="30px" />
          </div>
          <div class="w-[220px]">
            <h3 class="font-semibold text-2xl">Amazing Box</h3>
            <p class="text-app-secondary-text mt-2 mb-6">Isi penuh Amazing Box selama 1 bulan, kembalikan kepada kami.</p>
            <span class="text-app-blue">Selengkapnya</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>