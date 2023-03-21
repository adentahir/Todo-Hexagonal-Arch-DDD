import { IUser, UserEntity } from "@domain/pseudo-entities/user/user.entity";
import { IEntity } from "@domain/utils/base.entity";
import { BaseDto } from "@app/dto/base.dto";
import {UserNotFound, InvalidUserData} from "@domain/pseudo-entities/user/user.exceptions"

type NewUserData = Omit<IUser, "verified" | keyof IEntity>;




export class NewUserDto {
  private constructor(readonly data: NewUserData) { }
  // result monad
  // perform validation
  // create dto with validated data
  // return dto
  static create(data: unknown): NewUserDto {
    if (!data) {
      throw new UserNotFound();
    }

    if (typeof data !== "object") {
      throw new InvalidUserData();
    }
    
    return new NewUserDto(data as NewUserData);
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
