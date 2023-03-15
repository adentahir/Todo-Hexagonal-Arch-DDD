export abstract class BaseValueObject<T> {
  abstract serialize(): T;
}
