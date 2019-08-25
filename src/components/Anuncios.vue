<template>
    <div>
   <transition name="fade" mode="out-in">

        <span :key="indice"> 

         {{ presentaciones[indice] }}

        </span>

   </transition>
    </div>
</template>
<script>
import { setInterval } from 'timers';
export default {
    
    data(){
        return{ 

            presentaciones:[

            'Pellacos HD -MARTES- 22:30',
            'Mandriles FK -JUEVES- 20:00',
            'YAYA HD -LUNES- 23:30',
            'BUENABUENA WAWA -SABADO- 19:00',
            ],
            indice: 0
        }
    },
    methods:{
mostraranuncio(){
    this.indice++

    if(this.indice == this.presentaciones.length){
    this.indice = 0
     // this.$destroy() es para eliminar una vez termine el  ciclo
    }
}
    },

    mounted() {

         console.log('') 
         setInterval(this.mostraranuncio,3000)
        this.mostraranuncio() 
    }
} 

</script>

<style>

.fade-enter{
 opacity: 0;
}


.fade-enter-active{
 transition: opacity 1s ease-out;
}

.fade-leave-active{
 transition: opacity .6s ease-out;
 opacity: 0;

}


</style>

