<template>

<html>
<div class="raiz">
  
    <div class="atributo">
               <input @keyup.enter="escojercolor" type="text">
        </div>

 <canvas 

   
   ref="canfirma" class="firma" width="700px" height="600px"></canvas>    

   <div class="borders"   
   @mousemove="dibujar"
   @mousedown.left="dibujaralgo"
   @mousedown.right="borrando"
   @mouseup="dejardedibujar" 
   @contextmenu.prevent>

</div>
  
  
  
  </div>   
 </html>
</template>
 <script>
 export default {
    data(){
      return {

        ctx: null,
        ladoX: -1,
        ladoY: -1,
        dibujando: false,
        color: 'black'

      }

    },
    methods:{

      escojercolor(event) {
       
       this.color = event.target.value

      },

      dibujaralgo(){
       this.ctx.strokeStyle = `${this.color}`
       this.ctx.lineWidh = 5
       this.dibujando= true
       this.ctx.globalCompositeOperation = 'source-over';

      },

      borrando(){

       this.ctx.strokeStyle = 'white'
       this.ctx.lineWidh = 5000
       this.dibujando = true
       

      },

       dejardedibujar(){
        
        this.dibujando = false 
        this.ladoX = -1
        this.ladoY = -1


       },
        



        dibujar(event) {  
             if(!this.dibujando){

                 return
             }

          if(this.ladoX == -1 || this.ladoY == -1){

               this.ladoX = event.offsetX
               this.ladoY = event.offsetY 
               return
          }

         const ladoX = event.offsetX
         const ladoY = event.offsetY

         this.ctx.beginPath()
         this.ctx.moveTo(this.ladoX, this.ladoY)
         this.ctx.lineTo(ladoX, ladoY)
         this.ctx.stroke()

         this.ladoX = ladoX
         this.ladoY = ladoY
        }

    },
    mounted(){
     this.ctx = this.$refs.canfirma.getContext('2d')
     this.ctx.linerCap = 'round'

    }
 }
 </script>

 <style>
.firma{
cursor: pointer;
background-color: azure;
border-radius: 2%;
grid-row: 1;
grid-column: 1;

z-index: 2;


}

.raiz{

  display:grid;
  margin:10px; 
}

.borders{
  cursor: pointer;
border-radius: 12.3px;
box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.842);
width: 100%;
height: 600px;

grid-row: 1;
grid-column: 1;
z-index: 3;
}

 </style>