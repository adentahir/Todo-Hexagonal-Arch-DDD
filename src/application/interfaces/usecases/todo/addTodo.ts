
import db from '../../../../utils/db.server';

const todoCreate = (title: string, userId: number) => {
    
    
     const result = db.todo.create({
    
        data: {
            title: title,
            userId: userId,
        }       
    });

    return result
}

export default { todoCreate };
