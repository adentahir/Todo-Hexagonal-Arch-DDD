import { Result } from 'oxide.ts';

export function handleResult<T, E, R>(
  handleErr: (error: E) => R,
  handleSuccess: (value: T) => R
): (result: Result<T, E>) => R {
  return (result: Result<T, E>) => {
    if (result.isOk()) {
      return handleSuccess(result.unwrap());
    } else {
      return handleErr(result.unwrapErr());
    }
  };
}
