<template>
  <AppLayout>
      <section class="common-section common-section__about bg-no-repeat bg-center bg-cover">
        <div class="overlay"></div>
        <h1> ABOUT US </h1>
      </section>

    <section>
      <div class="container ">
        <div class="text-center flex justify-center">
          <img src="@/assets/images/flower.png" alt="" class="w-24 h-24 -mt-10 relative z-40 text-center">
        </div>
        <div class="flex flex-col lg:flex-row p-20">
          <div class="w-full lg:w-1/2">
              <h1 class="text-4xl font-semibold pb-8"
              data-aos="fade-up"
                  data-aos-duration="1000"
              >Our History</h1>
            <div class="text-left text-gray-700 "
                 data-aos="fade-down"
                 data-aos-duration="1000">
              <p class="pb-8">Below is a brief history of how Baitul Atik jame Masjid & Madrasah Complex were established and how, by the grace of Allah (SWT), we have developed to offer Islamic, educational and social services to the Muslims of Bangladesh, including the wider community.</p>
              <p class="pb-8">It doesn’t stop here. In sha Allah we will continue to expand as the needs grow to provide more for our community.</p>
              <p class="pb-8">We pray that Allah (SWT) accepts all our humble efforts and enables us to fulfil our objectives for the community. We kindly request your prayers and support in this endeavour.</p>
            </div>

          </div>
          <div class="w-full lg:w-1/2">
            <div>

            </div>
          </div>
         </div>
      </div>
    </section>

    <section class="bg-slate-900 py-12">
      <div class="container">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:w-1/2 ">
            <h1 class="font-medium text-xl lg:text-left text-white text-center px-8 py-8">Number Of People Benefitting Daily Alhamdulillah!</h1>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="text-center">
               <span class="font-medium text-6xl text-white px-5 py-5">
                  100+
                </span>
              <p class="font-medium text-xl text-white px-5 py-5">Nursery Students</p>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="text-center">
               <span class="font-medium text-6xl text-white px-5 py-5">
                  420+
                </span>
              <p class="font-medium text-xl text-white px-5 py-5">Primary Students</p>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="text-center">
               <span class="font-medium text-6xl text-white px-5 py-5">
                  2,000+
                </span>
              <p class="font-medium text-xl text-white px-5 py-5">Musallis Each Friday</p>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section>
      <div class="container lg:p-40">
            <div class="flex flex-col lg:flex-row">
              <div class="w-full lg:w-1/2 pr-5 pt-5">
                  <div class="bg-primary p-10 rounded-2xl"
                       data-aos="flip-left"
                  data-aos-duration="1500">
                    <h2 class="font-medium text-xl text-gray-700 pb-5">1969</h2>
                    <p class="text-gray-700 ">Ibadat khana (Makeshift place of worship) was established at a house in Tooting, SW17 with limited facilities for Madhresa by local Muslims.</p>
                  </div>
              </div>
              <div class="w-1/2">

              </div>
            </div>

            <div class="flex flex-col lg:flex-row pt-10">
              <div class="w-full lg:w-1/2">
              </div>

                <div class="w-full lg:w-1/2 lg:pl-5">
                  <div class="bg-primary p-10 rounded-2xl"
                       data-aos="flip-right"
                       data-aos-duration="1500">
                    <h2 class="font-medium text-xl text-gray-700 pb-5">1997</h2>
                    <p class="text-gray-700 ">15 Laitwood Road was purchased,Prayer facilities were moved over and a small Madhresa, teaching Islamic studies was established.</p>
                  </div>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row pt-10">
              <div class="w-full lg:w-1/2 pr-5">
                <div class="bg-primary p-10 rounded-2xl"
                     data-aos="flip-left"
                     data-aos-duration="1500">
                  <h2 class="font-medium text-xl text-gray-700 pb-5">1983</h2>
                  <p class="text-gray-700 ">Freehold property 47-51 Balham High Road, SW12 was purchased and converted to a Mosque. The facilities include Madhresawith capacity for 250 children, 5 times salaah and funeral arrangements. A Primary School, which follows the National Curriculum, with Islamic ethos was opened.</p>
                </div>
              </div>
              <div class="w-full lg:w-1/2">

              </div>
            </div>

            <div class="flex flex-col lg:flex-row pt-10">
              <div class="w-1/2">
              </div>

              <div class="w-full lg:w-1/2 lg:pl-5">
                <div class="bg-primary p-10 rounded-2xl"
                     data-aos="flip-right"
                     data-aos-duration="1500">
                  <h2 class="font-medium text-xl text-gray-700 pb-5">1993</h2>
                  <p class="text-gray-700 ">A 999 year lease of 145-147 Upper Tooting Road, SW17 was acquired, which was formally Mayfair Cinema. This was named Tooting Islamic Centre. The conversion from cinema to place of worship increased facilities to accommodate 1,000 musallis (Worshippers)and alleviated the inconvenience for musallis,having to travelfrom Tooting to Balham.Shortly after, the Primary School moved to Tooting Islamic Centre and a Secondary School for boys and girls was also established.</p>
                </div>
              </div>
            </div>

      </div>
    </section>
<section>
  <div class="container">
    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2 lg:p-20 pt-10"
           data-aos="fade-up"
           data-aos-anchor-placement="top-center"
           data-aos-duration="1000">
        <Swiper
            :spaceBetween="40"
            :centeredSlides="true"
            :autoplay="{
               delay: 7000,
                disableOnInteraction: false,
            }"
            :pagination="{
                clickable: true,
              }"

            :modules="modules"
            class="mySwiper"
        >
          <SwiperSlide><img src="https://images.pexels.com/photos/206066/pexels-photo-206066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=" "></SwiperSlide>
          <SwiperSlide><img src="https://images.pexels.com/photos/11945531/pexels-photo-11945531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></SwiperSlide>
          <SwiperSlide><img src="https://images.pexels.com/photos/337901/pexels-photo-337901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></SwiperSlide>
          <SwiperSlide><img src="https://images.pexels.com/photos/2900791/pexels-photo-2900791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></SwiperSlide>
        </Swiper>
        <p class="py-12 text-gray-700 text-center"
           data-aos="fade-down"
           data-aos-duration="1000">
          A makeshift place of worship has over the years flourished into two mosques, an educational trust, acquisition of playing fields and more to come Insha'Allah, all by the grace of Allah.</p>
        <div>
          <a class="flex flex-col lg:flex-row items-center font-semibold"
             data-aos="fade-up"
             data-aos-anchor-placement="bottom-bottom"
             data-aos-duration="1500"
             href="/">
            <img class="w-20 m-2" src="@/assets/images/logo-remove.png" alt="" >
            <span class="text-lg text-primary text-center" >Baitul Atik Jame Masjid
                        & Madrasah Complex
                  </span>
          </a>
        </div>
      </div>
      <div class="w-full lg:w-1/2 pt-20">
        <div>
          <h1 class="text-2xl font-semibold  text-center"
              data-aos="fade-up"
              data-aos-duration="1000">
            From Our Humble Beginnings To Now!</h1>
          <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500">
            <img src="@/assets/images/flower.png" alt="" class="w-16 h-16 m-5 mx-auto"></div>

          <div data-aos="fade-up"
               data-aos-duration="1000">

            <ul class="flex flex-col lg:flex-row lg:flex-wrap ">
              <li class="flex p-3 items-center w-full lg:w-1/2">
                <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                <p class="text-gray-700 m-0 p-0">
                  Provision of Nursery education for up to 100 children at 10 Gatton Road, SW17. </p>
              </li>
              <li class="flex p-3 items-center w-full lg:w-1/2">
                <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                <p class="text-gray-700 ">
                  Purpose built school VA status (Gatton Primary School) - two form entry for 420 students.
                </p>
              </li>
              <li class="flex p-3 items-center w-full lg:w-1/2">
                <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                <p class="text-gray-700 ">
                  80 children from Gatton Primary School, who recently achieved outstanding recognition for their work in community cohesion from Ofsted
                </p>
              </li>
              <li class="flex p-3 items-center w-full lg:w-1/2">
                <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                <p class="text-gray-700 m-0 p-0">
                  Orchard Primary School, SW16. It was also recently awarded VA status.
                </p>
              </li>
              <li class="flex p-3 items-center w-full lg:w-1/2">
                <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                <p class="text-gray-700 ">
                  Gatton Primary School has been extended at Balham Mosque premises to accommodate overflow of students from Gatton Road.
                </p>
              </li>
            </ul>
              <button class="primary-button ml-8 "
                      data-aos="fade-down"
                      data-aos-duration="1000">AL-RISALAH TRUST</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

  </AppLayout>
</template>

<script setup>
import AppLayout from "@/components/AppLayout.vue"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const modules = [ Autoplay, Pagination, Navigation];



</script>

