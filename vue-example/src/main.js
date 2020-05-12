import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import Plugin from '@/plugins/index';

Vue.config.productionTip = false

// Plugins
Vue.use(Plugin,"Options")
Vue.myGlobalMethod(); 


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
