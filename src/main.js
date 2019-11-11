import Vue from 'vue'
import App from './App.vue'
import router from './router'
import pageSCSS from './assets/scss/page.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCross } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCross);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const app = new Vue({
  router,
  pageSCSS,
  render: h => h(App),
}).$mount('#app')

export { app }