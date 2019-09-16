import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuelidate from 'vuelidate';


Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

