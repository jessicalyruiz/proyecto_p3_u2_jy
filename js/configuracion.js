console.log(Vue)

const app=Vue.createApp({
    template:`<h2>hola mundo!</h2>{{1+2}}`
    
})

app.mount('#myApp')