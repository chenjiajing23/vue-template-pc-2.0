import Vue from 'vue';
import { Button, ConfigProvider } from 'ant-design-vue';

import App from './App.vue';
import router from './router';
import store from './store';
import apis from './library/apis';

window.apis = apis;
Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(ConfigProvider);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
