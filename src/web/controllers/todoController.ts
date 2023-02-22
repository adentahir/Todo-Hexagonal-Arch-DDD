import { Request, Response } from 'express';
import db from '../../utils/db.server';
  

const todoIndex = async (req : Request, res : Response) => {
   
    
    const todos = await db.todo.findMany()
    res.json(todos)
}

const todoShow = async (req : Request, res : Response) => {
    const { id } = req.params
    const todo = await db.todo.findUnique({
        where: {
            id: parseInt(id),
        }
    })

    if(!todo) res.status(404).send('The todo with the given ID was not found');
    res.status(200).json({todo});
   
}

const todoCreate = (req : Request, res : Response) => {
    
    const {name, email, password, title} = req.body
    const result = db.user.create({
        
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

    
    
    res.status(201).json({result});
}

const todoUpdate = async (req : Request, res : Response) => {

    const { id } = req.params
    const todoData = await db.todo.findUnique({
        where: { id: Number(id) || undefined },
    })
    const updatedTodo = await db.todo.update({
        where: { id: Number(id) || undefined },
        data: { title: req.body.title || undefined },
    })

    res.status(200).send('Todo updated successfully').json({updatedTodo});
    
    }

const todoDelete = async (req : Request, res : Response) => {

    const { id } = req.params
    const todo = await db.todo.delete({
      where: {
        id: Number(id),
      },
    })
    res.json(todo)
}


    

export { todoIndex, todoShow, todoCreate, todoUpdate, todoDelete };
