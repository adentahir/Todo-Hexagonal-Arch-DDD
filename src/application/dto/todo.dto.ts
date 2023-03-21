import { ITodo, TodoEntity } from "@domain/entities/todo/todo.entity";
import { IEntity } from "@domain/utils/base.entity";
import {InvalidTodoData} from "../../domain/entities/todo/todo.exceptions"
import { BaseDto } from "../dto/base.dto"
import { Ok, Err, Result } from 'oxide.ts';

type NewTodoData = Omit<ITodo, "id" | "createdAt" | "updatedAt"| keyof IEntity>;


export class NewTodoDto {
  private constructor(readonly data: NewTodoData) { }

  // result monad 
  static create(data: unknown): Result<NewTodoDto, InvalidTodoData> {
    // Perform validation
    if (typeof data !== "object" || data === null) {
      return Err(new InvalidTodoData("Invalid todo data: data must be an object"));
    }
  
    const typedData = data as Partial<NewTodoData>;
    const { title, userId } = typedData;
  
    if (typeof title !== "string" || title.trim().length === 0) {
      return Err(new InvalidTodoData("Invalid todo data: title must be a non-empty string"));
    }
  
    if (typeof userId !== "string" || userId.trim().length === 0) {
      return Err(new InvalidTodoData("Invalid todo data: userId must be a non-empty string"));
    }
  
    // Create dto with validated data
    return Ok(new NewTodoDto(typedData as NewTodoData));
  }
  
}




type PublicTodo = Omit<NewTodoData, "updatedAt" | "createdAt" | "id">;

export class TodoDto extends BaseDto<NewTodoData> {
  private constructor(private readonly data: NewTodoData) {
    super();
  }

  static from(user: TodoEntity): TodoDto {
    return new TodoDto(user);
  }

  // serialize
  serialize(): PublicTodo {
    const { title, userId} = this.data;

    return {
      title,
      userId,
    };
  }



}
