import TodoService from "@app/services/todo.service";
import { NextFunction, Request, Response } from "express";
import { NewTodoDto } from "../../application/dto/todo.dto";
import { handleResult } from "../../utils/handleResult";

class TodoController {
  private readonly todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  getAll = async (req: Request, res: Response) => {
    const todoItemsResult = await this.todoService.getAll();
    await handleResult(res, todoItemsResult, 200);
  };

  todoShow = async (req: Request, res: Response) => {
    const id = req.params.id;
    const todoItemResult = await this.todoService.getById(id);
    await handleResult(res, todoItemResult, 200);
  };

  todoCreate = async (req: Request, res: Response, next: NextFunction) => {
      const todoDtoResult = NewTodoDto.create(req.body);
      if (todoDtoResult.isOk()) {
        const todoItemResult = await this.todoService.createTodo(todoDtoResult.unwrap());
        return handleResult(res, todoItemResult, 201);
      }
      else {
        next(todoDtoResult);
      }
  };

  todoUpdate = async (req: Request, res: Response, next: NextFunction) => {
    const todoDtoResult = NewTodoDto.create(req.body);
    if (todoDtoResult.isOk()) {
    const todoItemResult = await this.todoService.update(todoDtoResult.unwrap());
    return handleResult(res, todoItemResult, 200);
  } else {
    next(todoDtoResult);
  }
  };

  deleteTodo = async (req: Request, res: Response) => {
    const id = req.params.id;
    const todoItemResult = await this.todoService.delete(id);
    await handleResult(res, todoItemResult, 200);
  };

}

export default TodoController;
