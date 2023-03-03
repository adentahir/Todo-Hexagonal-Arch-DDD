import  Todo  from "../../application/interfaces/todoEntity";
import TodoDto, { ITodoDto } from "../../application/interfaces/DTOs/todoDto"; 
import  todoService  from "../../application/services/todoService";
import { Request, Response } from 'express';

 class todoController
{
    private readonly todoService: todoService;
    constructor(todoService: todoService) {
        this.todoService = todoService;
    }



     todoIndex = async (req : Request, res : Response) => {
    try {
        const todoItems = await this.todoService.getAll();
        res.status(200).json(todoItems);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
}

 todoShow = async (req : Request, res : Response) => {
    const id = req.params.id
    try {
        const todoItem = await this.todoService.getById(Number(id));
        res.status(201).json(todoItem);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }

}

 todoCreate = async (req : Request, res : Response) => {
    const todoDto = req.body as ITodoDto;
    try {
        const todoItem = await this.todoService.create(todoDto);
        res.status(201).json(todoItem.serialize());
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
}

 todoUpdate = async (req : Request, res : Response) => {
    const id = req.params.id
    const todoDto = req.body as ITodoDto;
    try {
        const todoItem = await this.todoService.update(Number(id), todoDto);
        res.status(200).json(todoItem);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
}

 todoDelete = async ({params:{id}} : Request, {status} : Response) => {
    try {
        const todoItem = await this.todoService.delete(Number(id));
        status(200).json(todoItem);
      } catch (err ) {
        status(500).json({ message: Error});
      }
 }
}

export default todoController