import { NextFunction, Request, Response } from "express";
import User from "../../application/user/userEntity";
import userRepository from "../../domain/userRepository";
import { IUserDto } from "../../application/user/userDto";
import safeExec from "../../utils/safeExec";
import { IauthDto } from "../../application/user/authDto";
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

	createGoogleUser = async (req: Request, res: Response) => {
		const authDto = req.body as IauthDto;
		safeExec(res, async () => {
			const todoItem = await this.userService.createGoogleUser(authDto);

			res.status(201).json(todoItem);
		});
	};

	getUser = async (req: Request, res: Response) => {
		const id = req.params.id;
		safeExec(res, async () => {
			const todoItem = await this.userService.getUser(Number(id));
			res.status(201).json(todoItem);
		});
	};

	getUserWithGoogle = async (req: Request, res: Response) => {
		const googleId = req.params.googleId;
		safeExec(res, async () => {
			const todoItem = await this.userService.getUserWithGoogle(googleId);
			res.status(201).json(todoItem);
		});
	};
}

// const jwt = require("jsonwebtoken");

// function verifyToken(req: Request, res: Request, next: NextFunction) {

//     const bearerHeader = req.headers["authorization"];

//     if (typeof bearerHeader !== "undefined") {

//       const bearerToken = bearerHeader.split(" ")[1];

//       req.token = bearerToken;

//       next();

//     } else {

//       res.sendStatus(403);

//     }

//   }

// const userCreate = (req : Request, res : Response) => {

//     const {name, email, password} = req.body
//     const result = db.user.create({

//         data: {
//             name: name,
//             email: email,
//             password: password,

//         },
//     })

// jwt.sign({ user: result }, "secretkey", (err: any, token: any) => {

//     res.json({

//       token

//     });

//   });

// const loginUser = (req: Request, res: Response) => {
//     const decoded = jwt.verify(req.token, "secretkey");
//     // check if user is in database
//     // if user is in database

// }

// const userAuth = (req : Request, res : Response) => {
//     res.send('userAuth');

// }

// const userLogout = (req : Request, res : Response) => {
//     res.send('userLogout');
// }
