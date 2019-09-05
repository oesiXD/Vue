<template>

<v-container >


  <v-layout column text-center>

    <div class="home-titulo">
      <h1>NUEVOS ANIMES</h1>
    </div>
    <v-layout wrap>
      <v-flex xs12 sm6 md4 lg3 	xl2 v-for="i in 12" :key="i" >
        <v-card class="elevation-6 ma-3"  > 
            <v-img class="fotoHome" src="https://assets3.thrillist.com/v1/image/2813543/size/gn-gift_guide_variable_c.jpg" ></v-img>
        </v-card>
      </v-flex>
    </v-layout>

  </v-layout>

</v-container>

</template>
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

</style>

