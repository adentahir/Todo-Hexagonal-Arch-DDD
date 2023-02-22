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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_server_1 = __importDefault(require("../src/utils/db.server"));
const userData = [
    {
        name: 'bobby',
        email: 'bobby@email.com',
        password: '123456',
        todos: {
            create: [
                {
                    title: 'buy trees'
                },
                {
                    title: 'plot traction'
                },
                {
                    title: 'plant trees'
                },
                {
                    title: 'water trees'
                }
            ]
        }
    },
    {
        name: 'ali',
        email: 'ali@email.com',
        password: '123456',
        todos: {
            create: [
                {
                    title: 'Todo with prisma'
                },
                {
                    title: 'Todo 2 with prisma'
                },
                {
                    title: 'Todo 3 with prisma'
                }
            ]
        }
    }
];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (const u of userData) {
            const user = yield db_server_1.default.user.create({
                data: u,
            });
            console.log(`Created user with id: ${user.id}`);
        }
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield db_server_1.default.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield db_server_1.default.$disconnect();
    process.exit(1);
}));
