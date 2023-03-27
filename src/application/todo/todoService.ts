import Todo from "./todoEntity";
import TodoDto from "./todoDto";
import TodoRepository from "../../domain/todoRepository";
import { sendSlackMessage } from "../../infrastructure/slack";
import * as dotenv from "dotenv";
import { env } from "process";

dotenv.config();
const slackWebhookUrl = env.SLACK_WEBHOOK_URL as string;

// todoservice will have an instance of todoRepository
export default class TodoService {
	constructor(private readonly todoRepository: TodoRepository) {
		this.todoRepository = todoRepository;
	}

	async create(todoDto: TodoDto): Promise<Todo> {
		const todo = await this.todoRepository.create(todoDto);
		const message = `New Task: ${todoDto.title}`;
		console.log(slackWebhookUrl);
		sendSlackMessage(slackWebhookUrl, message);
		return todo;
	}

	async getAll(): Promise<Todo[]> {
		return await this.todoRepository.getAll();
	}

	async getById(id: number): Promise<Todo> {
		return await this.todoRepository.get(id);
	}

	async update(id: number, todoDto: TodoDto): Promise<Todo> {
		const todo = new Todo(id, todoDto.title, todoDto.userId);
		const message = `Task #${id} updated to: ${todoDto.title} :thumbsup:`;
		sendSlackMessage(slackWebhookUrl, message);
		return await this.todoRepository.update(id, todo);
	}

	async delete(id: number): Promise<Todo> {
		const deletedTodo = await this.todoRepository.delete(id);
		const message = `Task #${id} completed :tada:`;
		sendSlackMessage(slackWebhookUrl, message);
		return deletedTodo;
	}
}
