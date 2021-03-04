import Vue from 'vue'
import App from './App.vue'
import router from "./handlers/router.js"
import io from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
import NProgress from 'nprogress';

Vue.use(new VueSocketIO({
    connection:  io('http://localhost:5100')
}))

Vue.config.productionTip = false

NProgress.start()

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
