<template>

<html>
  
<head>
    <link href="https://s3.amazonaws.com/codecademy-content/courses/ltp/css/shift.css" rel="stylesheet">
    <link rel="stylesheet" href="https://s3.amazonaws.com/codecademy-content/courses/ltp/css/bootstrap.css">
    <link rel="stylesheet" href="main.css">
    
</head>

<body>
  <div id="app">

<div class="nav">
    <div class="container">
        <ul class="pull-left">
            <li><a href="#">Nombre</a></li>
            <li><a href="#">Buscar</a></li>
        </ul>
        <ul class="pull-right">
            <li><a href="#">Regístrate</a></li>
            <li><a href="#">Iniciar sesión</a></li>
            <li><a href="#">Ayuda</a></li>
        </ul>
    </div>
</div>

<div class="jumbotron">
    <div class="container">
        <h1 style="color:Navy ">AnimeXD</h1>
        <p>Lo mas nuevo y actualizado para Otakus.</p>
        <a href="#">Ver mas</a>
    </div>
</div> 

<div class="neighborhood-guides">
    <div class="container">
        <h2 style="color:MidnightBlue "> Dato del Día</h2>
        <p> 
Obsesión con la cultura japonesa hasta el punto de que la persona ve la cultura japonesa como superior a la suya 
(y a todas las demás culturas). Obsesión con el anime, el manga y otras exportaciones de la cultura pop japonesa. 
Intercalar palabras japonesas en su discurso cotidiano. Las palabras a menudo se usan incorrectamente. Gran parte del 
conocimiento de la persona sobre Japón y el idioma se basa en las exportaciones de la cultura pop (anime y manga).</p>
      <h2 style="color:MidnightBlue "> Animes nuevos </h2>
    
      

        <div class="row">
            <div class="col-12">

               <div class="principal"> 
                 <span> Hola </span>
                 
               </div>
               <capitulos/>

            </div>
           
        </div>
    </div>
</div>

<div class="learn-more">
    <div class="container">
		<div class="row">
		    <div class="col-md-4">
			    <h3>Recommended</h3>
			    <p>Attack On Titan >. season 2!!!, Sword art online, Fairy Tail, Noragami, Black Butler, Nagi No Asukara, Tokyo Ghoul, Akagami no Shiraukihime, Mekakucity Actors (kagerou Project).</p>
			  <a href="url">https://kissanime.to/</a>
            </div>
            <div class="col-md-4">
			    <h3>Horror</h3>
			    <p>Higurashi, Elfen Leid, Corpse Party, Another, Blue Exorcist.</p>
			    <p><a href="#">https://kissanime.to/</a></p>
	        </div>
	        <div class="col-md-4">
		        <h3>Comedy/Slice of life</h3>
		        <p>K-On, Free!, Pet no Kanjou (Sakurasou), Kill La Kill, Soul Eater, The Melancholy of Haruhi Suzumia and more.</p>
			    <p><a href="#">https://kissanime.to/</a></p>
	        </div>
	    </div>
	</div>
</div>
 </div>
</body>
</html>  


</template>


<script>
import Capitulos from '@/views/Capitulos.vue'

export default {
  components:{Capitulos}

}
</script>

<style>

html{
  font-size: 62.5% !important;
}
.principal{

background-color: rgb(93, 144, 211);
padding: 10px;
color:azure;
border-radius:  3px;
width: 20%; 
font-size:3rem;
text-align: center;
}

.nav a {
  color: #5a5a5a;
  font-size: 11px;
  font-weight: bold;
  padding: 14px 10px;
  text-transform: uppercase;
}

.nav li {
  display: inline;
}

.jumbotron {
  background-image:url("https://cdn.shopify.com/s/files/1/1673/0883/products/ReZERO_-Starting_Life_in_Another_World_Ram_and_Rem_Anime_Cosplay_Costume_2_317129db-3c5d-48f1-b9ef-75d4c74cf059_1800x.jpg?v=1509092126");
  height: 370px;
 background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top left;
  background-position: 10% 60%;
background-size: cover;
}

.jumbotron .container {
  position: relative;
  top:20px;
}

.jumbotron h1 {
  color: purple ;
  font-size: 48px;  
  font-family: 'Shift', sans-serif;
  font-weight: bold;
}

.jumbotron p {
  font-size: 20px;
  color: #fff;
}

.learn-more {
  background-color: #f7f7f7;
}

.learn-more h3 {
  font-family: 'Shift', sans-serif;
  font-size: 18px;
  font-weight: bold;
}

.learn-more a {
  color: #00b0ff;
}

.neighborhood-guides {
    background-color: #efefef;
    border-bottom: 1px solid #dbdbdb;
}

.neighborhood-guides h2 {
    color: #393c3d;
    font-size: 24px;
}
.neighborhood-guides p {
    font-size: 15px;
    margin-bottom: 13px;
}

</style>