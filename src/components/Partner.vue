<script setup>
import { Icon } from '@iconify/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
const modules = [Autoplay];
</script>

<template>
  <section class="partner relative">
    <div class="bg-partner-pattern bg-no-repeat bg-[length:150%_150%] desktop-sm:bg-[-200px_-350px] bg-center -z-10 desktop-sm:h-[1000px] h-full w-full absolute"></div>
    <div class="py-20">
      <h2 class="section-title font-semibold desktop-sm:text-5xl text-3xl text-center" data-aos="fade-up">Amazing Group</h2>
      <div class="content mt-8">
        <ul>
          <swiper
            :rewind="true"
            :autoplay="{
              delay: 5000,
              reverseDirection: true
            }"
            :loop="true"
            :slidesPerView="1"
            :spaceBetween="24"
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
                slidesPerView: 5,
                spaceBetween: 24
              }
            }"
            :modules="modules"
            class="partner-swiper"
            data-aos="fade-up"
          >
            <swiper-slide>
              <li class="flex items-center mx-auto w-[264px] h-[140px] bg-white p-7 rounded-3xl">
                <img class="grayscale" src="../assets/images/partners/partner-1.png" alt="Logo Partner Cinta Quran">
              </li>
            </swiper-slide>
            <swiper-slide>
              <li class="flex items-center mx-auto w-[264px] h-[140px] bg-white p-7 rounded-3xl">
                <img class="grayscale" src="../assets/images/partners/partner-2.png" alt="Logo Partner Cinta Quran">
              </li>
            </swiper-slide>
            <swiper-slide>
              <li class="flex items-center mx-auto w-[264px] h-[140px] bg-white p-7 rounded-3xl">
                <img class="grayscale" src="../assets/images/partners/partner-3.png" alt="Logo Partner Cinta Quran">
              </li>
            </swiper-slide>
            <swiper-slide>
              <li class="flex items-center mx-auto w-[264px] h-[140px] bg-white p-7 rounded-3xl">
                <img class="grayscale" src="../assets/images/partners/partner-3.png" alt="Logo Partner Cinta Quran">
              </li>
            </swiper-slide>
            <swiper-slide>
              <li class="flex items-center mx-auto w-[264px] h-[140px] bg-white p-7 rounded-3xl">
                <img class="grayscale" src="../assets/images/partners/partner-3.png" alt="Logo Partner Cinta Quran">
              </li>
            </swiper-slide>
            <swiper-slide>
              <li class="flex items-center mx-auto w-[264px] h-[140px] bg-white p-7 rounded-3xl">
                <img class="grayscale" src="../assets/images/partners/partner-3.png" alt="Logo Partner Cinta Quran">
              </li>
            </swiper-slide>
          </swiper>
        </ul>
        <ul class=" mt-6">
          <swiper
            :rewind="true"
            :loop="true"
            :autoplay="{
              delay: 5000
            }"
            :slidesPerView="1"
            :spaceBetween="24"
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
                slidesPerView: 5,
                spaceBetween: 24
              }
            }"
            :modules="modules"
            class="partner-swiper"
            data-aos="fade-up"
          >
            <swiper-slide>
              <li class="flex items-center mx-auto w-[264px] h-[140px] bg-white p-7 rounded-3xl">
                <img class="grayscale" src="../assets/images/partners/partner-1.png" alt="Logo Partner Cinta Quran">
              </li>
            </swiper-slide>
            <swiper-slide>
              <li class="flex items-center mx-auto w-[264px] h-[140px] bg-white p-7 rounded-3xl">
                <img class="grayscale" src="../assets/images/partners/partner-2.png" alt="Logo Partner Cinta Quran">
              </li>
            </swiper-slide>
            <swiper-slide>
              <li class="flex items-center mx-auto w-[264px] h-[140px] bg-white p-7 rounded-3xl">
                <img class="grayscale" src="../assets/images/partners/partner-3.png" alt="Logo Partner Cinta Quran">
              </li>
            </swiper-slide>
            <swiper-slide>
              <li class="flex items-center mx-auto w-[264px] h-[140px] bg-white p-7 rounded-3xl">
                <img class="grayscale" src="../assets/images/partners/partner-3.png" alt="Logo Partner Cinta Quran">
              </li>
            </swiper-slide>
            <swiper-slide>
              <li class="flex items-center mx-auto w-[264px] h-[140px] bg-white p-7 rounded-3xl">
                <img class="grayscale" src="../assets/images/partners/partner-3.png" alt="Logo Partner Cinta Quran">
              </li>
            </swiper-slide>
            <swiper-slide>
              <li class="flex items-center mx-auto w-[264px] h-[140px] bg-white p-7 rounded-3xl">
                <img class="grayscale" src="../assets/images/partners/partner-3.png" alt="Logo Partner Cinta Quran">
              </li>
            </swiper-slide>
          </swiper>
        </ul>
      </div>
    </div>
  </section>
</template>