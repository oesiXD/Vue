
export default {

  namespace:true,
  
  state: {
    usuario: null,
  },
  mutations: {
    actualizarUsuario(state, usuario) {
      state.usuario = usuario
    },
   
  },
  actions: {
    //se cambia el cerrarSecion por un salir 
  cerrarSecion({commit}){
  commit('actualizarUsuario',null)
}
  },
  getters:{
    saludo(state){

      if(!state.usuario) {return ''}

      
      let vocal = state.usuario.sexo && state.usuario.sexo == 'F' ? 'a' : 'o'

      return  `¡Bienvenid${vocal} ${state.usuario.nombres}!`

    },

    Despadida(state){

      if(!state.usuario) {return ''}

      return  `Esperamos que regreses pronto por aqui ${state.usuario.nombres}!`

    }

  }
}
