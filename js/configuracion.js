console.log(Vue)
//Options API : la configuracion de Vue trabaja con opciones una de ellas estemplate


const app=Vue.createApp({
       // template://`<h2>hola mundo!</h2>{{1+2}}`
   /* opciones:
   template:``,
   data(){

   },
   methods:{

   }
   */
   data(){
            //sirve para declarar propiedades reactivas
            return{
                mensaje: 'hola mundo',
                nombre: 'jess',
                apellido: 'ruiz'
            }
   },
   methods:{
    cambiarNombre(event){
        console.log(event)
        this.nombre='pedro'
    },
    cambiarApellido(event){
        console.log(event)
        this.apellido='lin'
    }
   }
})
app.mount('#myApp')
 