import Vue from 'vue'
import App from './App.vue'

import VueTypedJs from 'vue-typed-js';
import VueEllipseProgress from 'vue-ellipse-progress';

Vue.config.productionTip = false;

Vue.use(VueTypedJs);
Vue.use(VueEllipseProgress);

new Vue({
    render: h => h(App),
}).$mount('#app');
