<template>
  <div class="secction">
    <span> Andres Lopez</span>

    <div class="atributo">
      <span>Nombre: {{ nombres }} {{ apellidos }}</span>
    </div>

    <div
      class="row"
      style="margin-left: 1%;"
    >

      <div class=" col-4 diseño">

        <span>Nombre: {{ concatenername }}</span>

        <img
          v-bind:src="fotoperfil"
          alt=""
          style="  width: 85%; border-radius: 51%;"
        >
        <span>Edad: {{edad}} </span>

        <div class="container  ">

          <div class="asientos">
            <boletos />
          </div>
        </div>

        <div class="container tamaño">

          <span> {{emails}} </span>

          <div class="container">
            <a
              class="tag"
              v-bind:href="biografia"
              target="_blnk"
            > Mas Información</a>
          </div>
        </div>

      </div>

      <div class="col-8">

        <firma />

      </div>

    </div>

  </div>

</template>
<script>
import Boletos from '@/components/Boletos.vue'
import Firma from '@/components/FirmaVue.vue'


export default {

  props: ['emails'],

  components: { Boletos, Firma },


  data() {
    return {

      nombres: 'Andres',
      apellidos: 'Lopez',
      fechadenacimiento: new Date(1999, 4, 26),
      fotoperfil: 'https://scontent.fscl12-1.fna.fbcdn.net/v/t1.0-9/41454961_2292179297676857_3893470175462162432_n.jpg?_nc_cat=100&_nc_oc=AQnI-0gwIZtaPStFW6y9ZQkujKk2eCX1SPueleOYd95_uLRHulACOXu2lcDj_3KsepI&_nc_ht=scontent.fscl12-1.fna&oh=6769a5526d17887308ffc2abdf1a2aa7&oe=5DE0A2E2',
      biografia: 'https://www.facebook.com/',

    }
  },
  computed: {
    concatenername() {
      return `${this.nombres} ${this.apellidos}`
    },

    edad() {
      return this.calcularedad(this.fechadenacimiento)
    }
  },
  methods: {
    calcularedad(fecha) {
      let fechActual = new Date()
      let diferencia = fechActual - fecha
      return Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25))
    }
  },
  created() {
    this.$emit('cambioEmail', 'andrespro529@gmail')

  }

}
</script>

<style >
.tag {
  text-decoration: none;
  color: black;
}

.atributo {
  margin: 10px;
}

.diseño {
  background-color: #5f3e3e;
  width: 31%;
  height: auto;
  border-radius: 2%;
}
.tamaño {
  font-size: 2rem;
  color: black;
}
.asientos{
    background-color:burlywood ;
    margin: 1%;
    border-radius:10px;
    padding: 5px; 
}
</style>