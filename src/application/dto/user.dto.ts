import { IUser, UserEntity } from "@domain/pseudo-entities/user/user.entity";
import { IEntity } from "@domain/utils/base.entity";
import { BaseDto } from "@app/dto/base.dto";
import {InvalidUserData, InvalidPasswordError, InvalidEmail} from "@domain/pseudo-entities/user/user.exceptions"
import { Ok, Err, Result } from 'oxide.ts';
  
type NewUserData = Omit<IUser, "verified" | keyof IEntity>;




export class NewUserDto {
  private constructor(readonly data: NewUserData) { }
  // result monad
  // perform validation
  // create dto with validated data
  // return dto
  static create(data: unknown): Result<NewUserDto, InvalidUserData | InvalidPasswordError> {
    // Perform validation
    if (typeof data !== "object" || data === null) {
      return Err(new InvalidUserData("Invalid user data: data must be an object"));
    }
  
    const typedData = data as Partial<NewUserData>;
    const { email, name, password } = typedData;
  
    if (typeof email !== "string" || email.trim().length === 0) {
      return Err(new InvalidEmail("Invalid user data: email must be a non-empty string"));
    }
    
  
    if (typeof name !== "string" || name.trim().length === 0) {
      return Err(new InvalidUserData("Invalid user data: name must be a non-empty string"));
    }
  
    // Add this block to validate the password field
    if (typeof password !== "string" || password.trim().length === 0) {
      return Err(new InvalidPasswordError("Invalid user data: password must be a non-empty string"));
    }
  
    // Create dto with validated data
    return Ok(new NewUserDto(typedData as NewUserData));
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
