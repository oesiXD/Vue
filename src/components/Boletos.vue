<template>
  <html>
  <div>
    <div class="section">
<br>
 <transition name="trancicion" mode="out-in">
 
      <div
        v-if="!pago && boletos == 0"
        :key="1"  class="mensaje informacion"
      >

        Selecciona al menos un boleto.

      </div>

      <div
        v-else-if="!pago && boletos > 0"
       :key="2"    class="mensaje advertencia"
      >

        Recuerda completar tu compra.

      </div>

      <div
        v-else-if="pago == true && boletos > 0"
        :key="3" class="mensaje exito"
      >

        !!BIENVENIDO!!
      </div>

 </transition>
<br>
      <div class="asiento">
          <br>
        <span class=""> Asientos</span>
        <hr width="85%" />

        <div class="atributo"> 


         <transition-group name="botones"  style="outline:none" mode="out-in">
         
           <button class="buton" @click="seleccionar(asiento, index)" v-for="(asiento, index) in asientos" :key="asiento" >{{ asiento }} </button>
         </transition-group>

        </div>
      </div>
    </div>



    
  <div class="section">
    <span>Boletos</span>

      <div class="atributo"> 


         <transition-group name="bajo" >

             <button class="butons" @click="remove(asiento, index)" v-for="(asiento, index) in seleccionados" :key="asiento" >{{ asiento }} </button>
         
         </transition-group>

        </div>
    <div class="atributo">

      <span class="boletos">{{boletos}}</span>
    </div>
    <div class="atributo">

      <span
        class="comicion"
        :class="claseComision"
      >${{comicion}}</span>
    </div>

    <div
      class=""
      v-show="boletos>0"
    >

      <span> Total: ${{total}} </span>
    </div>


    <div
      class="atributo"
      v-if="!pago && boletos > 0"
    >
      <button
        class="buttons"
        @click="pago=true"
      >PAGO</button>
    </div>
    <div
      class="atributo"
      v-if="pago"
    >
      <button
        class="buttons"
        @click="reiniciar"
      >Reinicar</button>
    </div>

  </div>
  <br>

<transition name="trancicion" >

   <tiquete v-if="pago">

  <div slot="obra" style="    border-color: black; border-style: inset; margin: 2px; border-radius: 5px;">
    <samp>El mandril</samp>
  </div>

  <div slot="horario">
    <span>2019-05-24 22:45 PM</span>

  </div>
    <div slot="asientos">
  <span class="butons2" v-for="(asiento,index) in seleccionados" :key="index"> {{asiento}}</span>
 
  </div>

  <div slot="total">
   ${{total}} 

  </div>

  </tiquete> 

</transition>
  </div>

  </html>
</template>

<script>
import Tiquete from './Tiquete'
export default {
  components:{ Tiquete

  },
  data() {
    return {
     
      comicion: 0,
      claseComision: 'neutro',
      pago: false,
      asientos:[
          'A1','A2','A3','A4','A5',
          'B1','B2','B3','B4','B5'
      ],
      seleccionados:[]
    }
  },
  computed: {


    total() {

      return this.boletos * 100

    },
    boletos(){

        return this.seleccionados.length
    }

  },
  methods: {
    actualizarCantidad(cantidad) {

      this.boletos += cantidad

      if (this.boletos > 10) {

        this.boletos = 10
      }
      else if (this.boletos < 0) {
        this.boletos = 0

      }

    },
    reiniciar() {

      this.asientos.push(...this.seleccionados)
      this.seleccionados=[]
      this.comicion = 0
      this.pago = false
      this.asientos.sort()
    },
    seleccionar(asiento, index){
      if(this.pago){return}
        this.asientos.splice(index,1)
        this.seleccionados.push(asiento)
        this.asientos.sort()

    },
    remove(asiento, index){
        if(this.pago){return}
        this.seleccionados.splice(index,1)
        this.asientos.push(asiento)
        this.asientos.sort()
    }
  },
  watch: {
    boletos(newValue, oldValue) {
      if (newValue > oldValue) {

        this.comicion += 10

      } else {
        this.comicion -= 15
      }
      if (this.comicion < 0) {

        this.comicion = 0
      }


    },
    comicion(newValue, oldValue) {
      if (this.comicion == 0) {

        this.claseComision = 'neutro'

      } else if (newValue > oldValue) {

        this.claseComision = 'incremeto'

      } else {

        this.claseComision = 'decremento'
      }

    },

  }
}
</script>

<style>

.boletos {
  font-size: 4rem;
  font-weight: bold;
}
.buttons {
  background-color: darkred;
  color: rgb(0, 0, 0);
  font-size: 2.4rem;
  font-weight: bold;
  border-style: groove;
  border-radius: 18px;
  padding: 8px 16px;
  margin: 4px 16px;
  min-width: 37px;
  cursor: pointer;
}
.buton{
      background-color:lightblue;
  color: rgb(0, 0, 0);
  font-size: 1.4rem;
  font-weight: bold;
  border-style: groove;
  border-radius: 10px;
  padding: 4px 12px;
  margin: 4px 12px;
  min-width: 30px;
  cursor: pointer;
  
}
.butons{
      background-color:rgb(173, 230, 178);
  color: rgb(0, 0, 0);
  font-size: 1.4rem;
  font-weight: bold;
  border-style: groove;
  border-radius: 10px;
  padding: 4px 12px;
  margin: 4px 12px;
  min-width: 30px;
  cursor: pointer;
  

}
.butons2{
      background-color:rgb(173, 230, 178);
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  
  border-radius: 10px;
  padding: 2px 12px;
  margin: 4px 22px;
  min-width: 30px;
  margin-left: 5px;
 
  cursor: pointer;
}
.neutro {
  color: black;
}

.incremeto {
  color: green;
}
.decremento {
  color: brown;
}

.mensaje {
  border-radius: 5px;
  border-width: 4px;
  border-style: dashed;
  padding: 10px;
  font-size: 1.8rem;
  font-weight: bold;
}
.informacion {
  border-color: blue;
}
.advertencia {
  border-color: darkgoldenrod;
}
.exito {
  border-color: darkgreen;
}
.asiento{
    border-color: black;
    border-style: inset;
        margin: 2px;
    border-radius: 5px;
}

.trancicion-enter{
opacity: 0;
}
.trancicion-enter-active{
  transition: opacity 0.3s ease-out;
  animation: animation-in 0.3s ease-out forwards ;

}
.trancicion-leave-active{
  transition: opacity 0.2s ease-out;
  animation: animation-out 0.2s ease-out forwards;
  opacity: 0;

}

@keyframes animation-in {
  
  0%
  {
   transform: scaleX(0);
  }
  100%
  {
   transform: scaleX(1);

  }
}

@keyframes animation-out {
  
  from
  {
   transform: scaleX(1);
  }
  to
  {
   transform: scaleX(0);

  }
}

.botones-enter{
opacity: 0;
}
.botones-enter-active{
  transition: opacity 0.3s ease-out;
  animation: boton-in 0.3s ease-out forwards ;

}
.botones-leave-active{
  transition: opacity 0.2s ease-out;
  animation: boton-out 0.2s ease-out forwards;
  opacity: 0;

}

@keyframes boton-in{
  
  0%
  {
   transform: translateY(30px);
  }
    70%
  {
   transform: translateY(-10px);
  }
    90%
  {
   transform: translateY(5px);
  }
  100%
  {
   transform: translateY(0px);

  }
}

@keyframes boton-out {
  
  from
  {
   transform: translateY(0px);
  }
  to
  {
   transform: translateY(30px);

  }
}

.bajo-enter{
opacity: 0;
}
.bajo-enter-active{
  transition: opacity 0.3s ease-out;
  animation: botons-in 0.3s ease-out forwards ;

}
.bajo-leave-active{
  transition: opacity 0.2s ease-out;
  animation: botons-out 0.2s ease-out forwards;
  opacity: 0;

}

@keyframes botons-in{
  
  0%
  {
   transform: translateY(-30px);
  }
    70%
  {
   transform: translateY(10px);
  }
    90%
  {
   transform: translateY(-5px);
  }
  100%
  {
   transform: translateY(0px);

  }
}

@keyframes botons-out {
  
  from
  {
   transform: translateY(0px);
  }
  to
  {
   transform: translateY(-30px);

  }
}
</style>