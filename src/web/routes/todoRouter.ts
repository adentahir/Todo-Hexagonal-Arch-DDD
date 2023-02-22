import express, { Request, Response } from 'express';
import { todoCreate, todoDelete, todoIndex, todoShow, todoUpdate } from '../controllers/todoController';

const todoRouter = express.Router();

 //todoIndex, todoShow, todoCreate, todoUpdate, todoDelete
todoRouter.get('/', todoIndex);
todoRouter.get('/todos/:id', (todoShow));
todoRouter.post('/todos/add', (todoCreate));
todoRouter.put('/todos/:id', (todoUpdate));
todoRouter.delete('todos/:id', (todoDelete));

export default todoRouter;