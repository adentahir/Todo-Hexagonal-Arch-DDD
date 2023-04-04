import { UserEntity } from "@domain/pseudo-entities/user/user.entity";
import { NewUserDto, UserDto } from "@app/dto/user.dto";
import { InvalidUserData, UserExists } from "@domain/pseudo-entities/user/user.exceptions";
import { UserRepository } from "@domain/pseudo-entities/user/user.repository";
import { AppResult, Monadic } from "@carbonteq/hexapp";

export class UserService {
	constructor(
		private readonly userRepository: UserRepository,
	) {
		this.userRepository = userRepository;
	}

	async createNewUser({ data }: NewUserDto): Promise<AppResult<UserDto>> {
		const newUser = UserEntity.createWithPassword(
			data.email,
			data.name,
			data.password,
		);

		const res = await this.userRepository.insert(newUser);
		

		return AppResult.Ok(UserDto.from(res));
	}

	async createOpenIdUser(): Promise<AppResult<UserDto>> {
		const s = UserEntity.create("", "");
		return AppResult.Ok(UserDto.from(s));
	}

	
}
