<template>
  <v-app>

    <v-navigation-drawer
      v-model="menu"
      app
      temporary
    >
      <v-list>
        <v-list-item @click="selecionado('home')">
          <v-list-title-action>
            <v-icon class="ma-3">home</v-icon>
          </v-list-title-action>

          <v-list-text-content>
            <v-list-tile-title v-text="'Inicio'"></v-list-tile-title>

          </v-list-text-content>

        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item @click="selecionado('perfil')">
          <v-list-title-action>
            <v-icon class="ma-3">account_circle</v-icon>
          </v-list-title-action>

          <v-list-text-content>
            <v-list-tile-title v-text="'Perfil'"></v-list-tile-title>

          </v-list-text-content>

        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item @click="selecionado('registro')">
          <v-list-title-action>
            <v-icon class="ma-3">contact_mail</v-icon>
          </v-list-title-action>

          <v-list-text-content>
            <v-list-tile-title v-text="'Registro'"></v-list-tile-title>

          </v-list-text-content>

        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item @click="selecionado('login')">
          <v-list-title-action>
            <v-icon class="ma-3">arrow_forward</v-icon>
          </v-list-title-action>

          <v-list-text-content>
            <v-list-tile-title v-text="'Login'"></v-list-tile-title>

          </v-list-text-content>

        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#fcb69f"
        dark
        shrink-on-scroll
        src="https://picsum.photos/1920/1080?random"
        scroll-target="#scrolling-techniques-2"
      >

        <v-app-bar-nav-icon @click="menu =!menu"></v-app-bar-nav-icon>

        <v-toolbar-title
          @click="componenteactual = 'home'"
          class="titulo"
        >{{Titulo}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs
            align-with-title
            background-color="transparent"
          >
            <v-tab @click="menu1">Perfil</v-tab>
            <v-tab @click="menu2">Capitulos</v-tab>
            <v-tab v-model="registro">Tab 3</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>

      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="900"
      >

        <v-layout
          column
          text-center
        >

          <div class="home-titulo">
            <h1>NUEVOS ANIMES</h1>
          </div>
          <v-layout wrap>
            <v-flex
              xs9
              sm8
              xl12
              v-for="i in 1"
              :key="i"
            >
              <v-card class="elevation-6 ma-3">
                <v-img
                  class="fotoHome"
                  width="200"
                  src="https://assets3.thrillist.com/v1/image/2813543/size/gn-gift_guide_variable_c.jpg"
                ></v-img>
              </v-card>
            </v-flex>
          </v-layout>

        </v-layout>

        <v-container
          class="tope"
          style="max-width: 900px"
        >

          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>

        </v-container>

        <v-container
          fluid
          fill-height
        >

          <v-slide-y-transition mode="out-in">
            
            <component :is="componenteactual"></component>

          </v-slide-y-transition>

        </v-container>

      </v-sheet>

    </v-card>

    <v-footer
      color="primary"
      dark
    >
      <v-layout justify-center>

        <samp>hola </samp>
      </v-layout>
    </v-footer>

  </v-app>
</template>

<script>
import Home from '@/views/Home.vue'
import Registro from '@/views/usuario/Registro.vue'
import Login from '@/views/usuario/Login.vue'
import Perfil from '@/views/usuario/Perfil.vue'

export default {
  components: { Home, Registro, Login, Perfil },

  name: 'App',
  data: () => ({

    Titulo: 'animeXD',
    componenteactual: 'home',
    menu: false,
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },

    ]


  }
  ),
  methods: {

    menu1() {
      this.componenteactual = 'perfil'
    },
    menu2() {
      this.componenteactual = 'home'
    },
    selecionado(seleccion) {
      this.componenteactual = seleccion
      this.menu = false
    }
  },




};
</script>
<style >
.tope {
  margin-top: 10.74%;
}
.titulo {
  cursor: pointer;
}
</style>
