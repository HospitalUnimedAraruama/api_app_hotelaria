import { Sequelize, DataTypes } from "sequelize";
import { dbConnection } from "../database/dbConnection.js";
import Colaborador from "./colaborador.model.js";
import Setor from "./setor.model.js";
import TipoLimpez from "./tipo_limpeza.model.js";


const RegistroLimpez = dbConnection.define('registro_limpez', {
    codRegistroLimpeza: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tempoLimpeza: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dtLimpeza: {
      type: DataTypes.DATE,
      allowNull: false
    },

    // chaves estrangeiras
    codColaborador:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    codSetor:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    codTpLimpeza:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
  }
);

RegistroLimpez.belongsTo(Colaborador, {foreignKey: 'codColaborador' })
RegistroLimpez.belongsTo(Setor, {foreignKey: 'codSetor'})
RegistroLimpez.belongsTo(TipoLimpez, {foreignKey: 'codTpLimpeza'})

export default RegistroLimpez