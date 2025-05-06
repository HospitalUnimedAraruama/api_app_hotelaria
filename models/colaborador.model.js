import { dbConnection } from "../database/dbConnection.js";
import { DataTypes, Sequelize } from "sequelize";


const Colaborador = dbConnection.define('colaborador',{
    codColaborador: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeColaborador: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpfColaborador: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    senhaColaborador:{
        type: DataTypes.STRING,
        allowNull: false
    },
    salt: {
        type: DataTypes.STRING,
        allowNull:false
    },
})

export default Colaborador