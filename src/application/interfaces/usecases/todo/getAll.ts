import db from '../../../../utils/db.server';
  
const todoIndex = async () => {
   
    const todos = await db.todo.findMany()
    return todos
}

export default { todoIndex };