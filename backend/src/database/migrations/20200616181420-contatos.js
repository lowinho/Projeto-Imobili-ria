module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('contatos', {
        id: {
            type: Sequelize.INTEGER,
            allowNulll: false,
            autoIncrement: true,
            primaryKey: true,
        },

        nome: {
            type: Sequelize.STRING,
            allowNulll: false,
        },

        telefone: {
            type: Sequelize.STRING,
            allowNulll: false,
        },

        email: {
            type: Sequelize.STRING,
            allowNulll: false,
        },

        mensagem: {
            type: Sequelize.STRING,
            allowNulll: false,
        },

        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },

        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    }),


    down: (queryInterface) => queryInterface.dropTable('contatos')
};