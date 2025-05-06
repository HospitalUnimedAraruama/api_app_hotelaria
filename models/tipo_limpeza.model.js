import { DataTypes, Sequelize } from "sequelize";
import { dbConnection } from "../database/dbConnection.js";

const TipoLimpeza = dbConnection.define('tipo_limpeza', {
    codTpLimpeza: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    dsTpLimpeza:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default TipoLimpeza