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
      component: () => import('../modules/contador/components/Contador.vue'),
    },
    {
      path: '/TaskList',
      name: 'TaskList',
      component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue'),
    },
    {
      path: '/Registrar',
      name: 'Registrar',
      component: () => import('../views/RegistrarView.vue'),
    },
  ],
})

export default router
