import Todo from '../../application/interfaces/todoEntity';
import TodoRepository from './todoRepository';
import db from '../../utils/db.server';
import TodoDto from '../../application/interfaces/DTOs/todoDto';



class TodoRepositoryImpl extends TodoRepository {


  private todos: Todo[] = [];

  public async get(id: number): Promise<Todo> {
    const todo = await db.todo.findUnique({
        where: {
            id: id,
        }
    })
    if (!todo) {
        throw new Error('Todo not found');
    }

    else return new Todo(todo.id, todo.title, todo.userId)
  }

  public async getAll(): Promise<Todo[]> {
    const todos = await db.todo.findMany()
    return todos.map(todo => new Todo(todo.id, todo.title, todo.userId));
  }

  public async create(todo: TodoDto): Promise<Todo> {
    const newTodo = await db.todo.create({
        data: {
            title: todo.title,
            userId: todo.userId
        }
    })
    return new Todo(newTodo.id, newTodo.title, newTodo.userId);
  }

  public async update(id: number, todoDto: TodoDto): Promise<Todo> {
    const updatedTodo = await db.todo.update({
        where: { id: id },
        data: { title: todoDto.title },
    })
    return new Todo(updatedTodo.id, updatedTodo.title, updatedTodo.userId);
  }

  public async delete(id: number): Promise<Todo> {
    const deletedTodo = await db.todo.delete({
        where: { id: id }
    })
    return new Todo(deletedTodo.id, deletedTodo.title, deletedTodo.userId);
  }
}

export default TodoRepositoryImpl;
