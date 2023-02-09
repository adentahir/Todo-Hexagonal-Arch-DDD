import { Request, Response } from 'express';
const todos = require('../models/todo');
//todoIndex, todoShow, todoCreate, todoUpdate, todoDelete

const todoIndex = (req : Request, res : Response) => {
   
    res.status(200).send(todos);
}

const todoShow = (req : Request, res : Response) => {
    const todo = todos.find(((t: { id: number; })=> t.id === parseInt(req.params.id)));
    if(!todo) res.status(404).send('The todo with the given ID was not found');
    res.status(200).json({todo});
   
}

const todoCreate = (req : Request, res : Response) => {
    
    const todo = {
        id: todos.length + 1,
        title: req.body.title
    }
    todos.push(todo);
    res.status(201).json({todos});
}

const todoUpdate = (req : Request, res : Response) => {
    const todo = todos.find(((t: { id: number; })=> t.id === parseInt(req.params.id)));
    if(!todo) res.status(404).send('The todo with the given ID was not found');
    else todo.title = req.body.title;
    res.status(200).send('Todo updated successfully' + todo);
    
    }

const todoDelete = (req : Request, res : Response) => {
    const todo = todos.find(((t: { id: number; })=> t.id === parseInt(req.params.id)));
    if(!todo) res.status(404).send('The todo with the given ID was not found');
    else {
        const index = todos.indexOf(todo);
        todos.splice(index, 1);
    }
}

export { todoIndex, todoShow, todoCreate, todoUpdate, todoDelete };
