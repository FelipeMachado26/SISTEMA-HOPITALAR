import 'dotenv/config'

import express from 'express'

const porta = 3000
const app = express()

app.use(express.json())

app.get('/', (req , res) =>{
    res.json('ok')
})

app.listen(process.env.PORT, () =>{
    console.log('Servidor inicializado')
})


