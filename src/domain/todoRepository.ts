import baseRepository from "./baseRepository";
import Todo from "../application/todo/todoEntity";
import TodoDto from "../application/todo/todoDto";

export default abstract class TodoRepository extends baseRepository<Todo> {
	abstract get(id: number): Promise<Todo>;
	abstract getAll(): Promise<Todo[]>;
	abstract create(entity: TodoDto): Promise<Todo>;
	abstract update(id: number, entity: Todo): Promise<Todo>;
	abstract delete(id: number): Promise<Todo>;
}
