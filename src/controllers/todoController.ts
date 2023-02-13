import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

//const todos = require('../models/todo');
//todoIndex, todoShow, todoCreate, todoUpdate, todoDelete
  


const todoIndex = async (req : Request, res : Response) => {
   
    // res.status(200).send(todos);
    const users = await prisma.user.findMany()
    res.json(users)
}

const todoShow = async (req : Request, res : Response) => {
    const { id } = req.params
    const todo = await prisma.user.findUnique({
        where: {
            id: parseInt(id),
        }
    })

    if(!todo) res.status(404).send('The todo with the given ID was not found');
    res.status(200).json({todo});
   
}

const todoCreate = (req : Request, res : Response) => {
    
    const {name, email, password, title} = req.body
    const result = prisma.user.create({
        
        data: {
            name: name,
            email: email,
            password: password,
            todos: {
                create: {
                    title: title,
                },
            },
        },
    })

    
    // todos.push(todo);
    res.status(201).json({result});
}

const todoUpdate = async (req : Request, res : Response) => {

    const { id } = req.params
    const todoData = await prisma.todo.findUnique({
        where: { id: Number(id) || undefined },
    })
    const updatedTodo = await prisma.todo.update({
        where: { id: Number(id) || undefined },
        data: { title: req.body.title || undefined },
    })

    // const todo = todos.find(((t: { id: number; })=> t.id === parseInt(req.params.id)));
    // if(!todo) res.status(404).send('The todo with the given ID was not found');
    // else todo.title = req.body.title;
    res.status(200).send('Todo updated successfully').json({updatedTodo});
    
    }

const todoDelete = async (req : Request, res : Response) => {

    const { id } = req.params
    const todo = await prisma.todo.delete({
      where: {
        id: Number(id),
      },
    })
    res.json(todo)

    // const todo = todos.find(((t: { id: number; })=> t.id === parseInt(req.params.id)));
    // if(!todo) res.status(404).send('The todo with the given ID was not found');
    // else {
    //     const index = todos.indexOf(todo);
    //     todos.splice(index, 1);
    // }
}
    

export { todoIndex, todoShow, todoCreate, todoUpdate, todoDelete };
