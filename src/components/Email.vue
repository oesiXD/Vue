<template>
    <div class="seccion">

        <div class="atributo">
                 
               <input v-model="email" @keyup.enter="actualizarEmail"  >
        </div>

    </div>
</template>

<script>


export default {

props:['emailResibido'],
  data(){
    return {
    email: ''

    }

  },
  methods: {
      actualizarEmail(event) {
       
           this.$emit('cambioEmail', this.email)
      }

  },

  watch: {
    emailResibido(){
        this.email = this.emailResibido
    }
   

  }
      

}
</script>

<style >
    .email{

        text-align: left;
    }

</style>