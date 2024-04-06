import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", name: 'Index', component:()=>import('@/views/Index.vue')},
    {path: "/about", name: 'About', component:()=>import('@/views/About.vue')},
    {path: "/madrasah", name: 'Madrasah', component:()=>import('@/views/Madrasah.vue')},
    {path: "/funeral", name: 'Funeral', component:()=>import('@/views/Funeral.vue')},
    {path: "/nikah", name: 'Nikah', component:()=>import('@/views/Nikah.vue')},
    {path: "/visit-mosque", name: 'VisitMosque', component:()=>import('@/views/VisitMosque.vue')},
    {path: "/gallery", name: 'Gallery', component:()=>import('@/views/Gallery.vue')},
    {path: "/contact", name: 'Contact', component:()=>import('@/views/Contact.vue')},

  ]
})

export default router
