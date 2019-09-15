<template>

<v-layout  align-start justify-center>
    <v-card  >
        <v-card-text v-if="usuario">

            <div class="ma-2" >
            
            {{usuario.nombres}} {{usuario.apellidos}}
              
            </div>
            
           <v-img class="ma-2 redondo" :src="usuario.fotoPerfil"> </v-img>

          <div >
          <v-layout >
           {{usuario.descripcion}} :
          </v-layout>
            


          </div>

         <v-layout justify-center >
            <a class="ma-2 link" style="color: #F48FB1;" :href="usuario.biografia">Biografia</a>
          </v-layout>
            

        </v-card-text>



         <v-card-text v-if="!usuario" >

            <div class="ma-2" >
            
                Nombre y Apellidos
            </div>
            <img class="ma-2 redondo" :src="require('@/assets/perfilfijo.jpg')" alt="">

          <div >
          <v-layout >
             Descripcion:
          </v-layout>
            


          </div>

         <v-layout justify-center >
            <a class="ma-2 link" style="color: #F48FB1;" href="">Biografia</a>
          </v-layout>
            

        </v-card-text>
    </v-card>

    
</v-layout>


</template>

<style>

.redondo{
    border-radius: 10px;
    width: 200px;
    height: 100%;
}
.link{
 text-decoration: none;
 font-size: 1rem;
 
}
    
</style>
<script>
export default {
 
 
 computed:{
  usuario(){
    return  this.$store.state.usuario
  }
 }

}
</script>