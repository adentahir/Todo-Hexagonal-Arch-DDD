import baseRepository from "../../domain/baseRepository";
import Todo from "../../application/interfaces/todoEntity";

 

export default abstract class TodoRepository extends baseRepository<Todo> {
     abstract get(id: number): Promise<Todo>;
     abstract getAll(): Promise<Todo[]>;
     abstract create(entity: Todo): Promise<Todo>; 
     abstract update(id: number, entity: Todo): Promise<Todo>; 
     abstract delete(id: number): Promise<Todo>;
}


