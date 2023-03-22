import { ITodoDto } from "../../application/todo/todoDto";
import todoService from "../../application/todo/todoService";
import { Request, Response } from "express";
import safeExec from "../../utils/safeExec";
import { Channel, EventPayload, Topic } from "estacion";
const { EventBus } = require("estacion");

class TodoController {
	private readonly todoService: todoService;
	private readonly bus = new EventBus();
	private readonly todoChannel = this.bus.channel("TODO");
	private readonly todoCreatedTopic = this.todoChannel.topic("created");
	private readonly todoUpdatedTopic = this.todoChannel.topic("updated");
	private readonly todoRemovedTopic = this.todoChannel.topic("removed");

	constructor(todoService: todoService) {
		this.todoService = todoService;

		this.todoCreatedTopic.addListener(this.loggingComponent);
		this.todoRemovedTopic.addListener(this.loggingComponent);
		this.todoUpdatedTopic.addListener(this.loggingComponent);
	}

	private loggingComponent = (event: {
		channel: Channel;
		topic: Topic;
		payload: EventPayload;
	}) => {
		console.log(event.channel); // channel name: TODO
		console.log(event.topic); // topic name: removed or added or updated
		console.log(event.payload); // custom payload (data) from the event
	};

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
			res.status(200).json(todoItem);
		});
	};

	todoCreate = async (req: Request, res: Response) => {
		const todoDto: ITodoDto = req.body;
		safeExec(res, async () => {
			this.todoCreatedTopic.emit(todoDto);
			const todoItem = await this.todoService.create(todoDto);
			res.status(201).json(todoItem);
		});
	};

	todoUpdate = async (req: Request, res: Response) => {
		const id = req.params.id;
		const todoDto = req.body as ITodoDto;
		safeExec(res, async () => {
			this.todoUpdatedTopic.emit(todoDto);
			const todoItem = await this.todoService.update(Number(id), todoDto);
			res.status(200).json(todoItem);
		});
	};

	deleteTodo = async (req: Request, res: Response) => {
		const id = req.params.id;
		safeExec(res, async () => {
			this.todoRemovedTopic.emit({ id: Number(id) });
			const todoItem = await this.todoService.delete(Number(id));
			res.status(200).json(todoItem);
		});
	};
}

export default TodoController;
