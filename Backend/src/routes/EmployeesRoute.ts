import express from 'express';
import { validatedToken } from '../security/jwt';

const router = express.Router();

router
    .get('', validatedToken)
    .get('/:id', validatedToken)
    .post('', validatedToken)
    .put('/:id', validatedToken)
    .delete('/:id', validatedToken);

export default router;