import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Container from './components/container.vue';
import ElementUI from 'element-ui';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

// const router = new VueRouter({
//   routes:[
//     {

//     }
//   ]
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: {
    Container
  },
  template: '<Container/>'
})

