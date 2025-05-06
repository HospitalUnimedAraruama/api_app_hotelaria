import logger from "../libs/logger.js";
import Colaborador from "../models/colaborador.model.js"

async function getColaboradores(){
    try {
        return await Colaborador.findAll()
    } catch (error) {
        logger.error(`Repository - getColaboradores ${error}`)
        throw error        
    }
} 

async function getColaboradorId(codColaborador){
    try {
        return await Colaborador.findOne({
            attributes:["codColaborador", "nomeColaborador", "cpfColaborador", "isAdmin"],
            where:{
                codColaborador: codColaborador
            }
        })
    } catch (error) {
        logger.error(`Repository - getColaboradorId ${error}`)
        throw error
    }
}

async function createColaborador(colaborador, senhaHash, salt){
    try {
        return await Colaborador.create({
            ...colaborador, 
            senhaColaborador: senhaHash,
            salt
        })
    } catch (error) {
        logger.error(`Repository - createColaborador ${error}`)
        throw error
    }
}

async function deleteColaborador(codColaborador) {
    try {
        return Colaborador.destroy({
            where:{
                codColaborador: codColaborador
            }
        })
    } catch (error) {
        logger.error(`Repository - deleteColaborador ${error}`)
        throw error
    }
}

async function updateColaborador(colaborador) {
    let {codColaborador, nomeColaborador, cpfColaborador, isAdmin} = colaborador
    try {
        return Colaborador.update(
            {
                codColaborador,
                nomeColaborador,
                cpfColaborador,
                isAdmin
            },
            {
                where: {
                    codColaborador: codColaborador
                }
            }
    
        )
    } catch (error) {
        logger.error(`Repository - updateColaborador ${error}`)
        throw error
    }
}

async function updateSenhaColaborador(codColaborador, senhaHash, salt) {
    try {
        return await Colaborador.update(
            {
                senhaHash,
                salt
            },
            {
                where: {
                    codColaborador: codColaborador
                }
            }
        )
    } catch (error) {
        logger.error(`Repository - updateSenhaColaborador ${error}`)
        throw error
    }
}


export default {
    getColaboradores,
    getColaboradorId,
    createColaborador,
    deleteColaborador,
    updateColaborador,
    updateSenhaColaborador
}