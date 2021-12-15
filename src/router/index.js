import { createRouter, createWebHistory } from 'vue-router'
export const routes = [
    {
        path: "/",
        component: () => import(/* webpackChunkName: "about" */ '@/view/user/login.vue'),
        meta: {
          hidden: true
        },
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
