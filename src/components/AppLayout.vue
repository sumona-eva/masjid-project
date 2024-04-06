<template>

  <nav class="bg-gradient-to-r from-orange-300 text-white text-xl p-5 font-semibold top-0 right-0 bottom-0 w-80 h-screen z-50 lg:hidden">
    <ul>
      <li class=" py-2">

        <a href="/" class="flex" ><img src="@/assets/images/logo-remove.png" alt="" class="w-14 mr-3">
          <span class="text-base text-primary max-w-[200px]" >Baitul Atik Jame Masjid
                        & Madrasah Complex
                  </span>
        </a>
        <button><svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cancel</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="work-case" fill="#000000" transform="translate(91.520000, 91.520000)"> <polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"> </polygon> </g> </g> </g></svg></button>
      </li>
      <li class=" py-2">
        <a href="/">Home</a>
      </li>
      <li class=" py-2">
        <a href="/about">About</a>
      </li>
      <li class=" py-2">
        <a href="/madrasah">Madrasah</a>
      </li>
      <li class=" py-2">
        <a href="/funeral">Funeral Services</a>
      </li>
      <li class=" py-2">
        <a href="/nikah">Nikah Services</a>
      </li>
      <li class=" py-2">
        <a href="/visit-mosque">Visit Out Mosque</a>
      </li>
      <li class=" py-2">
        <a href="/gallery">Gallery</a>
      </li>
      <li class=" py-2">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
   <nav class="fixed top-0 left-0 w-full z-40 bg-transparent transition-all duration-500 ease-in-out hidden lg:block" :class="{'scrolled': isScrolled }">
        <div class="container flex justify-between items-center">
            <div>
              <a class="flex items-center font-semibold"

                  href="/"><img class="w-20 m-2"
                               src="@/assets/images/logo-remove.png" alt="" >
              <span class="text-lg text-white max-w-[200px]">Baitul Atik Jame Masjid
                  & Madrasah Complex
              </span></a>
            </div>
            <div class="">
                <ul class="flex justify-items-center gap-8 text-base font-semibold text-white">
                  <li><RouterLink to="/about" class="nav-style">About</RouterLink></li>
                  <li><RouterLink to="/madrasah" class="nav-style">Madrasah</RouterLink></li>
                  <li><RouterLink to="/funeral" class="nav-style">Funeral Services</RouterLink></li>
                  <li><RouterLink to="/nikah" class="nav-style">Nikah Service</RouterLink></li>
                  <li><RouterLink to="/visit-mosque" class="nav-style">Visit Our Mosque</RouterLink></li>
                  <li><RouterLink to="/gallery" class="nav-style">Gallery</RouterLink></li>
                  <li class="pr-10"><RouterLink to="/contact" class="nav-style">Contact</RouterLink></li>
                </ul>
            </div>

        </div>
   </nav>
   <slot />

  <footer>

    <div class="footer-style">
          <div class="container">
            <div class="flex flex-col lg:flex-row">
              <div class="w-full lg:w-1/3">
                <a class="flex items-center font-semibold"
                   data-aos="fade-up"
                   data-aos-anchor-placement="bottom-bottom"
                   data-aos-duration="1500"
                   href="/">
                  <img class="w-20 m-2" src="@/assets/images/logo-remove.png" alt="" >
                  <span class="text-lg text-primary max-w-[200px]" >Baitul Atik Jame Masjid
                        & Madrasah Complex
                  </span>
                </a>

                <h3 class="text-gray-400 font-bold px-10 py-10">Registered Charity Number: 271538</h3>

              </div>

              <div class="w-full lg:w-1/3">
                  <p class="text-white text-2xl font-semibold py-5">Menu</p>

                <div class="">
                  <ul class="text-base font-semibold text-primary leading-10">
                    <li><RouterLink to="/about" class=" mr-5 hover:bg-primary hover:text-white duration-700 block">About</RouterLink></li>
                    <li><RouterLink to="/madrasah" class="mr-5 hover:bg-primary hover:text-white duration-700 block">Madrasah</RouterLink></li>
                    <li><RouterLink to="/funeral" class="mr-5 hover:bg-primary hover:text-white duration-700 block">Funeral Services</RouterLink></li>
                    <li><RouterLink to="/nikah" class="mr-5 hover:bg-primary hover:text-white duration-700 block">Nikah Service</RouterLink></li>
                    <li><RouterLink to="/visit-mosque" class=" mr-5 hover:bg-primary hover:text-white duration-700 block">Visit Our Mosque</RouterLink></li>
                    <li><RouterLink to="/gallery" class=" mr-5 hover:bg-primary hover:text-white duration-700 block">Gallery</RouterLink></li>
                    <li><RouterLink to="/contact" class="mr-5 hover:bg-primary hover:text-white duration-700 block">Contact</RouterLink></li>
                  </ul>
                </div>

              </div>
              <div class="w-full lg:w-1/3 ">

                <div class="py-4 text-3xl pt-10">
                  <ul class="mb-3 flex items-center justify-center gap-8 p-0 text-primary">
                    <li><a href="#"><i class="fa-brands fa-facebook  hover:text-white duration-700" data-aos="fade-up" data-aos-duration="1000"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-youtube  hover:text-white duration-700" data-aos="fade-down" data-aos-duration="1000"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-square-instagram  hover:text-white duration-700" data-aos="fade-up" data-aos-duration="1000"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-google-plus  hover:text-white duration-700" data-aos="fade-down" data-aos-duration="1000"></i></a></li>
                  </ul>

                </div>

                <div class="pt-14 ">
                  <div class="text-gray-400"
                       data-aos="fade-right"
                  data-aos-duration="1500">
                    <p>
                      <b >Address</b> <br/>
                      Tower Alamgir , House 11/B,Block NW(F),<br>
                      Gulshan 2, Dhaka-1212
                    </p>
                  </div>
                  <div class="text-gray-400 pt-5"
                       data-aos="fade-left"
                       data-aos-duration="1500">
                    <p>
                      <b> Phone </b> <br/>
                      + 88 0198455775 <br/>
                      + 88 0198455775
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
    </div>
    <section class="bg-gray-800 border-t-2 border-gray-600 ">
      <div class="container py-2 pt-3 justify-between flex flex-col lg:flex-row">

        <p class="text-white items-center"> &copy; 2024 Baitul Atik Jame Masjid. All Rights Reserved. </p>

        <p class="text-white items-center"><a class="text-white "  target="_blank" href="https://creativetechpark.com/">Web Development Company </a> Creative Tech Park </p>

      </div>
    </section>
  </footer>

</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue'
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
   .scrolled{
     background: rgba(0,0,0, 0.7);

     transition: all 0.8s ease;
   }
</style>