console.log(Vue)
//Options API : la configuracion de Vue trabaja con opciones una de ellas estemplate

const numeros = [1, 2, 2, 3, 4]

const frases = [{ frase: 'la vie est belle', autor: 'grenui' },
{ frase: 'la vie est belle2', autor: 'grenui2' },
{ frase: 'la vie est belle3', autor: 'grenui3' },
{ frase: 'la vie est belle4', autor: 'grenui4' },
{ frase: 'la vie est belle5', autor: 'grenui5' }]

console.log(frases)
const app = Vue.createApp({
    data() {
        //sirve para declarar propiedades reactivas
        return{
        arreglo:frases,
        fraseNueva:null
        }
    },
    methods: {
        agregarFrase(charCode) {
            console.log('mensaje Desestructurado')
            console.log(charCode)
            if(charCode!=13)return
            const fraseObjetoNueva={
                texto: this.fraseNueva,
                autor: 'jessi'
            }
            this.arreglo.unshift(fraseObjetoNueva)
        },
        agregarFraseModificador(event) {
            console.log('mensaje')
            console.log(event.charCode)
            
            const fraseObjetoNueva={
                texto: this.fraseNueva
                //autor: 'jessi'
            }
            this.arreglo.unshift(fraseObjetoNueva)
        }
    }
})
app.mount('#myApp2')
