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


       
            



        </v-card-text>
        <v-card-actions>
          
             <v-btn falt color="secondary" :to="{name:'registo'}" class="overline">¡Aun no tienes cuenta que esperas! Registrate. </v-btn>

        </v-card-actions>

      </v-card>

    </v-container>
</template>
<script>

import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapMutations, mapGetters} from 'vuex'
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
      //importante
...mapGetters(['saludo']),
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
//importante
...mapMutations(['mostrarOcupado','ocultarOcupado','actualizarUsuario','mostrarExito']),

      verificar(){

     
      if (this.$v.formulario.$invalid) {
        this.$v.formulario.$touch()
       return
      }
          let usuario ={
            userName: 'AndresXD',
            nombres: 'Andres',
            apellidos:'López',
            sexo:'M',
            descripcion:'Descripcion',
            biografia:'https://www.facebook.com/profile.php?id=100006544260839',
            fotoPerfil:'https://scontent.fscl3-1.fna.fbcdn.net/v/t1.0-9/37783653_2245034152391372_5930065232532602880_n.jpg?_nc_cat=110&_nc_oc=AQkW3volK8IrAhTQvPyAz3B5MTsJVgqsekNJCifLRLwNhJfPu1ruEHHs6qUQx1ez220&_nc_ht=scontent.fscl3-1.fna&oh=532484e15167ec06a74500a709c81b91&oe=5DF3681E'

          }

//esta es la variable con los datos a trabajar con ellos  
           let ocupado = {
             titulo:'Validando Credenciales',
             mensaje:'Estamos validando tu informacion...'
           }
           //posteriormente se prosede  a utilizar el mutator para espesificar lo que le enviaremos 
           this.mostrarOcupado (ocupado)


        setTimeout(()=>{
           this.ocultarOcupado()
            this.actualizarUsuario (usuario)
            this.mostrarExito (this.saludo)  
            this.$router.push({name:'home'})
        },2000 );

      }

    }
    
  

}
  

</script>