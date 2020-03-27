import Vue from 'vue';
import VueRouter from 'vue-router';
import DataTransform from '../views/dataTransform/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/data-transform',
    name: 'DataTransform',
    component: DataTransform,
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
