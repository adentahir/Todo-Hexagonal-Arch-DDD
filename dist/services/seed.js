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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
        // ... you will write your Prisma Client queries here
        for (const u of userData) {
            const user = yield prisma.user.create({
                data: u,
            });
            console.log(`Created user with id: ${user.id}`);
        }
        //   await prisma.user.create({
        //     data: {
        //       name: 'bob',
        //       email: 'bob123@email.com',
        //       password: '123456',
        //       todos: {
        //         create: {
        //             title: 'Todo with prisma',
        //         },
        //       },
        //     }, 
        //   }
        //   )
        //   const allUsers = await prisma.user.findMany({
        //     include: {
        //       todos: true,
        //     },
        //   })
        //   console.dir(allUsers, { depth: null })
        //   const todo = await prisma.todo.update({
        //     where: { id: 1 },
        //     data: { title: 'updated title' },
        //   })
        //   console.log(todo)
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
// 1. Import the PrismaClient constructor from the @prisma/client node module
// 2. Instantiate PrismaClient
// 3. Define an async function named main to send queries to the database
// 4. Call the main function
// 5. Close the database connections when the script terminates
