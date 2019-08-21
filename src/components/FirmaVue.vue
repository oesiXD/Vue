<template>
 <canvas @mousemove="dibujar" @mousedown="dibujando = true" @mouseup="dejardedibujar"  ref="canfirma" class="firma" width="700%" height="600%"></canvas>       

</template>
 <script>
 export default {
    data(){
      return {

        ctx: null,
        ladoX: -1,
        ladoY: -1,
        dibujando: false,
      
      }

    },
    methods:{

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
     this.ctx.strokeStyle = 'black'
     this.ctx.lineWidh = 5
     this.ctx.linerCap = 'round'

    }
 }
 </script>

 <style>
.firma{
cursor: pointer;
background-color: azure;
border-radius: 2%;
box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.041)

}

 </style>