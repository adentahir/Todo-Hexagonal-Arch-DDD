import express, { Request, Response } from 'express';
import todoRouter from './web/routes/todoRouter';
import userRouter from './web/routes/userRouter';
const app = express();


app.use(express.json());

app.use(todoRouter);
app.use(userRouter);

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})


