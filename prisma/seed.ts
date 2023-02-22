import db from '../src/utils/db.server'


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
    

for (const u of userData) {
    const user = await db.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }

}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })  

