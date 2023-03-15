export class DomainError extends Error {
  protected constructor(msg?: string) {
    super(msg);
  }
}

export class NotFound extends DomainError {
  protected constructor(msg?: string) {
    super(msg);
  }
}

export class InvalidData extends DomainError {
  protected constructor(msg?: string) {
    super(msg);
  }
}
