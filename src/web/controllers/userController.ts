import { NextFunction, Request, Response } from 'express';
import db from '../../utils/db.server';
import User from '../../domain/entities/user';
import userRepository from '../../infrastructure/repositories/userRepository';


 const userCreate = async (req : Request, res : Response) => {
    const {name, email, password} = req.body
    const repo = new userRepository();
    const result = await repo.create(new User(name, email, password));
    res.status(201).json({result});
}

const getUser = async (req : Request, res : Response) => {
    const {id} = req.params
    const repo = new userRepository();
    const result = await repo.get(Number(id));
 
    res.status(200).json({result});
}

// const jwt = require("jsonwebtoken");


// function verifyToken(req: Request, res: Request, next: NextFunction) {

//     const bearerHeader = req.headers["authorization"];
  
//     if (typeof bearerHeader !== "undefined") {
  
//       const bearerToken = bearerHeader.split(" ")[1];
  
//       req.token = bearerToken;
  
//       next();
  
//     } else {
  
//       res.sendStatus(403);
  
//     }
  
//   }

// const userCreate = (req : Request, res : Response) => {
    
//     const {name, email, password} = req.body
//     const result = db.user.create({
        
//         data: {
//             name: name,
//             email: email,
//             password: password,
           
//         },
//     })

    // jwt.sign({ user: result }, "secretkey", (err: any, token: any) => {

    //     res.json({
    
    //       token
    
    //     });
    
    //   });
    

// const loginUser = (req: Request, res: Response) => {
//     const decoded = jwt.verify(req.token, "secretkey");
//     // check if user is in database
//     // if user is in database
   


// }

// const userAuth = (req : Request, res : Response) => {
//     res.send('userAuth');

// } 

// const userLogout = (req : Request, res : Response) => {
//     res.send('userLogout');
// }







    

export { userCreate, getUser };
