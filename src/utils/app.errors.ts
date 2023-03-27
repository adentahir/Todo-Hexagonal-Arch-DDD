export class AppError extends Error {
  httpStatus: number;

  constructor(message: string, httpStatus: number) {
    super(message);
    this.name = this.constructor.name;
    this.httpStatus = httpStatus;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class DatabaseError extends AppError {
  constructor(message: string = "An error occurred while accessing the database") {
    super(message, 500);
  }
}

export class ValidationError extends AppError {
  constructor(message: string = "An error occurred while validating data") {
    super(message, 400);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = "Requested resource not found") {
    super(message, 404);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "Unauthorized access") {
    super(message, 401);
  }
}
