import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import HomeLayout from '../layouts/HomeLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeLayout,
    redirect:'/home',
    children: [{
      path: '/home',
      component: () => import('../views/home/index.vue'),
    }]

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
