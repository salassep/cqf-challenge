<script setup>
import { Icon } from '@iconify/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination];
const categories = [
  {
    icon: 'ri:apps-2-line',
    name: 'Semua Kategor',
  },
  {
    icon: 'fluent-emoji-high-contrast:people-hugging',
    name: 'Kemanusiaan',
  },
  {
    icon: 'material-symbols:mosque-outline-rounded',
    name: 'IBBQ'
  },
  {
    icon: 'teenyicons:plant-outline',
    name: 'Wakaf'
  },
  {
    icon: 'bi:three-dots',
    name: 'Lainnya'
  }
];
const donationPrograms = [
  {
    icon: 'bi:cash',
    title: 'Zakat 100%',
    description: 'Tunaikan Zakat Anda melalui Program Zakat 100% Amanah.',
  },
  {
    icon: 'iconoir:box-iso',
    title: 'Barang Berkah',
    description: 'Yuk berikan barang bekas yang masih layak pakai untuk sahabat kita.',
  },
  {
    icon: 'icon-park-outline:box',
    title: 'Amazing Box',
    description: 'Isi penuh Amazing Box selama 1 bulan, kembalikan kepada kami.',
  },
];
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
            <h2 class="font-semibold desktop-sm:text-5xl text-3xl" data-aos="fade-up">Donasi Pilihan</h2>
            <p class="mt-4 text-app-secondary-text" data-aos="fade-up">Pilih dan salurkan donasi melalui program-program kami yang berarti bagi sahabat Cinta Quran.</p>
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
          data-aos="fade-up"
        >
          <swiper-slide v-for="category in categories">
            <li class="flex gap-2 justify-center py-3 px-4 w-52 border rounded-btn">
              <Icon :icon="category.icon" height="24"/>
              <span>{{ category.name }}</span>
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
          data-aos="fade-up"
        >
          <swiper-slide v-for="n in 4">
            <div class="card desktop-lg:w-[360px] 300px shadow-card rounded-b-lg">
              <img class="rounded-t-lg" src="../../assets/images/donations/dono-1.jpg" alt="Anak Afrika Berlari">
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
      <ul class="flex desktop-md:flex-row desktop-md:justify-around desktop-md:gap-0 gap-8 flex-col mt-[92px]" data-aos="fade-up">
        <li class="flex desktop-md:gap-4 gap-6" v-for="program in donationPrograms">
          <div class="bg-dono-pattern bg-cover w-20 h-20 flex justify-center items-center">
            <Icon class=" text-[#B1CF1F]" :icon="program.icon" width="35px" />
          </div>
          <div class="desktop-md:w-[220px] w-3/4">
            <h3 class="font-semibold text-2xl">{{ program.title }}</h3>
            <p class="text-app-secondary-text mt-2 mb-6">{{ program.description }}</p>
            <span class="text-app-blue">Selengkapnya</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>