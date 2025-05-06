import ColaboradorRepository from '../repository/colaborador.repository.js'
import logger from '../libs/logger.js';

async function getColaboradores() {
    try {
      return await ColaboradorRepository.getColaboradores();
    } catch (error) {
      logger.error(`Service - Erro ao buscar colaboradores: ${error.message}`);
      throw new Error('Erro ao buscar colaboradores');
    }
}

async function getColaboradorId(codColaborador) {
    try {
      return await ColaboradorRepository.getColaboradorId(codColaborador)
    } catch (error) {
      logger.error(`Service - Erro ao buscar colaboradore pelo seu ID: ${error.message}`);
      throw new Error('Erro ao buscar colaborador por ID');
    }
}

async function createColaborador(colaborador, senhaHash, salt) {
    console.log('service - ', senhaHash, salt);
    
    try {
      return await ColaboradorRepository.createColaborador(colaborador,  senhaHash, salt)
    } catch (error) {
      logger.error(`Service - Erro na criacao do colaborador: ${error.message}`);
      throw new Error('Erro ao criar colaborador');
    }
}
  
async function deleteColaborador(codColaborador) {
    try {
      return ColaboradorRepository.deleteColaborador(codColaborador)
    } catch (error) {
      logger.error(`Service - Erro ao excluir o colaborador ${codColaborador}: ${error.message}`);
      throw new Error('Erro na exclusao do colaborador');
    }
}
  
async function updateColaborador(colaborador) {
    try {
      return ColaboradorRepository.updateColaborador(colaborador)
    } catch (error) {
      logger.error(`Service - Erro ao atualizar o colaborador ${colaborador.codColaborador}: ${error.message}`);
      throw new Error('Erro na atualizacao do colaborador');
    }
}
  
async function updateSenhaColaborador(senhaHash, salt) {
    try {
      return ColaboradorRepository.updateSenhaColaborador(senhaHash, salt)
    } catch (error) {
      logger.error(`Service - Erro ao atualizar a senha do colaborador ${colaborador.codColaborador}: ${error.message}`);
      throw new Error('Erro na atualizacao da senha do colaborador');
    }
}

export default{
    getColaboradores,
    getColaboradorId,
    createColaborador,
    deleteColaborador,
    updateColaborador,
    updateSenhaColaborador
}