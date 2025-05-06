import { DataTypes, Sequelize } from "sequelize";
import { dbConnection } from "../database/dbConnection.js";

const Setor = dbConnection.define('setor', {
    codSetor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    dsSetor:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Setor