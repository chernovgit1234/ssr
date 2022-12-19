import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

import ProductsList from '@/views/ProductsList';
import Home from '@/views/Home/Index.vue';
import About from '@/views/About/Index.vue';
import E404 from '@/views/E404';

export default function initNewRouter(store) {
  let routes = [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'about',
      path: '/about',
      component: About
    },
    {
      path: '/:any(.*)',
      component: E404,
      meta: { is404: true }
    }
  ];

  const router = createRouter({
    history: process.isServer ? createMemoryHistory() : createWebHistory(process.env.BASE_URL),
    routes
  })

  router.beforeEach(async (to, from, next) => {
    if (process.isClient && to.meta.auth) {
      await store.getters['user/ready'];
      store.getters['user/isLogin'] ? next() : next({ name: 'login' });
    }
    else {
      next();
    }
  });

  return router;
}