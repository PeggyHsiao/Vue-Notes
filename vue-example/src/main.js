import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';

Vue.config.productionTip = false

Vue.directive('focus',{
  inserted(el){
    el.focus();
  }
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
