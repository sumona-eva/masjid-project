<script setup>
   import AppLayout from "@/components/AppLayout.vue"
</script>

<template>
   <AppLayout>

    <section class="hero-section
                    bg-no-repeat
                    bg-left-bottom
                    bg-cover " >
      <div class="overlay">

      </div>

      <div class="container main-text">
          <div class="flex flex-col lg:flex-row">
              <div class="w-1/2">
              </div>

              <div class="w-full lg:w-1/2">
                <p  class="text-xl font-semibold  pb-7"
                    data-aos="fade-up"
                    data-aos-duration="1300">

                  Serving The Community Since 1974 </p>

                <h1 class="text-6xl font-semibold mb-9"
                    data-aos="fade-right"
                    data-aos-duration="1700">

                  Masjid & <br> Educational Centre</h1>

                <h4 class="pt-7"
                    data-aos="fade-left"
                    data-aos-duration="2000">
                  Providers of islamic, educational and social services to the Muslim <br>
                  community and a place for the wider community to learn about Islam. </h4>
                 <button class="primary-button" data-aos="zoom-in-up" data-aos-duration="2000"> SERVICES </button>

              </div>
          </div>
      </div>

    </section>

     <section class="marquee-section">
       <div class="container">
         <marquee behavior="scroll" direction="left" class="py-5 text-lg text-gray-700"  >
            <b>Ramadan 2024:</b>
           Having been the 29th of Shabaan tonight, following a meeting to determine positive sighting of the hilal, as per our criteria, Baitul Atik Jame Masjid & Madrasah Complex will observe
           <b>The first day of Ramadan on Tuesday, 12th March.</b>
           Isha is at 8:15pm at both centres.

           Wishing all a fulfilling month of blessings and barakah, Insahllah.

         </marquee>
       </div>
     </section>

     <section class="namaj-time-section bg-no-repeat bg-left bg-cover bg-scroll bg-transparent">
       <div class="overlay"></div>
       <div class="container z-10 relative">
         <div class="flex flex-wrap pt-10 lg:justify-between ">

           <div class="w-1/2 lg:w-1/6 lg:px-5 pb-5"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
             <div class="bg-white p-12 text-center leading-9 px-5 w-full rounded" >
               <div class="text-center pb-5">
                 <i class="fa-solid fa-clock text-primary text-2xl"></i><br>
               </div>

               <h3 class="text-3xl text-primary font-semibold"> Fajr </h3>
               <p class="text-primary text-xl">Begins</p>
               4:39 AM
               <p class="text-primary text-xl pt-8">Jamat </p>
               5:00 AM
             </div>
           </div>

           <div class="w-1/2 lg:w-1/6 lg:px-5 pb-5"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">

             <div class="bg-white p-12 text-center leading-9 px-5 w-full rounded">
               <div class="text-center pb-5">
                 <i class="fa-solid fa-clock text-primary text-2xl"></i><br>
               </div>

               <h3 class="text-3xl text-primary font-semibold">Zuhr </h3>
               <p class="text-primary text-xl">Begins</p>
               1:10 PM
               <p class="text-primary text-xl pt-8">Jamat </p>
               1:30 AM
             </div>
           </div>

           <div class="w-1/2 lg:w-1/6 lg:px-5 pb-5"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">

             <div class="bg-white p-12 text-center leading-9 px-5 w-full rounded">
               <div class="text-center pb-5">
                 <i class="fa-solid fa-clock text-primary text-2xl"></i><br>
               </div>

               <h3 class="text-3xl text-primary font-semibold"> Asr </h3>
               <p class="text-primary text-xl">Begins</p>
               5:31 PM
               <p class="text-primary text-xl pt-8">Jamat </p>
               6:30 PM
             </div>
           </div>

           <div class="w-1/2 lg:w-1/6 lg:px-5 pb-5"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">

             <div class="bg-white p-12 text-center leading-9 px-5 w-full rounded">
               <div class="text-center pb-5">
                 <i class="fa-solid fa-clock text-primary text-2xl"></i><br>
               </div>

               <h3 class="text-3xl text-primary font-semibold"> Magrib </h3>
               <p class="text-primary text-xl">Begins</p>
               7:36 PM
               <p class="text-primary text-xl pt-8">Jamat </p>
               7:36 PM
             </div>
           </div>

           <div class="w-1/2 lg:w-1/6 lg:px-5 pb-5"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">

             <div class="bg-white p-12 text-center leading-9 px-5 w-full rounded">
               <div class="text-center pb-5">
                 <i class="fa-solid fa-clock text-primary text-2xl"></i><br>
               </div>

               <h3 class="text-3xl text-primary font-semibold"> Esha </h3>
               <p class="text-primary text-xl">Begins</p>
               9:08 PM
               <p class="text-primary text-xl pt-8">Jamat </p>
               9:30 PM
             </div>
           </div>

           <div class="w-1/2 lg:w-1/6 lg:px-5 pb-5"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">

             <div class="bg-white p-12 text-center leading-9 px-5 w-full rounded">
               <div class="text-center pb-5">
                 <i class="fa-solid fa-clock text-primary text-2xl"></i><br>
               </div>

               <h3 class="text-3xl text-primary font-semibold"> Jumu'ah </h3>
               <p class="text-primary text-xl">Talk</p>
               12:30 PM
               <p class="text-primary text-xl pt-8">Khutbah </p>
               1:00 PM
             </div>
           </div>
         </div>

         <div class="flex flex-col lg:flex-row lg:p-10 pb-3 justify-center"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000">
           <div class="w-full lg:w-1/3 ">
             <div class="bg-white p-7 text-center w-full rounded">
               <p class="font-medium">21 Ramadan 1445</p>
               <button class="primary-button"> VIEW/DOWNLOAD PRAYER TIMETABLE </button>
             </div>
           </div>
         </div>
       </div>

     </section>

     <section class="service-section flex flex-col py-14 gap-20">
       <div class="flex flex-col lg:flex-row justify-center">
         <div class="w-full lg:w-1/3">
            <div class="text-center py-16">
                <h1 class="text-4xl font-semibold"
                    data-aos="zoom-in-down"
                    data-aos-duration="1800"> Our Services </h1>

              <img src="@/assets/images/flower.png" alt="" class="w-20 h-20 mx-auto my-5"
                   data-aos="fade-up"
                   data-aos-easing="linear"
                   data-aos-duration="1500">
            </div>
         </div>
       </div>

       <div class="container bg-white shadow-lg">
         <div class="flex flex-col lg:flex-row p-6 gap-10">
           <div class="w-full lg:w-1/3">
             <div class="p-10">
               <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                 <h1 class="text-3xl font-semibold text-center pb-3" >Prayer Facilities</h1>
                 <p class="text-center ">Baitul Atik Jame Masjid And Madrasah Complex offer prayer and wadhu facilities that can cater for over 1,000 men, women and children.</p>
               </div>

               <img src="@/assets/images/sajdha.png" alt="" class="pt-5 w-60 h-44 mx-auto rounded"
                    data-aos="fade-up"
                    data-aos-duration="1500">
             </div>
           </div>

           <div class="w-full lg:w-1/3">
             <div class="p-10">
               <div data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500">

                 <h1 class="text-3xl font-semibold text-center pb-3" >Madrasah</h1>
                 <p class="text-center ">Baitul Atik Jame Masjid And Madrasah Complex both offer Islamic classes for children aged 5-15, Monday - Friday, 5pm - 7pm.</p>
               </div>

               <img src="@/assets/images/madrasah.png" alt="" class="pt-5 w-60 h-44 mx-auto rounded"
                    data-aos="fade-left"
                    data-aos-duration="1500">
             </div>
           </div>

           <div class="w-full lg:w-1/3">
             <div class="p-10">
               <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">

                 <h1 class="text-3xl font-semibold text-center pb-3" >Nikah</h1>
                 <p class="text-center ">Both mosques offer provisions for official Nikkah (Islamic Marriage) ceremonies and certification.</p>
               </div>

               <img src="@/assets/images/nikah.jpg" alt="" class="pt-10 w-60 h-48 mx-auto rounded"
                    data-aos="fade-up"
                    data-aos-duration="1500">
             </div>
           </div>
         </div>
       </div>

       <div class="container bg-white shadow-lg">
         <div class="flex flex-col lg:flex-row p-6 gap-10">
           <div class="w-full lg:w-1/3">
             <div class="p-10">
               <div data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500">

                 <h1 class="text-3xl font-semibold text-center pb-3" >Funeral</h1>
                 <p class="text-center ">We provide a fully comprehensive funeral service which covers everything from the moment of death to the burial</p>
               </div>

               <img src="@/assets/images/funeral.png" alt="" class="pt-10 "
                    data-aos="fade-left"
                    data-aos-duration="1500">
             </div>
           </div>

           <div class="w-full lg:w-1/3">
             <div class="p-10">
               <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                 <h1 class="text-3xl font-semibold text-center pb-3" >Talks & Events</h1>
                 <p class="text-center ">Weekly talks, circles and events held at both mosques to help the community develop their knowledge and love for the religion.</p>
               </div>

               <img src="@/assets/images/event.png" alt="" class=" w-48 h-48 mx-auto "
                    data-aos="fade-up"
                    data-aos-duration="1500">
             </div>
           </div>

           <div class="w-full lg:w-1/3">
             <div class="p-10">
               <div data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                 <h1 class="text-3xl font-semibold text-center pb-3" >Outreach</h1>
                 <p class="text-center ">In order to benefit the community we work with local, national and international organisations, charities and authorities to help bring positive changes.</p>
               </div>

               <img src="@/assets/images/charities.png" alt="" class="pt-5 w-44 h-48 mx-auto "
                    data-aos="fade-left"
                    data-aos-duration="1500">
             </div>
           </div>
         </div>
       </div>

     </section>

     <section class="meet-imam-section py-28">

       <div class="container ">

         <div class="flex flex-col lg:flex-row pb-20">
           <div class="w-full lg:w-1/2 pl-5 mx-auto">
             <h1 class="font-semibold text-center text-4xl py-5"
                 data-aos="fade-down"
                 data-aos-anchor-placement="top-bottom"
                 data-aos-duration="1500">

               Meet The Imams</h1>
             <p class="text-center text-gray-500"
                data-aos="fade-up"
             data-aos-duration="2000">

               Our Imams are the backbone of the Masjid and community and not only are they responsible for leading the salah they are responsible for; running the Madrassah, day to day running of the mosque, engaging with the community, providing emotional and moral support, research, outreach activities and delivering talks and lectures.</p>
           </div>
         </div>

         <div class="flex flex-col lg:flex-row justify-center">
           <div class="w-full lg:w-1/5">
             <div class="p-10" data-aos="flip-down" data-aos-duration="2000">
               <img src="@/assets/images/imam1.jpeg" alt="" class="rounded-full w-16 h-16 mx-auto shadow-lg">
               <h2 class="text-primary font-semibold text-xl text-center p-8">Imam Munawwar Surti</h2>
               <p class="text-gray-700 text-center">Graduate in Islamic Theology from Jamia Hussainiya, Rander, India</p>
             </div>
           </div>

           <div class="w-full lg:w-1/5">
             <div class="p-10" data-aos="flip-up" data-aos-duration="2000">
               <img src="@/assets/images/imam2.png" alt="" class="rounded-full w-16 h-16 mx-auto shadow-lg">
               <h2 class="text-primary font-semibold text-xl text-center p-8">Imam Hamzah Patel</h2>
               <p class="text-gray-700 text-center">Graduate in Islamic Theology from Darul Uloom London</p>
             </div>
           </div>

           <div class="w-full lg:w-1/5">
             <div class="p-10" data-aos="flip-down" data-aos-duration="2000">
               <img src="@/assets/images/imam3.jpeg" alt="" class="rounded-full w-16 h-16 mx-auto shadow-lg">
               <h2 class="text-primary font-semibold text-xl text-center p-8">Imam Khubaeb Raja</h2>
               <p class="text-gray-700 text-center">Graduate in Islamic theology from Madinatul Uloom Al Islamiya, Kidderminster</p>
             </div>
           </div>

           <div class="w-full lg:w-1/5">
             <div class="p-10" data-aos="flip-up" data-aos-duration="2000">
               <img src="@/assets/images/imam4.jpg" alt="" class="rounded-full w-16 h-16 mx-auto shadow-lg">
               <h2 class="text-primary font-semibold text-xl text-center p-8">Imam Abdul-Kader Suleman</h2>
               <p class="text-gray-700 text-center">Graduate in Islamic theology from Darul Uloom Zakariyya</p>
             </div>
           </div>
         </div>
       </div>

     </section>

     <section class="ask-imam-section bg-black py-12">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:w-1/2">
              <h1 class="font-semibold text-center text-4xl py-5 text-white"
                  data-aos="zoom-in"
              data-aos-duration="1500">Ask The Imam !</h1>
          </div>

          <div class="w-full lg:w-1/2">
            <div class="text-center" data-aos="zoom-in-up"
                 data-aos-duration="1500">
              <button class="primary-button"> <i class="fa-brands fa-whatsapp p-2"></i> WHATSAPP YOUR QUERIES </button>
            </div>
          </div>
        </div>
     </section>

     <section>
       <div class="flex flex-col lg:flex-rowpb-32">
         <div class="w-full lg:w-1/2 mx-auto">
           <div>
             <div class="text-primary text-center text-4xl pt-40 "
                  data-aos="fade-up"
                  data-aos-duration="1700">
               <i class="fa-solid fa-quote-left"></i></div>

             <p class="text-xl font-medium pt-12 text-center text-gray-700"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500">
               By the grace of Allah (SWT) and the support of the community Baitul Atik Masjid And Madrasah Complex  have developed to offer Islamic, educational and social
               services to the Muslims of Bangladesh, and the wider community.</p>

             <div  class="w-24 mx-auto m-10"
                   data-aos="fade-up"
                   data-aos-duration="1700">

               <img src="@/assets/images/logo-remove.png" alt=""></div>
             <h2 class="font-medium text-center text-xl"

                 data-aos="fade-left"
                 data-aos-easing="ease-in-sine"
                 data-aos-duration="1500">Baitul Atik Masjid And Madrasah Complex</h2>
             <p class="text-center"
                data-aos="fade-up"
                data-aos-duration="1500">COMMITTEE</p>
           </div>
         </div>
       </div>
     </section>


    </AppLayout>
</template>
