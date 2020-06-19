import Sequelize, { Model } from 'sequelize';

export default class Contato extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',

            },

            telefone: {
                type: Sequelize.STRING,
                defaultValue: '',

            },

            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: 'Email Inválido'
                    },
                },
            },

            mensagem: {
                type: Sequelize.TEXT,
                defaultValue: '',

            },


        }, {
            sequelize
        });
        return this;
    }

}
