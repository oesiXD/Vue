import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import es from 'vuetify/es5/locale/es';
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
Vue.use(Vuetify);

export default new Vuetify({
 
  icons: {
    iconfont: 'mdiSvg',
  },
 
 
 
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#90CAF9',
        secondary: '#F48FB1',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
    lang: {
      locales: { es },
      current: 'es',
    },
  icons: {
    iconfont: 'mdi',
  },
});
