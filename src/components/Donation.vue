<script setup>
import { Icon } from '@iconify/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const modules = [Pagination];
</script>

<style>
.donate-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
  position: absolute;
  z-index: 99999;
  left: 50%;
  bottom: 0;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 80px;
}

.donate-pagination-bullet {
  width: 16px;
  height: 4px;
  display: inline-block;
  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
  background: var(--swiper-pagination-bullet-inactive-color, #000);
  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
  border-radius: 100px;
}

.donate-pagination-bullets-active {
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: #389ED9;
  transform: scale(1);
  width: 32px;
}

@media only screen and (max-width: 768px) {
  .donate-pagination-bullets-dynamic {
    left: 40%;
  }
}
</style>

<template>
  <section class="donation py-20">
    <div class="wrapper">
      <div class="section-header">
        <div class="flex justify-between">
          <div class="section-title">
            <h2 class="font-semibold desktop-sm:text-5xl text-3xl">Donasi Pilihan</h2>
            <p class="mt-4 text-app-secondary-text">Pilih dan salurkan donasi melalui program-program kami yang berarti bagi sahabat Cinta Quran.</p>
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
        <ul class="categories mt-8 text-app-secondary-text">
        <swiper
          :slidesPerView="1"
          :spaceBetween="24"
          :freeMode="true"
          :breakpoints="{
            450: {
              slidesPerView: 2,
              spaceBetween: 24
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            955: {
              slidesPerView: 4,
              spaceBetween: 24
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 24
            }
          }"
          class="category-swiper"
        >
          <swiper-slide>
            <li class="flex gap-2 justify-center py-3 px-4 w-52 border rounded-btn">
              <Icon icon="ri:apps-2-line" height="24"/>
              <span>Semua Kategori</span>
            </li>
          </swiper-slide>
          <swiper-slide>
            <li class="flex gap-2 justify-center py-3 px-4 w-52 border rounded-btn">
              <Icon icon="fluent-emoji-high-contrast:people-hugging" height="24"/>
              <span>Kemanusiaan</span>
            </li>
          </swiper-slide>
          <swiper-slide>
            <li class="flex gap-2 justify-center py-3 px-4 w-52 border rounded-btn">
              <Icon icon="material-symbols:mosque-outline-rounded" height="24"/>
              <span>IBBQ</span>
            </li>
          </swiper-slide>
          <swiper-slide>
            <li class="flex gap-2 justify-center py-3 px-4 w-52 border rounded-btn">
              <Icon icon="teenyicons:plant-outline" height="24"/>
              <span>Wakaf</span>
            </li>
          </swiper-slide>
          <swiper-slide>
            <li class="flex gap-2 justify-center py-3 px-4 w-52 border rounded-btn">
              <Icon icon="bi:three-dots" height="24"/>
              <span>Lainnya</span>
            </li>
          </swiper-slide>
        </swiper>
        </ul>
      </div>
      <div class="content mt-8">
        <swiper
          :slidesPerView="1"
          :spaceBetween="24"
          :pagination="{
            dynamicBullets: true,
            clickable: true,
            modifierClass: 'donate-pagination-',
            bulletActiveClass: 'donate-pagination-bullets-active',
            bulletClass: 'donate-pagination-bullet'
          }"
          :breakpoints="{
            480: {
              slidesPerView: 2,
              spaceBetween: 24
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24
            },
          }"
          :modules="modules"
          class="donation-swiper"
        >
          <swiper-slide>
            <div class="card desktop-lg:w-[360px] 300px shadow-card rounded-b-lg">
              <img class="rounded-t-lg" src="../assets/images/donations/dono-1.jpg" alt="Anak Afrika Berlari">
              <div class="py-6 px-[14.69px] border border-[#EDF4F8] rounded-b-lg" >
                <h3 class="font-semibold text-lg" >Sedekah Beras untuk seluruh para keluarga di Afrika Selatan</h3>
                <div class="flex justify-between text-app-secondary-text desktop-lg:mt-9 mt-6">
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
            <div class="card desktop-lg:w-[360px] 300px shadow-card rounded-b-lg">
              <img class="rounded-t-lg" src="../assets/images/donations/dono-1.jpg" alt="Anak Afrika Berlari">
              <div class="py-6 px-[14.69px] border border-[#EDF4F8] rounded-b-lg" >
                <h3 class="font-semibold text-lg" >Sedekah Beras untuk seluruh para keluarga di Afrika Selatan</h3>
                <div class="flex justify-between text-app-secondary-text desktop-lg:mt-9 mt-6">
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
            <div class="card desktop-lg:w-[360px] 300px shadow-card rounded-b-lg">
              <img class="rounded-t-lg" src="../assets/images/donations/dono-1.jpg" alt="Anak Afrika Berlari">
              <div class="py-6 px-[14.69px] border border-[#EDF4F8] rounded-b-lg" >
                <h3 class="font-semibold text-lg" >Sedekah Beras untuk seluruh para keluarga di Afrika Selatan</h3>
                <div class="flex justify-between text-app-secondary-text desktop-lg:mt-9 mt-6">
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
            <div class="card desktop-lg:w-[360px] 300px shadow-card rounded-b-lg">
              <img class="rounded-t-lg" src="../assets/images/donations/dono-1.jpg" alt="Anak Afrika Berlari">
              <div class="py-6 px-[14.69px] border border-[#EDF4F8] rounded-b-lg" >
                <h3 class="font-semibold text-lg" >Sedekah Beras untuk seluruh para keluarga di Afrika Selatan</h3>
                <div class="flex justify-between text-app-secondary-text desktop-lg:mt-9 mt-6">
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
          <div class=" h-14"></div>
        </swiper>
      </div>
      <ul class="flex desktop-md:flex-row desktop-md:justify-around desktop-md:gap-0 gap-8 flex-col mt-[92px]">
        <li class="flex desktop-md:gap-4 gap-6">
          <div class="bg-dono-pattern bg-cover w-20 h-20 flex justify-center items-center">
            <Icon class=" text-[#B1CF1F]" icon="bi:cash" width="35px" />
          </div>
          <div class="desktop-md:w-[220px] w-3/4">
            <h3 class="font-semibold text-2xl">Zakat 100%</h3>
            <p class="text-app-secondary-text mt-2 mb-6">Tunaikan Zakat Anda melalui Program Zakat 100% Amanah.</p>
            <span class="text-app-blue">Selengkapnya</span>
          </div>
        </li>
        <li class="flex desktop-md:gap-4 gap-6">
          <div class="bg-dono-pattern bg-cover w-20 h-20 flex justify-center items-center">
            <Icon class=" text-[#B1CF1F]" icon="iconoir:box-iso" width="35px" />
          </div>
          <div class="desktop-md:w-[220px] w-3/4">
            <h3 class="font-semibold text-2xl">Barang Berkah</h3>
            <p class="text-app-secondary-text mt-2 mb-6">Yuk berikan barang bekas yang masih layak pakai untuk sahabat kita.</p>
            <span class="text-app-blue">Selengkapnya</span>
          </div>
        </li>
        <li class="flex desktop-md:gap-4 gap-6">
          <div class="bg-dono-pattern bg-cover w-20 h-20 flex justify-center items-center">
            <Icon class=" text-[#B1CF1F]" icon="icon-park-outline:box" width="30px" />
          </div>
          <div class="desktop-md:w-[220px] w-3/4">
            <h3 class="font-semibold text-2xl">Amazing Box</h3>
            <p class="text-app-secondary-text mt-2 mb-6">Isi penuh Amazing Box selama 1 bulan, kembalikan kepada kami.</p>
            <span class="text-app-blue">Selengkapnya</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>