import { Response } from 'express';
  
import {
  AppResult,
  AppErrStatus,
  DtoValidationError,
  AppError,
  DtoValidationResult,
} from '@carbonteq/hexapp';

export class HttpResponse {
  static sendFromAppResult<T>(result: AppResult<T>, res: Response): void {
    if (result.isOk()) {
      res.send(result.unwrap());
      return;
    }

    const err = result.unwrapErr();
    const errorMessage = err.message;

    switch (err.status) {
      case AppErrStatus.Unauthorized:
        throw AppError.Unauthorized(errorMessage);
      case AppErrStatus.InvalidData:
        throw AppError.InvalidData(errorMessage);
      case AppErrStatus.AlreadyExists:
        throw AppError.AlreadyExists(errorMessage);
      case AppErrStatus.NotFound:
        throw AppError.NotFound(errorMessage);
      case AppErrStatus.InvalidOperation:
        throw AppError.InvalidOperation(errorMessage);
      case AppErrStatus.ExternalServiceFailure:
        throw AppError.ExternalServiceFailure(errorMessage);
      default:
        console.log("sendFromAppResult default case");
        throw AppError.Generic("An unknown error occurred");
    }
  }

  // change this to app result only.
  static fromError(err: unknown): AppError | DtoValidationError {
    
    if (err instanceof DtoValidationResult) {
        console.log("caught as dto validation error :", err);
        const DtoError = new DtoValidationError(err.unwrapErr().message);
       return DtoError;
    } 
    console.log("caught as app result error:", err);
        return AppError.fromErr(err as Error);
    }
}
