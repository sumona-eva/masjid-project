<template>
  <AppLayout>
    <section class="common-section common-section__visitmosque bg-no-repeat bg-center bg-cover bg-bottom">
      <div class="overlay"></div>
      <h1> VISIT OUR MOSQUE   </h1>
    </section>
    <section>
      <div class="container">
        <div class="text-center flex justify-center">
          <img src="@/assets/images/flower.png" alt="" class="w-24 h-24 -mt-10 relative z-40 text-center">
        </div>
      </div>
    </section>

    <section>
      <div class="container pt-28">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:w-1/2 lg:p-20">
            <Swiper
                :spaceBetween="40"
                :centeredSlides="true"
                :autoplay="{
               delay: 3000,
                disableOnInteraction: false,
              }"
                :pagination="{
                clickable: true,
                }"

                :modules="modules"
                class="mySwiper"
            >
              <SwiperSlide><img src="https://visitmymosque.org/wp-content/uploads/2022/07/cropped-VMM-Logo-RGB-favicon.png" alt=" "></SwiperSlide>
              <SwiperSlide><img src="https://images.pexels.com/photos/1122407/pexels-photo-1122407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></SwiperSlide>
              <SwiperSlide><img src="https://images.pexels.com/photos/18051832/pexels-photo-18051832/free-photo-of-courtyard-of-the-sheikh-zayed-grand-mosque-with-a-marble-floor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></SwiperSlide>
              <SwiperSlide><img src="https://images.pexels.com/photos/15224039/pexels-photo-15224039/free-photo-of-sheikh-zayed-grand-mosque-in-abu-dhabi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></SwiperSlide>
            </Swiper>
            <p class="py-12 text-gray-700 text-center">
              As part of the Mosques Community Outreach programme, Balham Mosque & Tooting Islamic Centre again joined forces with an initiative launched by the Muslim Council of Britain (MCB) several years ago, entitled Visit My Mosque.            </p>
          </div>
          <div class="w-full lg:w-1/2 lg:pt-16" >
            <div>
                <div class=" lg:pt-48 ">
                  <a class="flex items-center font-semibold"
                     href="/">
                    <img class="w-20 m-2" src="@/assets/images/logo-remove.png" alt="" >
                    <span class="text-4xl text-primary max-w-[300px]" >Visit My Mosque
                    </span>
                  </a>
                  <p class="text-gray-700 text-lg max-w-[400px] pl-24 pb-8">Balham Mosque & Tooting Islamic Centre, open their doors to their Neighbours and local Community to share some light refreshments over a short presentation and exhibition.</p>

                  <button class="primary-button ml-10"> LEARN ABOUT ISLAM & MUSLIMS </button>

                </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:w-1/2">

            <h1 class="text-4xl font-semibold pl-8">Overview</h1>
            <div class="p-8">
              <p class=" text-gray-700 text-base">
                Every year Balham Mosque & Tooting Islamic Centre, open their doors to their Neighbours and local Community to share some light refreshments over a short presentation and exhibition.              </p>
              <p class=" text-gray-700 text-base py-8">
                As part of the Mosques Community Outreach programme, Balham Mosque & Tooting Islamic Centre again joined forces with an initiative launched by the Muslim Council of Britain (MCB)several years ago, entitled Visit My Mosque.              </p>
              <p class=" text-gray-700 text-base">
                Over 250 Mosques across the United Kingdom participate in this event to welcome their neighbours and local communities to share common values and provide an opportunity for people of other faiths or no faith, to openly discuss Islam and Muslims.</p>
                <p class=" text-gray-700 text-base py-8">
                  As important as communicating the religion of Islam, it was an absolute pleasure to provide insight into our activities at each of our centres, in addition to giving more information on what the 1,000 plus worshippers in both localities do when they attend the Mosques. </p>
              <p class=" text-gray-700 text-base py-8">
                Between the two centres, we counted around 400 visitors on the day - that can be considered to be an excellent turn out, not because of the numbers but more because it gave us the opportunity to reach out to our valued neighbours and to our valued non-Muslim community to communicate what we are doing, what we are about and why we do what we do.
              </p>

              <p class=" text-gray-700 text-xl py-8 font-semibold text-center">
                Thank you for supporting My Mosque, Your Mosque, OUR Mosque.
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div>
              <img class="lg:p-16" src="https://images.pexels.com/photos/16681020/pexels-photo-16681020/free-photo-of-ornamented-interior-of-sheikh-zayed-grand-mosque-in-abu-dhabi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            </div>
          </div>
        </div>
      </div>


      <div class="container">
        <div class="flex flex-col lg:flex-row pt-24 items-center">
          <div class="w-full lg:w-1/4">
            <div><img src="@/assets/images/phone-call.jpg" alt="" class="p-8"></div>
          </div>
          <div class="w-full lg:w-2/4">
            <div class="justify-center">
              <h1 class="font-semibold text-4xl ">Book Your Mosque Visit Today</h1>
              <p class="text-gray-500 py-8">To get in touch to book your visit to our next 'Visit My Mosque' event via emailing admin@balhammosque.org or by calling 020 3409 8054</p>
            </div>
          </div>
          <div class="w-full lg:w-1/4 text-center">
            <button class="primary-button ">CALL NOW</button>
          </div>
        </div>
      </div>

    </section>
  </AppLayout>
</template>

<script setup>

import AppLayout from "@/components/AppLayout.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const modules = [ Autoplay, Pagination, Navigation];


</script>

<style >

</style>