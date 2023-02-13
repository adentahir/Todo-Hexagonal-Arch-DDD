import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


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


]



async function main() {
    
// ... you will write your Prisma Client queries here

for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
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

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })  
// 1. Import the PrismaClient constructor from the @prisma/client node module
// 2. Instantiate PrismaClient
// 3. Define an async function named main to send queries to the database
// 4. Call the main function
// 5. Close the database connections when the script terminates
