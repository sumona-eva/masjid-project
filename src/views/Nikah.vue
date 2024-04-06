<template>
  <AppLayout>
    <section class="common-section common-section__nikah bg-no-repeat bg-center bg-cover">
      <div class="overlay"></div>
      <h1> NIKAH SERVICES  </h1>
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
          <div class="w-full lg:w-1/2 lg:p-20"
               data-aos="zoom-out-right"
               data-aos-duration="800">
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
              <SwiperSlide><img src="https://img.freepik.com/free-photo/hands-wife-husband-with-wedding-engagement-rings-part-floral-bouquet_8353-11154.jpg?t=st=1712136921~exp=1712140521~hmac=370f342c5f838cd110e3339c7924817b2a3f6b3403aa239209a1521f4b45d508&w=360" alt=" "></SwiperSlide>
              <SwiperSlide><img src="https://img.freepik.com/free-photo/wedding-rings-grass_23-2147990671.jpg?t=st=1712136989~exp=1712140589~hmac=79d659333e8cf0c9662d7b4001be8bc293ded130f981615326d74b62e2dbe482&w=826" alt=""></SwiperSlide>
              <SwiperSlide><img src="https://img.freepik.com/free-photo/couple-holding-hands_23-2147990707.jpg?t=st=1712136961~exp=1712140561~hmac=f9b7c048c89e0a78090795e4c2b9d49795fa15e48c3ba61fafcb7c67636e8908&w=740" alt=""></SwiperSlide>
              <SwiperSlide><img src="https://img.freepik.com/premium-photo/nikkah-certificate-save-date-frame-mockup_467389-74.jpg?w=360" alt=""></SwiperSlide>
            </Swiper>
            <p class="py-12 text-gray-700 text-center"
               data-aos="zoom-out-left"
               data-aos-duration="800">

              Nikah (marriage) is a sacred social contract between bride and groom and is strongly encouraged in Islam. It is declared to be one half of a Muslim’s faith. In another narration the Prophet Muhammad (pbuh) has been reported to have said:
            </p>
            <p class=" text-gray-700 text-center"
               data-aos="zoom-out-right"
               data-aos-duration="800">

              Do not delay in three things; 1) The offering of the obligatory prayer, 2) The offering of the funeral prayer when the deceased’s body is present, 3) The marriage of a woman when her suitable match is found.</p>
          </div>
          <div class="w-full lg:w-1/2 pt-16"
               data-aos="zoom-out-left"
               data-aos-duration="800">
            <div>
              <div class=" ">
                <a class="flex items-center font-semibold"
                   href="/">
                  <img class="w-20 m-2" src="@/assets/images/logo-remove.png" alt="" >
                  <span class="text-4xl text-primary max-w-[270px]" >Nikah Services
                  </span>
                </a>
                <p class="text-gray-700 text-lg max-w-[400px] pl-24 pb-8">Both, Balham and Tooting Islamic Centre offer provisions for official Nikah ceremonies and certification</p>
              </div>

              <h1 class="text-2xl font-semibold text-center">Key Information About Our Nikah Services!</h1>
              <div><img src="@/assets/images/flower.png" alt="" class="w-16 h-16 m-5 mx-auto"></div>

              <div class="">
                <ul class="flex flex-col ">
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 m-0 p-0">
                      3 Weeks notice needed
                    </p>
                  </li>
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 ">
                      2 Witnesses Required
                    </p>
                  </li>
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 ">
                      Civil marriage certificate required
                    </p>
                  </li>
                </ul>
                <button class="primary-button ml-8">FUNERAL BOOKING FORM </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="flex flex-col lg:flex-row"
             data-aos="zoom-out-right"
             data-aos-duration="800">
          <div class="w-full lg:w-1/2">
            <h1 class="text-4xl font-semibold pl-8 lg:pt-10">Key Considerations</h1>
            <div class="p-8">
              <ul class=" text-gray-700 text-base">
                <li class=" py-4">1. Mutual consent from both the bride and groom for the Nikah (marriage)</li>
                <li class=" py-4">2. Two adult witnesses who will be present at the Nikah</li>
                <li class=" py-4">3. Mahr - The marriage-gift (Mahr) is a divine injunction. The giving of mahr to the bride by the groom is an essential part of the contract and may be paid in cash, property or movable objects to the bride herself. The amount of mahr is not legally specified, however, moderation according to the existing social norm is recommended. The mahr may be paid immediately to the bride at the time of marriage, or deferred to a later date, or a combination of both. The deferred mahr however, falls due in case of death or divorce.</li>
              </ul>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div>
              <img class="lg:p-8 lg:pt-20" src="https://img.freepik.com/free-photo/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees_8353-11019.jpg?t=st=1712138105~exp=1712141705~hmac=dabc8ef7b49ae0c51480e830f7423fbf6416a4825da4f73f3a39c4c668cbe70e&w=740" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="flex flex-col lg:flex-row items-center lg:pt-20"
             data-aos="zoom-out-left"
             data-aos-duration="800">
          <div class="w-full lg:w-1/4">
            <div><img src="@/assets/images/phone-call.jpg" alt="" class="lg:p-8"></div>
          </div>
          <div class="w-full lg:w-2/4">
            <div class="justify-center">
              <h1 class="font-semibold text-4xl text-center">Book Your Nikah</h1>
              <p class="text-gray-500 py-8">Get in touch to learn more about our Nikah service and to make a booking. Email admin@balhammosque.org or call 020 3409 8054</p>
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

<style>

</style>