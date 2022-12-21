console.log(Vue)
//Options API : la configuracion de Vue trabaja con opciones una de ellas estemplate

const numeros = [1, 2, 2, 3, 4]

const estudiantes = [{ nombre: 'jess', apellido: 'yan' , direccion:'inca'}]

console.log(estudiantes)
const app = Vue.createApp({
    data() {
        //sirve para declarar propiedades reactivas
        return{
        arreglo:estudiantes,
       
        estudianteNombre:null,
        estudianteApellido:null,
        estudianteDireccion:null
        }
    },
    methods: {
       
        agregarEstudianteModificador(event) {
            console.log('mensaje')
            console.log(event)
            
            const estudianteObjetoNuevo={
                nombre: this.estudianteNombre,
                apellido: this.estudianteApellido,
                direccion: this.estudianteDireccion
            }
            this.arreglo.unshift(estudianteObjetoNuevo)
        }
    }
})
app.mount('#myApp3')
