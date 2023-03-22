import {DomainError} from "../../../domain/utils/base.exceptions";
export class TodoError extends DomainError {
    constructor(msg?: string) {
      super(msg);
      this.name = this.constructor.name;
      DomainError.captureStackTrace(this, this.constructor);
    }
  }
  
  export class TodoNotFound extends TodoError {
    constructor(msg = "Todo not found") {
      super(msg);
    }
  }
  
  export class InvalidTodoData extends TodoError {
    constructor(msg = "Invalid todo data") {
      super(msg);
    }
  }
  