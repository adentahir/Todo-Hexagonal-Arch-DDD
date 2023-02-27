import baseRepository from "./baseRepository";
import Todo from "../../domain/entities/todo";
import add from "../../application/interfaces/usecases/todo/addTodo";
import get from "../../application/interfaces/usecases/todo/getTodo";
import show from "../../application/interfaces/usecases/todo/getAll";
import del from "../../application/interfaces/usecases/todo/deleteTodo";
import edit from "../../application/interfaces/usecases/todo/editTodo";


export default class todoRepository extends baseRepository<Todo> {
    public async get(id: number): Promise<Todo> {
        const todo = await get.todoShow(id);
        return new Todo(todo.id, todo.title, todo.userId);
    }
    public async getAll(): Promise<Todo[]> {
        const todos = await show.todoIndex();
        return todos.map((todo) => new Todo(todo.id, todo.title, todo.userId));
    }

    //getUserId() is not defined
    public async create(entity: Todo): Promise<Todo> {
        const todo = await add.todoCreate(entity.getTitle(), entity.getUserId());
        return new Todo(todo.id, todo.title, todo.userId);
    }
    public async update(id: number, entity: Todo): Promise<Todo> {
        const todo = await edit.todoUpdate(id, entity.getTitle());
        return new Todo(todo.id, todo.title, todo.userId);
    }
    public async delete(id: number): Promise<Todo> {
        const todo = await del.todoDelete(id);
        return new Todo(todo.id, todo.title, todo.userId);
    }
}


