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

          <v-text-field label="Email" type="email" v-model="formulario.email" :error-messages="errorsEmail" @blur="$v.formulario.email.$touch()"></v-text-field>
          <v-text-field @keyup.enter="verificar"  counter maxlength="25"  :type="show2 ? 'text' : 'password'"   :append-icon="show2 ? 'visibility' : 'visibility_off'"  @click:append="show2 = !show2" label="Password" v-model="formulario.password" :error-messages="errorsPassword" @blur="$v.formulario.password.$touch()" ></v-text-field>

        </v-card-text>
        <v-card-text>
          <v-layout justify-end>
            <v-btn class="ma-2" @click="verificar" :disabled="$v.formulario.$invalid" color="secondary"> Siguiente </v-btn>
          </v-layout>


            <p  style="color: green"  v-if="submitStatus == 'OK'">Datos Correctos

              <video v-if="vide == 'true'"   autoplay="" name="media"><source src="https://external-preview.redd.it/sBPL3rSK_4BQ4uF7hmN-gJnXdeqIX5o1KNMHYzv70Gg.gif?format=mp4&amp;s=c9fb3c38a383fc4a88563b6f0855f584405f3645" type="video/mp4"></video>
            </p>

             <p style="color:red" class="typo__p" v-if="submitStatus == 'ERROR'">Por favor verifica los campos ingresados </p>
             
             <p style="color:#827717"  v-if="submitStatus == 'PENDING'">Enviando...

                       <v-progress-circular indeterminate size="32"></v-progress-circular>
             </p>
            
            



        </v-card-text>

      </v-card>

    </v-container>
</template>
<script>

import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

  export default {
   name: 'Login',
    data(){
      return{

        formulario:{
           
           email:'',
           password: '',

        },
          vide: 'true',
           submitStatus: null,
           show2: false,
      }
    },
    computed:{

     errorsEmail(){
       let errores = []
       if(!this.$v.formulario.email.$dirty) {return errores}
       if(!this.$v.formulario.email.required) { errores.push('Ingresa tu email.')}
       if(!this.$v.formulario.email.email) { errores.push('Ingresa un email válido.')}
       return errores
     },
     errorsPassword(){
       let errors = []
       if(!this.$v.formulario.password.$dirty) {return errors}
       if(!this.$v.formulario.password.required) { errors.push('Ingresa tu contraseña.')}
       if(!this.$v.formulario.password.minLength) { errors.push('Ingresa un contraseña con almenos 6 caracteres.')}
       if(!this.$v.formulario.password.maxLength) { errors.push('Ingresa un contraseña que no supere los 20 caracteres.')}
       return errors
       
     },


    },
      validations: {
  formulario:{

        email: {
        required,
        email
      },
      password:{
        required,
        minLength:  minLength(6),
        maxLength:  maxLength(20)
      }
  }
    },
    methods:{

      verificar(){

      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING' 
          setTimeout(() => { this.submitStatus = 'OK' }, 3000)


         this.submitStatus = 'PENDING' 
          setTimeout(() => { this.vide = 'false' }, 12000)



      }


      },
    
    }

  }
  

</script>