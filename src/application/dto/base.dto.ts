export abstract class BaseDto<T> {
    abstract serialize(): T;
  }