<template>
    <v-container style="max-width: 600px">

       <v-card  class="elevation-24">

        <v-toolbar
          color="primary"
          dark
          card
          flat
        >

          <v-toolbar-title>
            Ingresa Tus Credenciales 
            
          </v-toolbar-title>
        
<v-layout  justify-end align-center > 


</v-layout>


        </v-toolbar>
        <v-card-text>

          <v-text-field label="Email" type="email"></v-text-field>
          <v-text-field label="Password" type="password" ></v-text-field>

        </v-card-text>
        <v-card-text>
          <v-layout justify-end>
            <v-btn
              @click="vista++"
              color="secondary"
            >
              Siguiente
            </v-btn>
          </v-layout>
        </v-card-text>

      </v-card>

    </v-container>
</template>
<script>
  export default {
   
  }
</script>