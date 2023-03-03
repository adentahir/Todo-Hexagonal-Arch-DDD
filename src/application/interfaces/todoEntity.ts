import { BaseEntity } from "../../domain/entities/baseEntity";
import { TodoValidator } from "./todoValidator";

export interface ITodo {
    id: number;
    title: string;
    userId: number;
  }
  export class Todo extends BaseEntity {
    private _title: string;
    readonly userId: number;
  
    constructor(id: number, title: string, userId: number) {
      super(id);
      this._title = TodoValidator.validateTitle(title);
      this.userId = TodoValidator.validateUserId(userId);
    }
    
    public get title(): string {
      return this._title;
    }
    
    public set title(title: string) {
      this._title = TodoValidator.validateTitle(title);
    }
  
    static fromOther(other: ITodo): Todo {
      const { id, title, userId } = other;
      return new Todo(id, title, userId);
    }
    
    serialize(): ITodo {
      const { id, title, userId } = this;
      return {
        id,
        title,
        userId,
      };
    }
    
    static deserialize(data: any): Todo {
      if (typeof data !== "object" || data === null) {
        throw new Error("Invalid data format");
      }
      
      const { id, title, userId } = data;
      
      return new Todo(
        TodoValidator.validateId(id),
        TodoValidator.validateTitle(title),
        TodoValidator.validateUserId(userId)
        );
      }
    }
    
    
    export default Todo;
    
    // export function isPositiveInteger(value: any): value is number {
    //   return typeof value === "number" && Number.isInteger(value) && value > 0;
    // }