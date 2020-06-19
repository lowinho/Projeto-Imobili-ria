import { Router } from 'express';
import contatoController from '../controllers/ContatoController';
import { celebrate, Segments, Joi } from 'celebrate';

const router = new Router();

router.get('/', contatoController.index);

router.post('/', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required().min(3).max(50),
        telefone: Joi.string().required().min(14).max(15),
        email: Joi.string().required().email(),
        mensagem: Joi.string().required().min(3).max(1024)
    })
}), contatoController.store);

router.get('/:id', contatoController.show);

router.put('/:id', contatoController.update);

router.delete('/:id', contatoController.delete);

export default router;
