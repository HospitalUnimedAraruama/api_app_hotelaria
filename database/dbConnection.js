import { Sequelize } from "sequelize";

const dbConnection = new Sequelize('hotelaria', 'dba', 'uni@@290', {
    host: '10.150.0.11',
    dialect: 'postgres'
});

export {
    dbConnection,
    testConnection
}



// Testa a conexão
async function testConnection() {
    try {
      await dbConnection.authenticate();
      console.log('🟢 Conexão com o banco de dados estabelecida com sucesso 🟢');
    } catch (error) {
      console.error('🔴 Não foi possível conectar ao banco de dados:', error);
    }
  }
  