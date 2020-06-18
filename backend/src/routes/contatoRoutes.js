import { Router } from 'express';
import contatoController from '../controllers/ContatoController';
// import allowCors from '../middlewares/cors';

const router = new Router();

router.get('/', contatoController.index)
router.post('/', contatoController.store)
router.get('/:id', contatoController.show)
router.put('/:id', contatoController.update)
router.delete('/:id', contatoController.delete)

export default router;
