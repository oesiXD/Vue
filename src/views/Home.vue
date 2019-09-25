<template>

<v-container >


  <v-layout column text-center>

    <div class="home-titulo">
      <h1>NUEVOS ANIMES</h1>
    </div>
    <v-layout wrap>
      <v-flex xs12 sm6 md4 lg3 	xl2 v-for="anime in animes" :key="anime.aid" >
        <v-card class="elevation-6 ma-3"  :to="{name:'anime',params: {aid: anime.aid}}" > 
            <v-img class="fotoHome"   aspect-ratio="1.5" :src="anime.portada" >
          <v-layout align-end justify-center fill-height>
            <v-spacer></v-spacer>
            <v-card-text class="home-anime-titulo">
            {{anime.titulo}}
            </v-card-text>

          </v-layout>


            </v-img>
        </v-card>
      </v-flex>
    </v-layout>

  </v-layout>

</v-container>

</template>
<script>
import {mapState} from 'vuex'

export default {
   computed: {
     ...mapState('capitulos' ,['animes'])
   }
}
</script>

<style>
.home-titulo{

  font-family: cursive;
  font-size: 0.8rem;
  color: #03A9F4;
  text-shadow: 1px 1px 5px black;
}
  
 .fotoHome{
   width: 700px;
   height: 100%;
 } 
.home-anime-titulo{
  font-size: 2.4rem;
  color: black;
  text-shadow: 1px 1px 5px rgb(248, 248, 248);
  opacity: 0.9;
  vertical-align: end;
}
</style>

