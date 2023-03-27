import { DomainError } from "@domain/utils/base.exceptions";

export class UserNotFound extends DomainError {
  constructor(msg = "User not found") {
    super(msg);
  }
}

export class InvalidUserData extends DomainError {
  constructor(msg = "Invalid user data") {
    super(msg);
  }
}

export class UserExists extends DomainError {
  constructor(msg = "User already exists") {
    super(msg);
  }

}

export class InvalidPasswordError extends DomainError {
  constructor(msg = "Invalid password") {
    super(msg);
  }
}

export class InvalidEmail extends DomainError {
  constructor(msg = "Invalid email") {
    super(msg);
  }
}

export class InvalidName extends DomainError {
  constructor(msg = "Invalid name") {
    super(msg);
  }
}




