import { Request, Response } from 'express';
import Todo from "../../domain/entities/todo"
import TodoRepository from "../../infrastructure/repositories/todoRepository"  

const todoIndex = async (req : Request, res : Response) => {
    const todoRepository = new TodoRepository()
    const todos = await todoRepository.getAll()
    res.json(todos)
}

const todoShow = async (req : Request, res : Response) => {
    const { id } = req.params
    const todoRepository = new TodoRepository()
    const todo = await todoRepository.get(Number(id))
    res.status(200).json({todo});
}

const todoCreate = async (req : Request, res : Response) => {
    const {title, userId} = req.body
    const todoRepository = new TodoRepository()
    const todo = await todoRepository.create(new Todo(0, title, userId))
    res.status(201).json({todo});
}

const todoUpdate = async (req : Request, res : Response) => {
    const { id } = req.params
    const {title} = req.body
    const todoRepository = new TodoRepository()
    const todo = await todoRepository.update(Number(id), new Todo(Number(id), title, 0))
    res.status(200).send('Todo updated successfully');
}

const todoDelete = async (req : Request, res : Response) => {
    const { id } = req.params
    const todoRepository = new TodoRepository()
    const todo = await todoRepository.delete(Number(id))
    res.status(200).send('Todo deleted successfully');
}

export { todoIndex, todoShow, todoCreate, todoUpdate, todoDelete }


// const todoIndex = async (req : Request, res : Response) => {
   
    
//     const todos = await db.todo.findMany()
//     res.json(todos)
// }

// const todoShow = async (req : Request, res : Response) => {
//     const { id } = req.params
//     const todo = await db.todo.findUnique({
//         where: {
//             id: parseInt(id),
//         }
//     })

//     if(!todo) res.status(404).send('The todo with the given ID was not found');
//     res.status(200).json({todo});
   
// }

// const todoCreate = (req : Request, res : Response) => {
    
//     const {name, email, password, title} = req.body
//     const result = db.user.create({
        
//         data: {
//             name: name,
//             email: email,
//             password: password,
//             todos: {
//                 create: {
//                     title: title,
//                 },
//             },
//         },
//     })

    
    
//     res.status(201).json({result});
// }

// const todoUpdate = async (req : Request, res : Response) => {

//     const { id } = req.params
//     const todoData = await db.todo.findUnique({
//         where: { id: Number(id) || undefined },
//     })
//     const updatedTodo = await db.todo.update({
//         where: { id: Number(id) || undefined },
//         data: { title: req.body.title || undefined },
//     })

//     res.status(200).send('Todo updated successfully').json({updatedTodo});
    
//     }

// const todoDelete = async (req : Request, res : Response) => {

//     const { id } = req.params
//     const todo = await db.todo.delete({
//       where: {
//         id: Number(id),
//       },
//     })
//     res.json(todo)
// }


    

