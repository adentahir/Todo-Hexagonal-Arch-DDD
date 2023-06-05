import { UserEntity } from "@domain/pseudo-entities/user/user.entity";
import { NewUserDto, UserDto } from "@app/dto/user.dto";
import { EmailService, SendEmailData, SendEmailError, SendEmailResponse } from '@app/services/external/email/email.service';
import { UserRepository } from "@domain/pseudo-entities/user/user.repository";
import { AppResult} from "@carbonteq/hexapp";
import { Result } from "oxide.ts/dist";


export class UserService {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly emailService: EmailService,
	) {
		this.userRepository = userRepository;
		this.emailService = emailService;
	}

	async createNewUser({ data }: NewUserDto): Promise<AppResult<UserDto>> {
		const newUser = UserEntity.createWithPassword(
			data.email,
			data.name,
			data.password,
		);

		const res = await this.userRepository.insert(newUser);

		  // Send welcome email
		  const sendEmailData: Pick<SendEmailData, 'to'> = {
			to: data.email,
		  };
	  
		  const emailResult: Result<SendEmailResponse, SendEmailError> = await this.emailService.sendWelcomeEmail(sendEmailData as SendEmailData);
		  if (emailResult.isErr()) {
			AppResult.fromErr(emailResult.unwrapErr());
		  }
		

		return AppResult.Ok(UserDto.from(res));
	}

	async createOpenIdUser(): Promise<AppResult<UserDto>> {
		const s = UserEntity.create("", "");
		return AppResult.Ok(UserDto.from(s));
	}

	
}
