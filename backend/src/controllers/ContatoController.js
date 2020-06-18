import Contato from '../models/Contato';

class ContatoController {
    async index(req, res) {
        try {
            const contato = await Contato.findAll({ attributes: ["id", "nome", "telefone", "email", "mensagem"] })
            return res.json(contato)
        } catch (e) {
            res.json(null);
        }

    }

    async store(req, res) {
        try {
            const novoContato = await Contato.create(req.body);
            const { id, nome, telefone, email, mensagem } = novoContato;
            return res.json({ id, nome, telefone, email, mensagem });
        } catch (e) {
            res.json({ msg: 'Erro ao enviar dados' });
        }
    }

    async show(req, res) {
        try {
            if (!req.params.id) {
                res.status(400).json({
                    msg: 'Id não encontrado'
                })
            }
            const contato = await Contato.findByPk(req.params.id);
            if (!contato) {
                res.status(400).json({
                    msg: 'Contato não encontrado'
                })
            }
            const { id, nome, telefone, email, mensagem } = contato;
            return res.json({ id, nome, telefone, email, mensagem });
        } catch (e) {
            res.json({ msg: 'Erro ao enviar dados' });
        }
    }

    async update(req, res) {
        try {
            if (!req.params.id) {
                res.status(400).json({
                    msg: 'Id não encontrado'
                })
            }
            const contato = await Contato.findByPk(req.params.id);
            if (!contato) {
                res.status(400).json({
                    msg: 'Contato não encontrado'
                })
            }

            const contatoAtualizado = await contato.update(req.body);
            const { id, nome, telefone, email, mensagem } = contatoAtualizado;
            return res.json({ id, nome, telefone, email, mensagem });
        } catch (e) {
            res.json({ msg: 'Erro ao enviar dados' });
        }
    }

    async delete(req, res) {
        try {
            if (!req.params.id) {
                res.status(400).json({
                    msg: 'Id não encontrado'
                })
            }
            const contato = await Contato.findByPk(req.params.id);
            if (!contato) {
                res.status(400).json({
                    msg: 'Contato não encontrado'
                })
            }

            await contato.destroy(req.body);

            return res.json({ msg: 'CONTATO DELETADO COM SUCESSO' });
        } catch (e) {
            res.json({ msg: 'Erro ao enviar dados' });
        }
    }

}


export default new ContatoController();
