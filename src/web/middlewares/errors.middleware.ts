import { Request, Response, NextFunction } from "express";
import { TodoNotFound, InvalidTodoData } from "@domain/entities/todo/todo.exceptions";
import { UserNotFound, UserExists, InvalidUserData, InvalidEmail, InvalidPasswordError } from "@domain/pseudo-entities/user/user.exceptions";

export function errorHandlingMiddleware(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (error instanceof TodoNotFound) {
    res.status(404).json({ message: error.message });
  } else if (error instanceof InvalidTodoData) {
    res.status(400).json({ message: error.message });
  } else if (error instanceof UserNotFound) {
    res.status(404).json({ message: error.message });
  } else if (error instanceof InvalidUserData) {
    res.status(400).json({ message: error.message });
  }  else if (error instanceof UserExists) {
    res.status(409).json({ message: error.message });
  } else if (error instanceof InvalidEmail) {
    res.status(400).json({ message: error.message });
  } 
  else if (error instanceof InvalidPasswordError) {
    res.status(400).json({ message: error.message });
  }
   else {
    res.status(500).json({ message: "Internal Server Error" });
  }
}