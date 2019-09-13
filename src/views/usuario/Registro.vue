<template>
<v-layout align-center justify-center > 
    <v-flex xs12 sm10 md8 lg6 xl4 >
     <v-slide-y-transition mode="out-in" @enter="enter">

        <v-card  v-if="vista == 1" :key="1" class="elevation-24" >

          <v-toolbar color="primary" dark  card flat>

            <v-toolbar-title>
              Registrate

            </v-toolbar-title>

            <v-layout
              justify-end
              align-center
            >

            </v-layout>

          </v-toolbar>
          <v-card-text>
            <v-text-field @blur="$v.f1.email.$touch()" :error-messages="erroresEmail" v-model="f1.email" label="Email"></v-text-field>
            <v-text-field @blur="$v.f1.password.$touch()" counter   :type="show2 ? 'text' : 'password'"   :append-icon="show2 ? 'visibility' : 'visibility_off'"  @click:append="show2 = !show2" :error-messages="erroresPassword" v-model="f1.password" label="Password"></v-text-field>
            <v-text-field @keyup.enter="siguiente(1)" @blur="$v.f1.repetirPassword.$touch()" :error-messages="erroresRepetirPassword" v-model="f1.repetirPassword" label="Repetir Password" type="password"></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-layout justify-end>
              <v-btn
                @click="vista++"
                color="secondary"
                :disabled="$v.f1.$invalid"
              >
                Siguiente
              </v-btn>
            </v-layout>
          </v-card-text>

        </v-card>

        <v-card
          v-if="vista == 2"
          :key="2"
          class="elevation-24"
        >

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
              v-model="f2.nombres"
              :error-messages="erroresNames"
              @blur="$v.f2.nombres.$touch()"
            ></v-text-field>
            <v-text-field @keyup.enter="verificar" :error-messages="erroresApellidos" @blur="$v.f2.apellidos.$touch()"  v-model="f2.apellidos" label="Apellido"></v-text-field>

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
               @click="verificar" 
                color="secondary"
              >
                Siguiente
              </v-btn>

            </v-layout>
          </v-card-text>

        </v-card>

        <v-card
          v-if="vista == 3"
          :key="3"
          class="elevation-24"
        >

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

            <v-layout justify-center>

              <v-date-picker
               ref="calendario" :max="fechaMaxima" v-model="fechaNacimiento" reactive locale="es-co" class="elevation-3"
                 min="1950-01-01"
              >
                <v-spacer></v-spacer>
                <v-layout
                  justify-end
                  justify-space-between
                >
                  <v-btn
                    text
                    color="secondary"
                    @click="fechaNacimiento = null"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="secondary"
                    @click="registrar" :depressed="$v.fechaNacimiento.$invalid" :disabled="$v.fechaNacimiento.$invalid"
                  >
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
               @click="registrar"
               
                color="secondary"
              >
           
                Registrarse
              </v-btn>

            </v-layout>

          </v-card-text>
          <v-card-text>

          </v-card-text>

        </v-card>
      </v-slide-y-transition>

    </v-flex>

  </v-layout>

</template>
<script>
import { required, email, minLength, maxLength, sameAs,alpha } from 'vuelidate/lib/validators'
export default {
 name: 'Registro',
  data() {
    return {

      vista: 3,
      fechaNacimiento: null,
      show2: false,
      fechaMaxima:null,

       f1: {
        email: '',
        password: '',
        repetirPassword: ''
      },
      f2:{
        nombres:'',
        apellidos:''
      },


    }


  },
    computed: {

   erroresEmail() {
      let errores = []
      if (!this.$v.f1.email.$dirty) { return errores }
      if (!this.$v.f1.email.required) { errores.push('Ingresa tu email.') }
      if (!this.$v.f1.email.email) { errores.push('Ingresa un email válido.') }
      return errores
    },
    erroresPassword() {
      let errores = []
      if (!this.$v.f1.password.$dirty) { return errores }
      if (!this.$v.f1.password.required) { errores.push('Ingresa tu password.') }
      if (!this.$v.f1.password.minLength) { errores.push('Ingresa al menos 6 caracteres.') }
      if (!this.$v.f1.password.maxLength) { errores.push('Ingresa máximo 20 caracteres.') }
      return errores
    },
    erroresRepetirPassword() {
      let errores = []
      if (!this.$v.f1.repetirPassword.$dirty) { return errores }
      if (!this.$v.f1.repetirPassword.sameAs) { errores.push('Las contraseñas no coinciden.') }
      return errores
    },
       erroresNames() {
      let errores = []
      if (!this.$v.f2.nombres.$dirty) { return errores }
      if (!this.$v.f2.nombres.required) { errores.push('Ingresa tus nombres.') }
      if (!this.$v.f2.nombres.minLength) { errores.push('Ingresa al menos 3 caracteres.') }
      if (!this.$v.f2.nombres.maxLength) { errores.push('Ingresa máximo 20 caracteres.') }
      if (!this.$v.f2.nombres.alpha) { errores.push('Ingresa solo letras por favor.') }
      return errores
    },
      erroresApellidos() {
      let errores = []
      if (!this.$v.f2.apellidos.$dirty) { return errores }
      if (!this.$v.f2.apellidos.required) { errores.push('Ingresa tus apellidos.') }
      if (!this.$v.f2.apellidos.minLength) { errores.push('Ingresa al menos 3 caracteres.') }
      if (!this.$v.f2.apellidos.maxLength) { errores.push('Ingresa máximo 20 caracteres.') }
      if (!this.$v.f2.apellidos.alpha) { errores.push('Ingresa solo letras por favor.') }
      return errores
    },
  },
  

  methods: {

    vistas() {

      this.vista = 1
    },
    vistas2() {

      this.vista = 2
    },

     siguiente(vista) {
      switch (vista) {
        case 1:
          if (this.$v.f1.$invalid) {
            this.$v.f1.$touch()
            return
          }
          else {
            this.vista++
          }
          break
      }
    },
     verificar(){
      
      if (this.$v.f2.$invalid) {
        this.$v.f2.$touch()

      } else {
      
       this.vista=3

      }


      },
        enter() {
      if(this.vista == 3 && !this.fechaNacimiento) {
        this.$refs.calendario.activePicker = 'YEAR'
      }

    },
     registrar() {
      if(this.$v.fechaNacimiento.$invalid) { return }

      alert('Registrando...')
    },



  },
  created() {
    let fechaActual = new Date()
    this.fechaMaxima = new Date(fechaActual.setFullYear(fechaActual.getFullYear() - 13))
      .toISOString()
      .substr(0, 10)
  },
    validations: {
    f1: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20)
      },
      repetirPassword: {
        sameAs: sameAs('password')
      }
    },
    f2:{
      nombres:{
      required,
        minLength: minLength(3),
        maxLength: maxLength(20),
      alpha
      },
      apellidos:{
       required,
        minLength: minLength(3),
        maxLength: maxLength(20),
        alpha
      }

    },
    fechaNacimiento:{
      required
    }

  }



}

</script>

<style >
</style>