import Todo from "../interfaces/todoEntity"
import TodoDto from "../interfaces/DTOs/todoDto";
import TodoRepository  from "../../infrastructure/repositories/todoRepository"

// todoservice will have an instance of todoRepository
export default class TodoService {
  
  constructor(private readonly todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async create(todoDto: TodoDto): Promise<Todo> {
    // fix the id
    const todo = new Todo(0, todoDto.title, todoDto.userId)
    
    return await this.todoRepository.create(todo);
  }

  async getAll(): Promise<Todo[]> {
    return await this.todoRepository.getAll();
  }

  async getById(id: number): Promise<Todo> {
    return await this.todoRepository.get(id);
  }

  async update(id: number, todoDto: TodoDto): Promise<Todo> {
    // Perform validation checks on todoDto here if needed
    const todo = new Todo(id, todoDto.title, todoDto.userId)
    return await this.todoRepository.update(id, todo);
  }

  async delete(id: number): Promise<Todo> {
    return await this.todoRepository.delete(id);
  }
}
