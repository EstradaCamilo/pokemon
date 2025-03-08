import { createRouter, createWebHistory } from 'vue-router';
import home from '@/pages/home.vue';
import search from '@/pages/search.vue';

const routes = [
  { path: '/', component: home },
  { path: '/search', component: search },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
