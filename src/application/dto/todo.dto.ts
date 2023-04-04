import { ITodo, TodoEntity } from "@domain/entities/todo/todo.entity";
import { IEntity } from "@domain/utils/base.entity";
import { BaseDto, DtoValidationResult} from '@carbonteq/hexapp';
import { z } from 'zod';

type NewTodoData = Omit<ITodo, "id" | "createdAt" | "updatedAt"| keyof IEntity>;


export class NewTodoDto extends BaseDto {
  private static readonly schema = z.object({
    title: z.string().nonempty(),
    userId: z.string().nonempty(),
  });

  private constructor(readonly data: NewTodoData) { super()}
  // result monad 
  static create(data: unknown): DtoValidationResult<NewTodoDto> {
    const res = BaseDto.validate<{title: string, userId: string}>(NewTodoDto.schema, data)
    return res.map((data) => new NewTodoDto(data));
  }
  
}


type PublicTodo = Omit<NewTodoData, "updatedAt" | "createdAt" | "id">;

export class TodoDto extends BaseDto {
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
