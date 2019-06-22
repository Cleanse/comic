import Vue from 'vue';

import App from './App.vue';
import router from './router';
//import BookBlock from 'vue-bookblock';
//import vSelect from 'vue-select';

//import 'vue-bookblock/styles/bookblock.css';
//import 'vue-select/dist/vue-select.css';

//Vue.use(BookBlock); off for now
//Vue.component('v-select', vSelect);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');