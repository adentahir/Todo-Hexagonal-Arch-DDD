import { UserEntity } from "@domain/pseudo-entities/user/user.entity";
import { NewUserDto, UserDto } from "@app/dto/user.dto";
import { UserRepository } from "@domain/pseudo-entities/user/user.repository";

export class UserService {
	constructor(
		private readonly userRepository: UserRepository,
	) {
		this.userRepository = userRepository;
	}

	async createNewUser({ data }: NewUserDto): Promise<UserDto> {
		const newUser = UserEntity.createWithPassword(
			data.email,
			data.name,
			data.password,
		);

		const user = await this.userRepository.insert(newUser);

		return UserDto.from(user);
	}

	async createOpenIdUser(): Promise<UserDto> {
		const s = UserEntity.create("", "");
		return UserDto.from(s)
	}

	
}
