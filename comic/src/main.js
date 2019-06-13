import Vue from 'vue';
import BookBlock from 'vue-bookblock';
import App from './App.vue';

import 'vue-bookblock/styles/bookblock.css';

Vue.use(BookBlock);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
