import {ITodo, TodoEntity} from "@domain/entities/todo/todo.entity";
import TodoRepository from "@domain/entities/todo/todo.repository";
import { PrismaClient } from "@prisma/client";

class TodoRepositoryPrisma extends TodoRepository {
	constructor(private readonly db: PrismaClient) {
		super();
	}
	async fetch(id: string): Promise<TodoEntity> {
		try {
			const todo = await this.db.todo.findFirst({ where: { id } });
			return TodoEntity.fromOther(todo as ITodo);
		  }
		  catch (err: unknown) {
			throw new Error(`Failed to fetch todo with id ${id}: ${err}`);
		  }
	}
	async fetchAll(): Promise<TodoEntity[]> {
		try {
			const todos = await this.db.todo.findMany();
			return todos.map((todo: ITodo) => TodoEntity.fromOther(todo as ITodo));
		  } catch (err: unknown) {
			throw new Error(`Failed to fetch all todos: ${err}`);
		  }
	}
	async insert(entity: TodoEntity): Promise<TodoEntity> {
		try {
			const todo = await this.db.todo.create({
			  data: {
				title: entity.title,
				userId: entity.userId,
			  },
			});
			return TodoEntity.fromOther(todo as unknown as ITodo);
		  } catch (err: unknown) {
			throw new Error(`Failed to insert todo: ${err}`);
		  }
	}
	async update(entity: TodoEntity): Promise<TodoEntity> {
		try {
			const todo = await this.db.todo.update({
			  where: { id: entity.id },
			  data: {
				title: entity.title,
				userId: entity.userId,
			  },
			});
			return TodoEntity.fromOther(todo as ITodo);
		  }
		  catch (err: unknown) {
			throw new Error(`Failed to update todo with id ${entity.id}: ${err}`);
		  }
	}
	async delete(id: string): Promise<TodoEntity> {
		try {
			const todo = await this.db.todo.delete({ where: { id } });
			return TodoEntity.fromOther(todo as ITodo);
		  }
		  catch (err: unknown) {
			throw new Error(`Failed to delete todo with id ${id}: ${err}`);
		}
	}
	
	  
}

export default TodoRepositoryPrisma;
