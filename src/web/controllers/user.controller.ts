import { Request, Response, NextFunction } from "express";
import { NewUserDto } from "@app/dto/user.dto";
import { UserService } from "@app/services/user.service";
import { handleResult } from "../../utils/handleResult";

export default class UserController {
  private readonly userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  userCreate = async (req: Request, res: Response, next: NextFunction) => {
      const userDtoResult = NewUserDto.create(req.body);
      if (userDtoResult.isOk()) {
        const userDto = userDtoResult.unwrap();
        const userResult = await this.userService.createNewUser(userDto);
        return handleResult(res, userResult, 201);
      }
     else {
      next(userDtoResult);
    }
  };
}
