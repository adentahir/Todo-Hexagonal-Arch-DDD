"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var safeExec_1 = require("../../utils/safeExec");
var UserController = /** @class */ (function () {
    function UserController(userService) {
        var _this = this;
        this.userCreate = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var todoDto;
            var _this = this;
            return __generator(this, function (_a) {
                todoDto = req.body;
                (0, safeExec_1["default"])(res, function () { return __awaiter(_this, void 0, void 0, function () {
                    var todoItem;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.userService.create(todoDto)];
                            case 1:
                                todoItem = _a.sent();
                                // make a serilize function in userEntity and use it here...
                                res.status(201).json(todoItem);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); };
        this.getUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id;
            var _this = this;
            return __generator(this, function (_a) {
                id = req.params.id;
                (0, safeExec_1["default"])(res, function () { return __awaiter(_this, void 0, void 0, function () {
                    var todoItem;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.userService.getUser(Number(id))];
                            case 1:
                                todoItem = _a.sent();
                                res.status(201).json(todoItem);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); };
        this.userService = userService;
    }
    return UserController;
}());
exports["default"] = UserController;
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
