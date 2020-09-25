import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import Test from './views/render/test.js' // eslint-disable-line
// Vue.use(Test)

Vue.config.sproductionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
