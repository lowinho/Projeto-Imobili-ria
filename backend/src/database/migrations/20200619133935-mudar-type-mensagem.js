module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.changeColumn(
        'contatos',
        'mensagem', {

            type: Sequelize.TEXT,
            allowNulll: false,

        },
    ),

    down: () => {},
};
