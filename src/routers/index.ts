import { createRouter, createWebHistory } from 'vue-router';
import routesRecords from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: routesRecords,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
