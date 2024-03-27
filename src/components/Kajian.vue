<script setup>
import { Icon } from '@iconify/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<template>
  <section class="kajian py-20">
    <div class="wrapper">
      <div class="section-header">
        <div class="section-title">
          <h2 class="font-semibold desktop-sm:text-5xl text-3xl text-center">Kajian Inspiratif</h2>
          <p class="mt-4 text-app-secondary-text text-center">Program kajian inspiratif dari kami untuk menemani aktivitas Sahabat Cinta Qur’an.</p>
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
              slidesPerView: 4,
              spaceBetween: 24
            },
            955: {
              slidesPerView: 5,
              spaceBetween: 24
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 24
            }
          }"
          class="category-swiper"
        >
          <swiper-slide>
            <li class="flex gap-1 justify-center py-3 px-4 w-[168px] border rounded-btn">
              <Icon icon="ri:apps-2-line" height="24"/>
              <span>Semua</span>
            </li>
          </swiper-slide>
          <swiper-slide>
            <li class="flex gap-1 justify-center py-3 px-4 w-[168px] border rounded-btn">
              <Icon icon="fluent:live-24-regular" height="24"/>
              <span>Berlangsung</span>
            </li>
          </swiper-slide>
          <swiper-slide>
            <li class="flex gap-1 justify-center py-3 px-4 w-[168px] border rounded-btn">
              <Icon icon="ic:outline-date-range" height="24"/>
              <span>Akan Datang</span>
            </li>
          </swiper-slide>
          <swiper-slide>
            <li class="flex gap-1 justify-center py-3 px-4 w-[168px] border rounded-btn">
              <Icon icon="heroicons:building-office" height="24"/>
              <span>Perkantoran</span>
            </li>
          </swiper-slide>
          <swiper-slide>
            <li class="flex gap-1 justify-center py-3 px-4 w-[168px] border rounded-btn">
              <Icon icon="mdi:account-online-outline" height="24"/>
              <span>Online</span>
            </li>
          </swiper-slide>
          <swiper-slide>
            <li class="flex gap-1 justify-center py-3 px-4 w-[168px] border rounded-btn">
              <Icon icon="bi:three-dots" height="24"/>
              <span>Lainnya</span>
            </li>
          </swiper-slide>
        </swiper>
        </ul>
      </div>
      <div class="mt-8 grid desktop-sm:grid-cols-6 grid-cols-3 grid-flow-row text-white gap-6">
        <div class="row-span-3 col-span-3 relative">
          <img class="rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="main-kajian-card-gradient rounded-3xl p-8 flex flex-col justify-between">
            <button class="bg-[#FF3C5A] py-3 px-6 rounded-btn w-fit">
              <div class="flex gap-2 items-center">
                <Icon icon="fluent:live-24-regular" height="24"/>
                <span class="font-semibold mobile-sm:text-xl text-lg mobile-sm:inline hidden">Sedang Berlangsung</span>
              </div>
            </button>
            <div class="flex flex-col gap-4">
              <div>
                <span class="text-lg font-medium">Cinta Quran Creative Studio</span>
                <h3 class="font-semibold mobile-sm:text-[32px] text-2xl">Menyempurnakan Taqwa</h3>
              </div>
              <div class="text-xl font-semibold">
                <span class="text-[#AFCD21] block mb-3">Kamis, 30 September 2021</span>
                <span>09:00 - 10:00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
        <div class="relative">
          <img class="grayscale rounded-3xl object-cover h-full w-full" src="../assets/images/kajians/kajian-1.png" alt="Kajian Cinta Quran">
          <div class="kajian-card-gradient rounded-3xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>