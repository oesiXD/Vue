<template>
  <v-app>
    <v-app-bar color="primary" dark app>

      <v-toolbar-title class="headline ">
        <span>{{Titulo}}</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-content>
   
      <v-container fluid fill-height>
     <component :is="componenteactual"></component>
      </v-container>

       <v-container>
      <login/>>
      </v-container>

    </v-content>
  </v-app>
</template>

<script>
import Home from '@/views/Home.vue'
import Registro from '@/views/usuario/Registro.vue'
import Login from '@/views/usuario/Login.vue'

export default {
  components:{Home,Registro,Login},

  name: 'App',
  data: () => ({
    
    Titulo:'animeXD',
    componenteactual:'login'

  }),
};
</script>
