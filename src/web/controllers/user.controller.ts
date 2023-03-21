import { Request, Response } from "express";
import safeExec from "../../utils/safeExec";
import { NewUserDto } from "@app/dto/user.dto";
import { UserService } from "@app/services/user.service";

export default class UserController {
	private readonly userService: UserService;

	constructor(userService: UserService) {
		this.userService = userService;
	}

	userCreate = async (req: Request, res: Response) => {
		const dto = NewUserDto.create(req.body);
		safeExec(res, async () => {
			const user = await this.userService.createNewUser(dto);
			res.status(201).json(user);
		});
	};


}
