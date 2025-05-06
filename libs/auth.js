import jwt from 'jsonwebtoken'
import decode from "jsonwebtoken"
import env from 'dotenv'
import logger from './logger.js'
env.config()


export default (req, res, next)=>{
    
    try {
        
        const dataToken = req.header('authorization')
        
        if(!dataToken){
            return res.status(401).json({message: 'Token não é válido ou não foi encontrado.'})
        }
    
        jwt.verify(dataToken, process.env.API_KEY, (error, data)=>{
            if(error){
                return res.status(401).json({message: 'Token inválido.'})
            }
            next()
        })
    } catch (error) {
        logger.error(error)
        return res.status(401).json({message: 'Token inválido'})        
    }
}