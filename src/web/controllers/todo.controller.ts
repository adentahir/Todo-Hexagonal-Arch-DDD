import TodoService from "@app/services/todo.service";
import { Request, Response } from "express";
import safeExec from "../../utils/safeExec";
import { NewTodoDto } from "../../application/dto/todo.dto";
import { InvalidTodoData } from "../../domain/entities/todo/todo.exceptions";

class TodoController {
  private readonly todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  getAll = async (req: Request, res: Response) => {
    safeExec(res, async () => {
      const todoItems = await this.todoService.getAll();
      res.status(200).json(todoItems);
    });
  };

  todoShow = async (req: Request, res: Response) => {
    const id = req.params.id;
    safeExec(res, async () => {
      const todoItem = await this.todoService.getById(id);
      res.status(200).json(todoItem);
    });
  };

  todoCreate = async (req: Request, res: Response) => {
    const todoResult = NewTodoDto.create(req.body);

    safeExec(res, async () => {
      todoResult.map(async (todoDto: NewTodoDto) => {
        const todoItem = await this.todoService.createTodo(todoDto);
        res.status(201).json(todoItem);
      }).mapErr((error: InvalidTodoData) => {
        res.status(400).json({ message: error.message });
      });
    });
  };

  todoUpdate = async (req: Request, res: Response) => {
    const todoResult = NewTodoDto.create(req.body);
    safeExec(res, async () => {
      todoResult.map(async (todoDto: NewTodoDto) => {
        const todoItem = await this.todoService.update(todoDto);
        res.status(200).json(todoItem);
      }).mapErr((error: InvalidTodoData) => {
        res.status(400).json({ message: error.message });
      });
    });
  };

  deleteTodo = async (req: Request, res: Response) => {
    const id = req.params.id;
    safeExec(res, async () => {
      const todoItem = await this.todoService.delete(id);
      res.status(200).json(todoItem);
    });
  };
}

export default TodoController;
