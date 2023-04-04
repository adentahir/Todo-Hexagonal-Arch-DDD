import { IUser, UserEntity } from "@domain/pseudo-entities/user/user.entity";
import { IEntity } from "@domain/utils/base.entity";
import { BaseDto, DtoValidationResult } from "@carbonteq/hexapp";
import { z } from 'zod';


type NewUserData = Omit<IUser, "verified" | keyof IEntity>;



export class NewUserDto extends BaseDto {
  private static readonly schema = z.object({
    email: z.string().email(),
    name: z.string().nonempty(),
    password: z.string().nonempty().length(6) 
  });
  private constructor(readonly data: NewUserData) { super()}
 
  static create(data: unknown): DtoValidationResult<NewUserDto> {
    const res = BaseDto.validate<{email: string, name: string, password:string}>(NewUserDto.schema, data) 

    return res.map((data) => new NewUserDto(data));
  }
}



type PublicUser = Omit<IUser, "password">;

export class UserDto extends BaseDto {
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
