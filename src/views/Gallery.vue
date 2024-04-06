<template>
  <AppLayout>
    <section class="common-section common-section__gallery bg-no-repeat bg-center bg-cover">
      <div class="overlay"></div>
      <h1> GALLERY </h1>
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
              <SwiperSlide><img src="https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2020/10/14/af_madrasah_141020.jpg?VersionId=moezbZBTTgpxkrsRCeMUi7xgvvwOvqJB" alt=" "></SwiperSlide>
              <SwiperSlide><img src="https://thescoop.co/wp-content/uploads/2020/06/IMG_1949-e1678661831918.jpg" alt=""></SwiperSlide>
              <SwiperSlide><img src="https://img.freepik.com/free-photo/free-photo-ramadan-kareem-eid-mubarak-royal-elegant-lamp-with-mosque-holy-gate-with-fireworks_1340-23597.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1711843200&semt=sph" alt=""></SwiperSlide>
              <SwiperSlide><img src="https://media.istockphoto.com/id/1475239283/photo/knowledge-is-power.jpg?s=612x612&w=0&k=20&c=xk8f8egx-fcsGbRysmbhBT9bymFIShNX9KPPv-OjGJY=" alt=""></SwiperSlide>
            </Swiper>
            <p class="py-12 text-gray-700 text-center"
               data-aos="zoom-out-left"
               data-aos-duration="800">
              Balham Mosque & Tooting Islamic Centre regularly hold talks and events to ensure the local Muslim and non-Muslim community benefit from the teachings of Islam.
              </p>
          </div>
          <div class="w-full lg:w-1/2 pt-16" >
            <div data-aos="zoom-out-right"
                 data-aos-duration="800">
              <div class=" ">
                <a class="flex items-center font-semibold"
                   href="/">
                  <img class="w-20 m-2" src="@/assets/images/logo-remove.png" alt="" >
                  <span class="lg:text-4xl text-primary lg:max-w-[350px] text-2xl" > Mosque & Madrasah Complex Events
                  </span>
                </a>
                <p class="text-gray-700 text-lg max-w-[400px] pl-24 pb-8">Glance through some of the events held at Balham Mosque & Tooting Islamic Centre.</p>
              </div>

              <h1 class="text-2xl font-semibold  text-center">Be Sure To Visit Our Events!</h1>
              <div><img src="@/assets/images/flower.png" alt="" class="w-16 h-16 m-5 mx-auto"></div>

              <div class="">
                <ul class="flex flex-wrap ">
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 m-0 p-0">
                      Weekly Talks
                    </p>
                  </li>
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 ">
                      Study Circles
                    </p>
                  </li>
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 ">
                      Fundraisers
                    </p>
                  </li>
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 m-0 p-0">
                      Visiting Scholars
                    </p>
                  </li><li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 m-0 p-0">
                      Community Engagement
                    </p>
                  </li><li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 m-0 p-0">
                      Mosque Open Days
                    </p>
                  </li>
                </ul>
                <button class="primary-button ml-8"
                        data-aos="zoom-out-left"
                        data-aos-duration="800"
                >VIEW UPCOMING EVENTS </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="flex flex-col lg:flex-row justify-center"
             data-aos="zoom-out-right"
             data-aos-duration="800">
          <div class="w-full lg:w-1/2 pb-20">
              <h1 class="font-semibold lg:text-4xl text-center text-2xl pt-20">Events Gallery</h1>
              <img src="@/assets/images/flower.png" alt="" class="w-20 h-20 m-5 mx-auto">
          </div>
        </div>

          <div class="flex flex-col lg:flex-row lg:flex-wrap gap-4 ">

            <div>
              <SimpleGallery galleryID="'myGallery'" :images="images" />
            </div>

<!--              <img class="w-56 h-72 " src="https://images.pexels.com/photos/9127773/pexels-photo-9127773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">-->
<!--              <img class="w-56 h-72 " src="https://img.freepik.com/premium-photo/interior-ottoman-time-style-mosque-with-people-istanbul_77684-16289.jpg?w=360" alt="">-->
<!--              <img class="w-56 h-72 " src="https://img.freepik.com/free-photo/people-celebrating-ramadan-together_23-2151404353.jpg?w=740" alt="">-->
<!--              <img class="w-56 h-72 " src="https://images.pexels.com/photos/7984486/pexels-photo-7984486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">-->
<!--              <img class="w-56 h-72 " src="https://images.pexels.com/photos/7984486/pexels-photo-7984486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">-->

<!--            <img class="w-56 h-72 " src="https://images.pexels.com/photos/9127773/pexels-photo-9127773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">-->
<!--              <img class="w-56 h-72 " src="https://img.freepik.com/premium-photo/interior-ottoman-time-style-mosque-with-people-istanbul_77684-16289.jpg?w=360" alt="">-->
<!--              <img class="w-56 h-72 " src="https://img.freepik.com/free-photo/people-celebrating-ramadan-together_23-2151404353.jpg?w=740" alt="">-->
<!--              <img class="w-56 h-72 " src="https://images.pexels.com/photos/7984486/pexels-photo-7984486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">-->
<!--              <img class="w-56 h-72 " src="https://images.pexels.com/photos/7984486/pexels-photo-7984486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">-->
        </div>
      </div>

      <div class="container">
        <div class="flex flex-col lg:flex-row pt-24 items-center"
             data-aos="zoom-out-left"
             data-aos-duration="800">

          <div class="w-full lg:w-1/4">
            <div><img src="@/assets/images/phone-call.jpg" alt="" class="p-8"></div>
          </div>
          <div class="w-full lg:w-2/4">
            <div class="justify-center">
              <h1 class="font-semibold text-4xl">Benefit From Our Events</h1>
              <p class="text-gray-500 py-8">Visit out home page and Instagram page to stay up to date with all of our latest events, talks and fundraisers.</p>
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

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SimpleGallery from "@/components/SimpleGallery.vue";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const modules = [Autoplay, Pagination, Navigation];

const images = [
  {
    largeURL: 'https://images.pexels.com/photos/9127773/pexels-photo-9127773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    thumbnailURL: 'https://images.pexels.com/photos/9127773/pexels-photo-9127773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    width: 56,
    height: 2500,
  },
  {
    largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
    thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
    width: 1669,
    height: 2500,
  },
  {
    largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
    thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
    width: 2500,
    height: 1666,
  },
];



</script>



