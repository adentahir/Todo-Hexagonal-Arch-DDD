import express, { Request, Response } from 'express';
import todoRouter from './routes/todoRouter';
const app = express();


app.use(express.json());

app.use(todoRouter);

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})


