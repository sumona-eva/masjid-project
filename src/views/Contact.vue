<template>
  <AppLayout>
    <section class="common-section common-section__contact bg-no-repeat bg-center bg-cover">
      <div class="overlay"></div>
      <h1> CONTACT US  </h1>
    </section>
    <section>
      <div class="container">
        <div class="relative bg-white -mt-16 rounded-2xl">
          <div class="text-center flex justify-center">
            <img src="@/assets/images/flower.png" alt="" class="w-24 h-24 -mt-10 relative z-40 text-center">
          </div>

          <div class="container">
            <div class="flex flex-col lg:flex-row gap-5 mx-14 my-14 ">
                <div class="w-full lg:w-1/4">
                  <ul class="leading-10 border border-amber-500 text-center lg:p-10 p-5 rounded-2xl h-full flex flex-col items-center justify-center" >
                    <li><i class="fa-solid fa-phone text-primary text-2xl" ></i></li>
                    <li class="text-primary">020 3409 8054</li>
                    <li><span class="font-bold">Option 1: </span> Funeral</li>
                    <li><span class="font-bold">Option 2: </span>Balham Mosque</li>
                    <li><span class="font-bold">Option 3: </span> Tooting Islamic Centre</li>
                    <li><span class="font-bold">Option 4: </span> Madrassah</li>
                  </ul>
                </div>

                <div class="w-full lg:w-1/4">
                  <ul class="leading-10 border border-amber-500 text-center lg:p-10 p-5 rounded-2xl h-full flex flex-col items-center justify-center">
                    <li><i class="fa-solid fa-envelope text-primary text-2xl"></i></li>
                    <li class="text-primary">admin@balhammosque.org</li>
                  </ul>
                </div>

                <div class="w-full lg:w-1/4">
                  <ul class="leading-10 border border-amber-500 text-center lg:p-10 p-5 rounded-2xl h-full flex flex-col items-center justify-center">
                    <li><i class="fa-solid fa-location-dot text-primary text-2xl"></i></li>
                    <li><span class="font-bold"> Balham Mosque: </span> 47A Balham High Road, London, SW12 9AW</li>
                    <li><span class="font-bold"> Tooting Islamic Centre: </span> 145 Upper Tooting Rd, SW17 7TJ</li>

                  </ul>
                </div>
                <div class="w-full lg:w-1/4">
                  <ul class="leading-10 border border-amber-500 text-center lg:p-10 p-5 rounded-2xl h-full flex flex-col items-center justify-center">
                    <li><i class="fa-solid fa-clock text-primary text-2xl"></i></li>
                    <li><span class="font-bold"> Office Hours: </span></li>
                    <li>Monday – Friday</li>
                    <li>11 AM – 7 PM</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section>
      <div class="container">
        <div class="flex flex-col lg:flex-row justify-center">
          <div class="w-full lg:w-1/2 py-28">
            <h1 class="font-semibold lg:text-4xl text-2xl text-center">Frequently Asked Questions</h1>
            <img src="@/assets/images/flower.png" alt="" class="w-20 h-20 m-5 mx-auto">
          </div>
        </div>

        <div class="flex flex-col lg:flex-row text-center pb-16">
          <div class="w-full lg:w-1/2">
            <div class="flex flex-col justify-center items-center">
              <Disclosure v-slot="{ open }">
                <DisclosureButton class="py-8 flex">
                  <p class="flex font-semibold text-xl text-gray-500 ">Are there facilities for disabled people?</p>
                  <ChevronRightIcon class="w-6 h-6 " :class="open && 'rotate-90 transform'" />
                </DisclosureButton>
                <DisclosurePanel class="text-gray-500 max-w-[400px] mx-auto pb-8">
                  <p> Both mosques are accessible to people with disabilities and include wheelchair access and lifts.</p>
                </DisclosurePanel>
              </Disclosure>

              <Disclosure  v-slot="{ open }">
                <DisclosureButton class="py-8 flex">
                  <p class="flex font-semibold text-xl text-gray-500 ">Can I provide Iftar during Ramadan?</p>
                    <ChevronRightIcon class="w-6 h-6 " :class="open && 'rotate-90 transform'" />
                </DisclosureButton>
                <DisclosurePanel class="text-gray-500 max-w-[400px] mx-auto pb-8">
                  <p>The mosque provides Iftar for the community during ramadan and welcomes donations from individuals and businesses.</p>
                </DisclosurePanel>
              </Disclosure>

              <Disclosure  v-slot="{ open }">
                <DisclosureButton class="py-8 flex ">
                  <p class="flex font-semibold text-xl text-gray-500 ">Can one perform Itikaf at the mosque?</p>
                    <ChevronRightIcon class="w-6 h-6 " :class="open && 'rotate-90 transform'" />
                </DisclosureButton>
                <DisclosurePanel class="text-gray-500 max-w-[400px] mx-auto pb-8">
                  <p> Both mosques offer Itikaf facilities for the last 10 nights of Ramadan. We have limited spaces so please book in advance by contacting the office.</p>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>

          <div class="w-full lg:w-1/2">
            <div class="flex flex-col justify-center items-center">
                <Disclosure v-slot="{ open }">
                  <DisclosureButton class="py-8 flex ">
                    <p class="flex font-semibold text-xl text-gray-500 ">Does the Mosque have women's facilites?</p>
                      <ChevronRightIcon class="w-6 h-6 " :class="open && 'rotate-90 transform'" />
                  </DisclosureButton>
                  <DisclosurePanel class="text-gray-500 max-w-[400px] mx-auto pb-8">
                    <p> Both masjid’s are open to women and have dedicated prayer areas, wadhu facilities and toilets.</p>
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure v-slot="{ open }">
                  <DisclosureButton class="py-8 flex ">
                    <p class="flex font-semibold text-xl text-gray-500 ">What do I do if someone passes away?</p>
                      <ChevronRightIcon class="w-6 h-6 " :class="open && 'rotate-90 transform'" />
                  </DisclosureButton>
                  <DisclosurePanel class="text-gray-500 max-w-[400px] mx-auto pb-8">
                    <p>Our funeral service is contactable 24 hours a day on  0300 30 30 694. Please contact us and our funeral director will guide you and your family through everything you need to know during this difficult time.</p>
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure v-slot="{ open }">
                  <DisclosureButton class="py-8 flex  ">
                    <p class="flex font-semibold text-xl text-gray-500 ">Can I visit the mosque if I am not a Muslim?</p>
                      <ChevronRightIcon class="w-6 h-6 " :class="open && 'rotate-90 transform'" />
                  </DisclosureButton>
                  <DisclosurePanel class="text-gray-500 max-w-[400px] mx-auto pb-8">
                    <p> We have mosque open days which people from all faiths, non faith and backgrounds are invited to visit the mosque. If you would like to visit the mosque at any other time please contact the office and we can arrange for a tour of the mosque</p>
                  </DisclosurePanel>
                </Disclosure>
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
              <h1 class="font-semibold text-4xl ">Enquire About The Madrasah</h1>
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
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

</script>


