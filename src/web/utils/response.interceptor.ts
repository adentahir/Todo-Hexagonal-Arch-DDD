import { AppResult, AppError } from "@carbonteq/hexapp";
import { Request, Response, NextFunction } from "express";

const transformData = <T>(data: AppResult<T> | T): T | AppError => {
  if (data instanceof AppResult) {
    if (data.isErr()) {
      return data.unwrapErr();
    }
    return data.unwrap();
  } else {
    return data;
  }
};

export const AppTransformerExpressMiddleware = (
  _req: Request,
  resp: Response,
  next: NextFunction
) => {
    console.log("AppTransformerExpressMiddleware");
  const oldSend = resp.send;

  resp.send = function <T>(
    this: Response,
    data: AppResult<T> | T | Promise<AppResult<T> | T>
  ): Response {
    console.log("AppTransformerExpressMiddleware send:", data);
    if (data instanceof Promise) {
      data
        .then((d: AppResult<T> | T) => {
          const finalData = transformData(d);
          oldSend.call(resp, finalData);
        })
        .catch((err: unknown) => {
          next(err);
        });
    } else {
      try {
        const finalData = transformData(data);
        oldSend.call(resp, finalData);
      } catch (err) {
        next(err);
      }
    }

    return this;
  };

  next();
};
