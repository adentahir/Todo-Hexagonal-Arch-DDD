import express, { Request, Response } from 'express';
import todoController from '../controllers/todoController';
import getUser from '../../application/interfaces/usecases/user/getUser';

const todoRouter = express.Router();

 //todoIndex, todoShow, todoCreate, todoUpdate, todoDelete
// todoRouter.get('/', todoIndex);
// todoRouter.get('/todos/:id', todoShow);
// todoRouter.post('/todos/add', todoCreate);
// todoRouter.put('/todos/:id', todoUpdate);
// todoRouter.delete('todos/:id', todoDelete);

export default todoRouter;