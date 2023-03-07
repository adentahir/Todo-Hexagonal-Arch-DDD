import { ITodoDto } from "../../application/todo/todoDto";
import todoService from "../../application/todo/todoService";
import { Request, Response } from "express";
import safeExec from "../../utils/safeExec";

class TodoController {
	private readonly todoService: todoService;

	constructor(todoService: todoService) {
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
			const todoItem = await this.todoService.getById(Number(id));
			res.status(201).json(todoItem);
		});
	};

	todoCreate = async (req: Request, res: Response) => {
		const todoDto: ITodoDto = req.body;
		console.log(todoDto);
		safeExec(res, async () => {
			const todoItem = await this.todoService.create(todoDto);
			res.status(201).json(todoItem);
		});
	};

	todoUpdate = async (req: Request, res: Response) => {
		const id = req.params.id;
		const todoDto = req.body as ITodoDto;
		safeExec(res, async () => {
			const todoItem = await this.todoService.update(Number(id), todoDto);
			res.status(200).json(todoItem);
		});
	};

	deleteTodo = async (req: Request, res: Response) => {
		const id = req.params.id;
		safeExec(res, async () => {
			const todoItem = await this.todoService.delete(Number(id));
			res.status(200).json(todoItem);
		});
	};
}

export default TodoController;
