import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import App from './App.vue'
import Routes from './routes'


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueMaterial);



const router = new VueRouter({
    routes: Routes
});



new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  data () {
    return {
      
    }
  }
});