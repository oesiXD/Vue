<template>
<html> 


    <div class="section">
        <div class="atributo">
            <span class="boletos">{{boletos}}</span>
        </div>

        <div class="atributo">
        <button class="buttons" @click="actualizarCantidad(1)">+</button>
        <button class="buttons" @click="actualizarCantidad(-1)">-</button>
        </div>


    </div >
    <br>
    <br>
    </html>
</template>

<script>
export default {
    data(){
        return{
            boletos: 0
        }
    },
    methods:{
        actualizarCantidad(cantidad){

            this.boletos += cantidad

            if(this.boletos > 10){

             this.boletos = 10
            }
            else if(this.boletos< 0 ){
                this.boletos = 0

            }

        }
    }
}
</script>

<style>

.boletos{

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
    
</style>