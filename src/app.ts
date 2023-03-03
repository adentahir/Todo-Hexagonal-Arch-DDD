import express, { Request, Response } from 'express';
import todoRouter from './web/routes/todoRouter';
import userRouter from './web/routes/userRouter';
import authRouter from './web/routes/authRouter';
const app = express();


app.use(express.json());
// first round of validqations 
app.use(todoRouter);
app.use(userRouter);
app.use(authRouter);

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})


