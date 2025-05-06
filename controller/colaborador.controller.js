import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from 'dotenv'
import logger from "../libs/logger.js";
env.config()

import colaboradorService from "../service/colaborador.service.js";


async function createColaborador(req, res) {
    
    try {
        const colaboradorBody = req.body
        
        if(colaboradorBody.codColaborador){
            if(await colaboradorService.getColaboradorId(colaboradorBody.codColaborador)){
                return res.status(400).json({message: 'Colaborador já existe.'})
            }
        }

        

        const salt = bcrypt.genSaltSync(10)
        const senhaHash = bcrypt.hashSync(colaboradorBody.senhaColaborador, salt)

        console.log('controller - ', senhaHash, salt);
        
        

        if(!(await colaboradorService.createColaborador(colaboradorBody, senhaHash, salt))){
            return res.status(400).json({message: "Erro na criação do colaborador."})
        }

        return res.status(201).json({message: "Colaborador criado com sucesso."})
        
    } catch (error) {
        logger.error(error)
        res.status(500).send({message: 'Erro ao criar colaborador.'})
    }
    
}

export default{
    createColaborador
}