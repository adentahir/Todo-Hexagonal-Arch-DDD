import { DomainError } from "@domain/utils/base.exceptions";

export class UserError extends DomainError {
  constructor(msg?: string) {
    super(msg);
    this.name = this.constructor.name;
    DomainError.captureStackTrace(this, this.constructor);
  }
}

export class UserNotFound extends UserError {
  constructor(msg = "User not found") {
    super(msg);
  }
}

export class InvalidUserData extends UserError {
  constructor(msg = "Invalid user data") {
    super(msg);
  }
}
