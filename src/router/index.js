import Vue from 'vue';
import VueRouter from 'vue-router';
import DataTransform from '../views/dataTransform/index.vue';
import Render from '../views/render/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/data-transform',
    name: 'DataTransform',
    component: DataTransform,
  },
  {
    path: '/render',
    name: 'Render',
    component: Render,
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
