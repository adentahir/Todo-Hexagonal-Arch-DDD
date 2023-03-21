import { IUser, UserEntity } from "@domain/pseudo-entities/user/user.entity";
import { IEntity } from "@domain/utils/base.entity";

type NewUserData = Omit<IUser, "verified" | keyof IEntity>;

export abstract class BaseDto<T> {
  abstract serialize(): T;
}

export class NewUserDto {
  private constructor(readonly data: NewUserData) { }

  // result monad
  static create(data: unknown): NewUserDto {
    // perform validation
    // create dto with validated data
    // return dto
  }
}

type PublicUser = Omit<IUser, "password">;

export class UserDto extends BaseDto<PublicUser> {
  private constructor(private readonly data: PublicUser) {
    super();
  }

  static from(user: UserEntity): UserDto {
    return new UserDto(user);
  }

  // serialize
  serialize(): PublicUser {
    const { name, email, verified, id, createdAt, updatedAt } = this.data;

    return {
      name,
      email,
      verified,
      id,
      createdAt,
      updatedAt,
    };
  }
}
