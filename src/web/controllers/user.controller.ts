import { Request, Response } from "express";
import safeExec from "../../utils/safeExec";
import { NewUserDto, UserDto } from "@app/dto/user.dto";
import { UserService } from "@app/services/user.service";
import { handleResult } from "../../utils/handleResult";
import { InvalidUserData } from "@domain/pseudo-entities/user/user.exceptions";

export default class UserController {
	private readonly userService: UserService;

	constructor(userService: UserService) {
		this.userService = userService;
	}

	userCreate = async (req: Request, res: Response) => {
		const dto = NewUserDto.create(req.body);
		const handleUserDtoResult = handleResult<NewUserDto, InvalidUserData, void>((error: InvalidUserData) => {
			res.status(400).json({ message: error.message });
		  }, 
		  async (userDto: NewUserDto) =>{
			  const user = await this.userService.createNewUser(userDto);
			  res.status(201).json(user);
		  })
		safeExec(res, async () => {
			handleUserDtoResult(dto)
		});
	};


}
