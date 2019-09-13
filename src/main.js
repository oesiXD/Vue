import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuelidate from 'vuelidate';


Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

