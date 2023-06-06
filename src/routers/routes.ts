import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Main',
    redirect: { name: 'Home' },
    component: () => import('@/pages/layouts/Index.vue'),
    children: [
      // 홈
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/pages/home/Index.vue'),
      },
      {
        path: 'ratio',
        name: 'Ratio',
        component: () => import('@/pages/ratio/Index.vue'),
      },
      {
        path: 'json-formatter',
        name: 'JsonFormatter',
        component: () => import('@/pages/json-formatter/Index.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'Home' },
  },
];

export default routes;
