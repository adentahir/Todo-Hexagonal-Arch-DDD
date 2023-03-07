import { NextFunction, Request, Response } from "express";
import User from "../../application/user/userEntity";
import UserService from "../../application/user/userService";
import userRepository from "../../domain/userRepository";
import { IUserDto } from "../../application/user/userDto";
import safeExec from "../../utils/safeExec";

export default class UserController {
	private readonly userService: UserService;

	constructor(userService: UserService) {
		this.userService = userService;
	}

	userCreate = async (req: Request, res: Response) => {
		const todoDto = req.body as IUserDto;
		safeExec(res, async () => {
			const todoItem = await this.userService.create(todoDto);
			// make a serilize function in userEntity and use it here...
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
