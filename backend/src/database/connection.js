import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Contato from "../models/Contato"; // precisamos importar todos os módulos aqui


const models = [Contato];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models)); // se existir o model ele conecta

module.exports = connection;