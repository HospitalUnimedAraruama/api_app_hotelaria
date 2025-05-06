import express from 'express'
const app = express()
import {dbConnection, testConnection} from './database/dbConnection.js'
import Colaborador from './models/colaborador.model.js'
import TipoLimpezas from './models/tipo_limpeza.model.js'
import Setor from './models/setor.model.js'
import RegistroLimpezas from './models/registro_limpeza.model.js'
import winston from 'winston'


import colaboradorRouter from './router/colaborador.router.js'

const PORT = 3001


app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))



// Colaborador.sync({alter: true, force: true})
// TipoLimpezas.sync({alter: true})
// Setor.sync({alter: true})
// RegistroLimpezas.sync({alter: true})


// Rotas
app.use(colaboradorRouter)


app.listen(PORT, (error)=>{
    if(error) console.error(`Erro ao iniciar servidor. ${error}`)

    console.info(`*** Servidor iniciado na porta ${PORT} ***`)

    if(testConnection){
        testConnection()
    }
}) 


