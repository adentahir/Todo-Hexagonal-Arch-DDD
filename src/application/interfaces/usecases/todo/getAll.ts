import db from '../../../../utils/db.server';
  
const todoIndex = async (req : Request, res : Response) => {
   
    const todos = await db.todo.findMany()
    return todos
}

export { todoIndex };