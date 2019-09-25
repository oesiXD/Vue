<template>

  <v-layout
    align-center
    justify-center
  >
    <v-flex
      xs12
      sm12
      md12
      lg10
      xl10
    >
      <v-img
        src="https://i.imgur.com/Dka7hIW.jpg"   aspect-ratio="2.979"
        position="absolute"
      >
        <v-flex      xs12
      sm12
      md10
      lg10
      xl10>
<v-layout align-end justify-center row fill-height  mr-12> 
<v-layout align-center justify-center row fill-height style="margin-top: 30%;" >
  

         {{anime.titulo}}
   

</v-layout>
</v-layout>
 </v-flex>
      </v-img>

          <v-flex grow
        pa-1 xs12 >
 
          <v-card-text>.</v-card-text>
      
      </v-flex>

      <v-layout wrap  >

    
        <v-flex  shrink pa-1 style="margin-top: -10%;"> 
            
<v-layout   align-center justify-center ml-12 column fill-height> 
<v-layout   align-center justify-center ml-12 column fill-height> 
  <v-img  :src="anime.portada" contain max-height="350"> </v-img>
</v-layout>
</v-layout>
          
        </v-flex>

        <v-flex  pa-1>
          <v-card dark color="green darken-1">
            <v-card-text>I'm a Flex that will grow and shrink (default behavior)</v-card-text>
          </v-card>
        </v-flex>

      </v-layout>

     

    </v-flex>
  </v-layout>

</template>
<style >
.diseño {
  padding: 16px;
  border-radius: 2px;
  color: hsla(0, 0%, 100%, 0.9);
  background-color: rgba(30, 30, 30, 0.25);
  border-left: 5px solid #a3bffa;
}
</style>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            anime:null
        }
    },
    computed:{
        ...mapState('capitulos',['animes'])
    },
    created(){
        let aid =this.$route.params.aid
        this.anime = this.animes.find(a => a.aid == aid)

        if(!this.anime){
            //404
        }
    }
    
}
</script>