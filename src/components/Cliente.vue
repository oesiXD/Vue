<template>
    <div class="secction">
        <span> Andres Lopez</span>

        <div class="atributo">
   <span>Nombre: {{ nombres }} {{ apellidos }}</span>


        </div>
<div class="">
 <span>Nombre: {{ concatenername }}</span>
</div>

        <div class="atributo">
            <span>Edad: {{edad}} </span>
        </div>
    </div>

</template>
<script>
export default {


    data(){
        return {
        nombres: 'Andres',
        apellidos: 'Lopez',
        fechadenacimiento: new Date(1999,4,26)
        }
    },
    computed: {
concatenername(){
    return `${this.nombres} ${this.apellidos}` 
},

        edad(){
       return this.calcularedad(this.fechadenacimiento)
        }
    },
    methods: {
        calcularedad(fecha){
             let fechActual = new Date()
        let diferencia = fechActual - fecha
        return Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25)) 
        }
    }

}
</script>

<style >

.atributo{
margin : 10px;
}
</style>