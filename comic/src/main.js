import Vue from 'vue';
import BookBlock from 'vue-bookblock';
import vSelect from 'vue-select';
import App from './App.vue';

import 'vue-bookblock/styles/bookblock.css';
import 'vue-select/dist/vue-select.css';

Vue.use(BookBlock);
Vue.component('v-select', vSelect);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
