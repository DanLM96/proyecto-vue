import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
    {
      path: '/Counter',
      name: 'Counter',
      component: () => import('../components/Contador.vue'),
    },
    {
      path: '/TaskList',
      name: 'TaskList',
      component: () => import('../components/ListaDeTareas.vue'),
    },
  ],
})

export default router
