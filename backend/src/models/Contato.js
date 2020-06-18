import Sequelize, { Model } from 'sequelize';

export default class Contato extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Nome precisa ter entre 3 e 255 caracteres'
                    }
                },
            },

            telefone: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isNumeric: {
                        len: {
                            min: 10,
                            max: 11,
                            msg: 'Telefone precisa ter entre 10 e 11 números'
                        }
                    },
                },
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
                type: Sequelize.STRING,
                defaultValue: '',
                validade: {
                    min: 5,
                    max: 1024,
                    msg: 'mensagem precisa ter entre 5 e 1024 caracteres'
                },
            },


        }, {
            sequelize
        });
        return this;
    }

}
