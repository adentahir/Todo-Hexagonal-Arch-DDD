import { NextFunction, Request, Response } from 'express';
import db from '../../utils/db.server';

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

const userCreate = (req : Request, res : Response) => {
    
    const {name, email, password} = req.body
    const result = db.user.create({
        
        data: {
            name: name,
            email: email,
            password: password,
           
        },
    })

    // jwt.sign({ user: result }, "secretkey", (err: any, token: any) => {

    //     res.json({
    
    //       token
    
    //     });
    
    //   });
    
    res.status(201).json({result});
}

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







    

export { userCreate };
