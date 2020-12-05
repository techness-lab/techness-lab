import Vue from 'vue'
import App from './App.vue'

import VueTypedJs from 'vue-typed-js';
import VueEllipseProgress from 'vue-ellipse-progress';
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueTypedJs);
Vue.use(VueEllipseProgress);

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: function(to) {
        if (to.hash) {
            return ({
                selector: to.hash
            });
        } else {
            return ({
                x: 0,
                y: 0
            });
        }
    }
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
