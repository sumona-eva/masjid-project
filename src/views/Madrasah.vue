<template>
  <AppLayout>
    <section class="common-section common-section__madrasah bg-no-repeat bg-center bg-cover">
      <div class="overlay"></div>
      <h1> MADRASAH </h1>
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
              Both Baitul Masjid
              & Madrasah Complex Islamic Centre provide evening Islamic classes for children. Our aim is to provide children with a comprehensive Islamic education, which will complement and enhance their secular education.
            </p>

          </div>
          <div class="w-full lg:w-1/2 lg:pt-16" >
            <div>
              <div class="">
                <a class="flex items-center font-semibold"
                   href="/">
                  <img class="w-20 m-2" src="@/assets/images/logo-remove.png" alt="" >
                  <span class="text-2xl text-primary max-w-[270px]" >Baitul Masjid
                        & Madrasah Complex
                  </span>
                </a>
                <p class="text-gray-700 text-lg max-w-[400px] pl-24 pb-8">Madrasah Classes (Arabic and Islamic knowledge) are offered at both Baitul Masjid
                  & Madrasah Complex Islamic Centre.</p>
              </div>

              <h1 class="text-2xl font-semibold text-center">Key Information About Our Madrasah Services!</h1>
              <div><img src="@/assets/images/flower.png" alt="" class="w-16 h-16 m-5 mx-auto"></div>

              <div class="">
                <ul class="flex flex-col lg:flex-wrap lg:flex-row ">
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 m-0 p-0">
                      Based in Balham Mosque & Tooting Islamic Centre</p>
                  </li>
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 ">
                      For children aged 5 - 15 years old</p>
                  </li>
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 ">
                      Madrasah runs from Monday - Friday
                    </p>
                  </li>
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 m-0 p-0">
                      Madrasah hours are 5pm - 7pm</p>
                  </li>
                  <li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 ">
                      Annual Fee: tk-300
                    </p>
                  </li><li class="flex p-2 items-center w-full lg:w-1/2">
                    <i class="fa-regular fa-circle-check text-xl text-primary px-2"></i>
                    <p class="text-gray-700 ">
                      Madrasah office hours: Mon - Fri, 5pm - 7pm
                    </p>
                  </li>
                </ul>
                <button class="primary-button ml-8">DOWNLOAD APPLICATION FORM</button>
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

            <h1 class="text-4xl font-semibold pl-8 pt-10">Curriculum</h1>
         <div class="p-8">
            <p class=" text-gray-700 text-base">Baitul Masjid & Madrasah provides Muslim children with extensive Islamic education in order for them to apply, further their understanding and share this knowledge with the wider community. We teach the recitation of the Holy Qur’an, Surahs (Chapters of the Qur'an), Dua’s (Supplications), Seeratun Nabee (The Life of the Holy Prophet Muhammad (pbuh)), Fiqhul Islam (Elementary level of Cleanliness, Prayer, etc), Islamic History, Tajweed (Method of recitation of the Holy Qur'an), Hifz (Memorisation of the Holy Qur'an) and A’alim Classes.
            </p>
            <p class=" text-gray-700 text-base py-8">
              There are also several events that are held within the Madrasah in order for children to be able to share what they have learnt such as Mosque assemblies; in which children get to perform recitations, storytelling, poetry and plays. We have an Annual Fundraising event that gives students a fantastic opportunity interact with their family and friends and the local community as a whole.
            </p>
          </div>
       </div>
       <div class="w-full lg:w-1/2">
          <div>
            <img class="lg:p-16" src="https://img.freepik.com/free-photo/set-interesting-books-library_23-2147767229.jpg?t=st=1712124995~exp=1712128595~hmac=3ef5f1b26d8309c5c64ec861363f97fb1aedcc6f6851a17a35b8e94cf20ae418&w=740" alt="">
          </div>
       </div>
     </div>
   </div>

   <div class="container">
     <div class="flex flex-col lg:flex-row pt-10">
       <div class="w-full lg:w-1/2">
         <div>
           <img class="lg:p-16 order-last lg:order-none" src="https://media.istockphoto.com/id/1381986611/photo/the-word-fees-levitates-on-yellow-background.jpg?s=612x612&w=0&k=20&c=LPy5Lb1q8C3zFdnrXlvXpKt78t9_gxdJalx6OcackQo=" alt="">
         </div>
       </div>
       <div class="w-full lg:w-1/2 lg:pt-20 order-first lg:order-none">

         <h1 class="text-4xl font-semibold pl-8">Fees</h1>
         <div class="p-8 ">
           <p class=" text-gray-700 text-base">There are three terms in each academic year with a charge of £100 per term. No discounts are provided so the total amount for each child per year is £300. The payment schedule works out as follows:
           </p>
           <p class=" text-gray-700 text-base py-8">
             <ul>
               <li>January - March = £100</li>
               <li>April - July = £100</li>
               <li> September - December = £100</li>
               <li>Total = £300</li>
             </ul>
           </p>
         </div>
       </div>

     </div>
   </div>

   <div class="container">
     <div class="flex flex-col lg:flex-row lg:pt-10 items-center">

       <div class="w-full lg:w-1/2 pt-10">

         <h1 class="text-4xl font-semibold pl-8">Admission</h1>
           <div class="p-8">
             <p class=" text-gray-700 text-base">
               There is a great demand of students at Balham Mosque and we have annual waiting lists for various classes, please enquire with the Madrasah office for more details. There is no admission for students that are below the age of four. This is so that they can start when they are more mentally and physically able to focus in class for a whole session of two hours.             </p>
             <p class=" text-gray-700 text-base py-8">
               Hifz Class (Memorisation of the Qur'an) Information, To acquire the courage to do Hifz of the Qur’an is a very big achievement in itself but in order to obtain this, one must understand fully that self preparation and motivation is essential. Students must be prepared be disciplined and put in regular time of their own outside Madrasah on a daily basis to maintain their practice. Currently the Mosque only offers a Hifz class provision for boys. For more information on Hifz class places please contact the Madrasa office.
             </p>
             <p class=" text-gray-700 text-base py-8">
               Examinations and Results Students are examined twice every year and have to undertake a mixture of oral and written tests. External examiners are invited in at the end of year to test students on their oral examinations and grade them on the basis of their Tajweed and Qur’an recitation itself. This determines whether or not they may progress to the next class.
             </p>
           </div>
       </div>

       <div class="w-full lg:w-1/2">
         <div>
           <img class="lg:p-16" src="https://i.ytimg.com/vi/NAh0COov9fQ/maxresdefault.jpg" alt="">
         </div>
       </div>

     </div>
   </div>
 </section>

    <section class="principles-section pt-28">

      <div class="container ">

        <div class="flex flex-col lg:flex-row pb-20">
          <div class="w-full lg:w-1/2 mx-auto">
            <h1 class="font-semibold text-center text-4xl py-5"
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500">

              Madrasah Principles</h1>
            <p class="text-center text-gray-500"
               data-aos="fade-up"
               data-aos-duration="2000">

              The principles of both Madrasahs have graduated from formal Islamic educational institutions in the UK and bring along their wealth of knowledge and experience in running the Madrasahs.
            </p>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row justify-center">

          <div class="w-full lg:w-1/3">
            <div class="lg:p-10" data-aos="flip-up" data-aos-duration="2000">
              <img src="@/assets/images/imam2.png" alt="" class="rounded-full w-40 h-40 mx-auto shadow-lg">
              <h2 class="text-primary font-semibold text-xl text-center p-8">Imam Hamzah Patel</h2>
              <p class="text-gray-700 text-center">Graduate in Islamic Theology from Darul Uloom London</p>
            </div>
          </div>

          <div class="w-full lg:w-1/3">
            <div class="p-10" data-aos="flip-up" data-aos-duration="2000">
              <img src="@/assets/images/imam4.jpg" alt="" class="rounded-full w-40 h-40 mx-auto shadow-lg">
              <h2 class="text-primary font-semibold text-xl text-center p-8">Imam Abdul-Kader Suleman</h2>
              <p class="text-gray-700 text-center">Graduate in Islamic theology from Darul Uloom Zakariyya</p>
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
              <h1 class="font-semibold text-4xl text-center">Enquire About The Madrasah</h1>
              <p class="text-gray-500 py-8">Get in touch to learn more about our Madrasah and admissions process. Email admin@balhammosque.org or call 020 3409 8054</p>
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

