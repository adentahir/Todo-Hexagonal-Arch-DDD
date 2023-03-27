import {DomainError} from "../../../domain/utils/base.exceptions";
  
  export class TodoNotFound extends DomainError {
    constructor(msg = "Todo not found") {
      super(msg);
    }
  }
  
  export class InvalidTodoData extends DomainError {
    constructor(msg = "Invalid todo data") {
      super(msg);
    }
  }
  