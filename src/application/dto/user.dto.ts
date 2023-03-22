import { IUser, UserEntity } from "@domain/pseudo-entities/user/user.entity";
import { IEntity } from "@domain/utils/base.entity";
import { BaseDto } from "@app/dto/base.dto";
import {UserNotFound, InvalidUserData} from "@domain/pseudo-entities/user/user.exceptions"
import { Ok, Err, Result } from 'oxide.ts';
  
type NewUserData = Omit<IUser, "verified" | keyof IEntity>;




export class NewUserDto {
  private constructor(readonly data: NewUserData) { }
  // result monad
  // perform validation
  // create dto with validated data
  // return dto
  static create(data: unknown): Result<NewUserDto, InvalidUserData> {
    if (!data) {
      return Err(new UserNotFound("No user data found"));
    }

    if (typeof data !== "object") {
      return Err(new InvalidUserData("Invalid user data"));
    }
    
    return Ok(new NewUserDto(data as NewUserData));
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
