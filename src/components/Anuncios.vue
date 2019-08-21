<template>
    <div>
        <span> 

         {{ presentaciones[indice] }}

        </span>
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
    this.$destroy()
    }
}
    },
    beforeCreate() {

       console.log('beforeCreate') 

    },
    created() {
        
         console.log('created') 
         
    },
    beforeMount() {

         console.log('beforeMount') 
    },
    mounted() {

         console.log('mounted') 
         setInterval(this.mostraranuncio,2000)
        this.mostraranuncio()
    },
    beforeUpdate() {

         console.log('beforeUpdate') 
        
    },
    updated() {
        
         console.log('updated') 
    },
    beforeDestroy() {
        
         console.log('beforeDestroy') 
    },
    destroyed() {
        
         console.log('destroyed') 
    }
} 

</script>