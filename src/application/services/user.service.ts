import { UserEntity } from "@domain/pseudo-entities/user/user.entity";
import { NewUserDto, UserDto } from "@app/dto/user.dto";
import { Ok, Err, Result } from 'oxide.ts';
import { InvalidUserData, UserExists } from "@domain/pseudo-entities/user/user.exceptions";
import { UserRepository } from "@domain/pseudo-entities/user/user.repository";

export class UserService {
	constructor(
		private readonly userRepository: UserRepository,
	) {
		this.userRepository = userRepository;
	}

	async createNewUser({ data }: NewUserDto): Promise<Result<UserDto, InvalidUserData | UserExists>> {
		const newUser = UserEntity.createWithPassword(
			data.email,
			data.name,
			data.password,
		);

		const user = await this.userRepository.insert(newUser);
		if(!user){
			return Err(new UserExists());
		}	

		return Ok(UserDto.from(user));
	}

	async createOpenIdUser(): Promise<UserDto> {
		const s = UserEntity.create("", "");
		return UserDto.from(s)
	}

	
}
