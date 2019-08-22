<template>
  <html>
  <div>
    <div class="section">
<br>
      <div
        v-if="!pago && boletos == 0"
        class="mensaje informacion"
      >

        Selecciona al menos un boleto.

      </div>

      <div
        v-else-if="!pago && boletos > 0 "
        class="mensaje advertencia"
      >

        Recuerda completar tu compra.

      </div>

      <div
        v-else-if="pago == true && boletos > 0"
        class="mensaje exito"
      >

        !!BIENVENIDO!!
      </div>
<br>
      <div class="asiento">
          <br>
        <span class=""> Asientos</span>
        <hr width="85%" />

        <div class="atributo"> 


           <button class="buton" @click="seleccionar(asiento, index)" v-for="(asiento, index) in asientos" :key="index" >{{ asiento }} </button>

        </div>
      </div>
    </div>



    
  <div class="section">
    <span>Boletos</span>

      <div class="atributo"> 


           <button class="butons" @click="remove(asiento, index)" v-for="(asiento, index) in seleccionados" :key="index" >{{ asiento }} </button>

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
    <div class="atributo">
      <button
        class="buttons"
        @click="actualizarCantidad(1)"
      >+</button>
      <button
        class="buttons"
        @click="actualizarCantidad(-1)"
      >-</button>
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


  </div>

  </html>
</template>

<script>
export default {
  data() {
    return {
      boletos: 0,
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

      this.boletos = 0
      this.comicion = 0
      this.pago = false
    },
    seleccionar(asiento, index){
        this.asientos.splice(index,1)
        this.seleccionados.push(asiento)
        this.asientos.sort()

    },
    remove(asiento, index){
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
</style>