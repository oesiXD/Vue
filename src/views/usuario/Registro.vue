<template>

  <v-layout
    align-center
    justify-center
  >

    <v-flex
      xs12
      sm10
      md8
      lg6
      xl4
    >
     
     <v-expand-x-transition mode="out-in">

          <v-card v-if="vista == 1" :key="1" class="elevation-24">

        <v-toolbar
          color="primary"
          dark
          card
          flat
        >

          <v-toolbar-title>
            Registrate
            
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

      <v-card  v-if="vista == 2" :key="2" class="elevation-24">

        <v-toolbar
          color="primary"
          dark
          card
          flat
        >

          <v-toolbar-title>
            Ingrese Nombre Y Apellido
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            label="Nombre"
            type="name"
          ></v-text-field>
          <v-text-field label="Apellido"></v-text-field>

        </v-card-text>
        <v-card-text>
          <v-layout
            justify-end
            justify-space-between
          >
            <v-btn
              @click="vistas"
              color="secondary"
            >
              Regresar
            </v-btn>
            <v-btn
              @click="vista++"
              color="secondary"
            >
              Siguiente
            </v-btn>

          </v-layout>
        </v-card-text>

      </v-card>

      <v-card v-if="vista == 3" key="3" class="elevation-24">

        <v-toolbar
          color="primary"
          dark
          card
          flat
        >

          <v-toolbar-title>
            Ingresa tu fecha de nacimiento
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>

          <v-layout justify-center >
       

              <v-date-picker locale="es-co" v-model="fechaNacimiento">
                <v-spacer></v-spacer>
                  <v-layout
            justify-end
            justify-space-between
          >
            <v-btn
                  text
                  color="secondary"
                  @click="fechaNacimiento = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="secondary">
                  OK
                </v-btn>

    </v-layout>
              </v-date-picker>
     
          </v-layout>

     <v-layout
            justify-end
            justify-space-between
          >
            <v-btn
              @click="vistas2"
              color="secondary"
            >
              Regresar
            </v-btn>
            <v-btn
              @click="vista++"
              color="secondary"
            >
              Registrarse
            </v-btn>

          </v-layout>

        </v-card-text>
        <v-card-text>

        </v-card-text>

      </v-card>
     </v-expand-x-transition>


    </v-flex>

  </v-layout>

</template>
<script>
export default {

  data() {
    return {
      
      vista: 1,
      fechaNacimiento:null,
    
    }


  },
  methods: {

    vistas() {

      this.vista = 1
    },
        vistas2() {

      this.vista = 2
    }


  },



}

</script>

<style >
</style>