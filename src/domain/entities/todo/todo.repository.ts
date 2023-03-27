import {BaseRepository} from "@domain/utils/base.repository";
import {TodoEntity} from "@domain/entities/todo/todo.entity";

export default abstract class TodoRepository extends BaseRepository<TodoEntity> {
	abstract fetch(id: TodoEntity["id"]): Promise<TodoEntity>;
	abstract fetchAll(): Promise<TodoEntity[]>;
	abstract insert(entity: TodoEntity): Promise<TodoEntity>;
	abstract update(entity: TodoEntity): Promise<TodoEntity>;
	abstract delete(id: TodoEntity["id"]): Promise<TodoEntity>;
}
