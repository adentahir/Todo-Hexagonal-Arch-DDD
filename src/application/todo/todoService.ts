import Todo from "./todoEntity";
import TodoDto from "./todoDto";
import TodoRepository from "../../domain/todoRepository";

// todoservice will have an instance of todoRepository
export default class TodoService {
	constructor(private readonly todoRepository: TodoRepository) {
		this.todoRepository = todoRepository;
	}

	async create(todoDto: TodoDto): Promise<Todo> {
		return await this.todoRepository.create(todoDto);
	}

	async getAll(): Promise<Todo[]> {
		return await this.todoRepository.getAll();
	}

	async getById(id: number): Promise<Todo> {
		return await this.todoRepository.get(id);
	}

	async update(id: number, todoDto: TodoDto): Promise<Todo> {
		const todo = new Todo(id, todoDto.title, todoDto.userId);
		return await this.todoRepository.update(id, todo);
	}

	async delete(id: number): Promise<Todo> {
		return await this.todoRepository.delete(id);
	}
}
