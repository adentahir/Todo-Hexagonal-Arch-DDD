// create todo dto will be responsible for the validation and the guards
import { TodoValidator } from "../todoValidator";
 export interface ITodoDto {
    title: string;
    userId: number;
  }
  class TodoDto implements ITodoDto {
    title: string;
    userId: number;
    constructor(title: string, userId: number) {
     
      this.title = TodoValidator.validateTitle(title);
      this.userId = TodoValidator.validateUserId(userId);
     }
  } 
    export default TodoDto;
    