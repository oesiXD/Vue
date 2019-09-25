import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Registro from './views/usuario/Registro.vue'
import Login from './views/usuario/Login.vue'
import Perfil from './views/usuario/Perfil.vue'
import extra from '@/views/usuario/extra.vue'
import store from '@/store'
import capitulos from './views/serie/capitulos.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sesion/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sesion/registro',
      name: 'registo',
      component: Registro
    },
    {
      path: '/usuario/perfil',
      name: 'perfil',
      component: Perfil
    },
    {
      path: '/usuario/extra',
      name: 'extra',
      component: extra,
      meta: {
        autenticado: true
      }
    },
    {
      path: '/animes/:aid',
      name: 'anime',
      component: capitulos,
    }
     
  ]
})

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.autenticado)) {
    if (store.state.sesion.usuario) {
      next()

    } else {
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})


export default router