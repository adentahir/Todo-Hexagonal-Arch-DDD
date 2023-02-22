"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCreate = void 0;
const db_server_1 = __importDefault(require("../../utils/db.server"));
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
const userCreate = (req, res) => {
    const { name, email, password } = req.body;
    const result = db_server_1.default.user.create({
        data: {
            name: name,
            email: email,
            password: password,
        },
    });
    // jwt.sign({ user: result }, "secretkey", (err: any, token: any) => {
    //     res.json({
    //       token
    //     });
    //   });
    res.status(201).json({ result });
};
exports.userCreate = userCreate;
