<template>
  <AppLayout>
    <section class="common-section common-section__funeral bg-no-repeat bg-center bg-cover">
      <div class="overlay"></div>
      <h1> FUNERAL  </h1>
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
              <SwiperSlide><img src="https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2020/10/14/af_madrasah_141020.jpg?VersionId=moezbZBTTgpxkrsRCeMUi7xgvvwOvqJB" alt=" "></SwiperSlide>
              <SwiperSlide><img src="https://thescoop.co/wp-content/uploads/2020/06/IMG_1949-e1678661831918.jpg" alt=""></SwiperSlide>
              <SwiperSlide><img src="https://img.freepik.com/free-photo/free-photo-ramadan-kareem-eid-mubarak-royal-elegant-lamp-with-mosque-holy-gate-with-fireworks_1340-23597.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1711843200&semt=sph" alt=""></SwiperSlide>
              <SwiperSlide><img src="https://media.istockphoto.com/id/1475239283/photo/knowledge-is-power.jpg?s=612x612&w=0&k=20&c=xk8f8egx-fcsGbRysmbhBT9bymFIShNX9KPPv-OjGJY=" alt=""></SwiperSlide>
            </Swiper>
            <p class="py-12 text-gray-700 text-center">
              We will endeavour to have the body buried as soon as possible.

              St Georges Hospital and Croydon University College Hospital require a release form before the body can be released. The release form can be obtained either from the bereavement office or the ward Manager.            </p>

          </div>
          <div class="w-full lg:w-1/2 pt-16" >
            <div>
              <div >
                <a class="flex items-center font-semibold"
                   href="/">
                  <img class="w-20 m-2" src="@/assets/images/logo-remove.png" alt="" >
                  <span class="text-4xl text-primary max-w-[270px]">Funeral Services
                  </span>
                </a>
                <p class="text-gray-700 text-lg max-w-[400px] pl-24 pb-8">Baitul Atik Masjid & Madrasah Complex Islamic Centre offers a fully comprehensive service for funerals.</p>
              </div>

              <h1 class="text-2xl font-semibold text-center">Key Information About Our Funeral Services!</h1>
              <div><img src="@/assets/images/flower.png" alt="" class="w-16 h-16 m-5 mx-auto"></div>

              <div class="">
                <ul class="flex flex-col lg:flex-row lg:flex-wrap">
                  <li class="flex p-2 items-center w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 m-0 p-0">
                      Fully equipped mortuary
                    </p>
                  </li>
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 ">
                      Cold room
                    </p>
                  </li>
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 ">
                      Transportation
                    </p>
                  </li>
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 m-0 p-0">
                      Facilities to wash the deceased body
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
          <div class="flex flex-col lg:flex-row">
            <div class="w-full lg:w-1/2">

              <h1 class="text-4xl font-semibold pl-8 pt-10">Funeral Guide</h1>
              <div class="p-8">
                <p class=" text-gray-700 text-base">
                  Our funeral guide includes notes and information regarding what to consider when an individual has passed away.
                </p>
                <p class=" text-gray-700 text-base py-8">
                  Please click the image to view and download a pdf copy of the funeral guide.
                </p>
              </div>
              <div class="text-center">
                <ul class="flex flex-col lg:flex-row lg:flex-wrap ">
                  <li class=" p-3  w-full lg:w-1/2">
                    <h1 class="text-2xl font-semibold pb-6">North East Surrey Crematorium</h1>
                    <p class="text-gray-700 px-14">
                      Cemetery Lodge
                      Lower Morden Lane
                      Morden, Surrey
                      SM4 4NU
                      020 8337 4835 </p>

                  </li>
                  <li class=" p-3  w-full lg:w-1/2">
                    <h1 class="text-2xl font-semibold pb-6">Merton & Sutton Joint Cemetery</h1>
                    <p class="text-gray-700 px-14">
                      Cemetery Lodge
                      Garth Road
                      Morden, Surrey
                      SM4 4NL
                      020 8337 4420 - 020 8545 3666</p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-full lg:w-1/2">
              <div>
                <img class="p-4" src="https://image.tensorartassets.com/cdn-cgi/image/w=2560,f=jpeg,q=85/posts/images/677245454416731572/8c1f3160-7582-4829-8e63-af14cf62bedd.jpg" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="flex flex-col lg:flex-row lg:pt-24 items-center">
            <div class="w-full lg:w-1/4">
              <div><img src="@/assets/images/phone-call.jpg" alt="" class="p-8"></div>
            </div>
            <div class="w-full lg:w-2/4">
              <div class="justify-center">
                <h1 class="font-semibold text-4xl text-center ">Enquire About Our Funeral Services</h1>
                <p class="text-gray-500 py-8">Get in touch for your funeral arrangement needs on 020 3409 8054</p>
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

