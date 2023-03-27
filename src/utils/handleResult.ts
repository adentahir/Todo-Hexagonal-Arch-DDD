import { Response } from "express";
import { Result } from "oxide.ts";
import { DomainError } from "@domain/utils/base.exceptions"; 	

export async function handleResult<T>(
  res: Response,
  result: Result<T, DomainError>,
  successStatus: number
): Promise<void> {
  if (result.isOk()) {
    res.status(successStatus).json(result.unwrap());
  } else {
    throw result.unwrapErr();
  }
}




