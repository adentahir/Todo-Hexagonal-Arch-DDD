import db from '../../utils/db.server';
import todo from '../../domain/entities/todo';
  export class todoRepository {
    public static async create(todo: { title: string; userId: number; }) {
        const newTodo = await db.todo.create({
            data: {
                title: todo.title,
                userId: todo.userId,
            },
        });
        return newTodo;
    }
    public static async findByTitle(title: string) {
        const todo = await db.todo.findUnique({
            where: {
                
            },
        });
        return todo;
    }
    public static async findAll() {
        const todos = await db.todo.findMany();
        return todos;
    }
    public static async update(todo: { id: number; title: string; }) {
        const updatedTodo = await db.todo.update({
            where: {
                id: todo.id,
            },
            data: {
                title: todo.title,
            },
        });
        return updatedTodo;
    }
    public static async delete(todo: { id: number; }) {
        const deletedTodo = await db.todo.delete({
            where: {
                id: todo.id,
            },
        });
        return deletedTodo;
    }
}