import express, { Request, Response } from 'express';
const app = express();

app.use(express.json());


let todos = [{id: 1, title: 'buy trees'},
            {id: 2, title: 'plot traction'},
            {id: 3, title: 'plant trees'},
            {id: 4, title: 'water trees'}];

app.get('/', (req: Request, res: Response)=>{
    res.status(200).send(todos)
});

 app.get('/todos/:id', (req: Request, res: Response)=>{
    const todo = todos.find(((t)=> t.id === parseInt(req.params.id)));
    if(!todo) res.status(404).send('The todo with the given ID was not found');
    res.status(200).json({todo});
   
})


app.post('/todos/add', (req: Request, res: Response)=>{
    const todo = {
        id: todos.length + 1,
        title: req.body.title
    }
    todos.push(todo);
    res.status(201).json({todos});
})

app.put('/todos/:id', (req: Request, res: Response)=>{
    
    const todo = todos.find(((t)=> t.id === parseInt(req.params.id)));
    if(!todo) res.status(404).send('The todo with the given ID was not found');
    else todo.title = req.body.title;
    res.status(200).send('Todo updated successfully' + todo);
})

app.delete('todos/:id', (req: Request, res: Response)=>{
    
    const todo = todos.find(((t)=> t.id === parseInt(req.params.id)));
    if(!todo) res.status(404).send('The todo with the given ID was not found');
    else{
        const index = todos.indexOf(todo);
        todos.splice(index, 1);
        res.status(200).send('Todo deleted successfully' + todo);
    } 
    
})


app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})


