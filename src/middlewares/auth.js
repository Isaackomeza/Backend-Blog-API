import jwt from 'jsonwebtoken';
import {} from 'dotenv/config';
import {createError} from 'http-errors';
const {SECRET_KEY} = process.env;

// export const verifyUser = (req,res, next) => {
//     authorization = req.headers['authorization'];
//     if(authorization){
//         const bearerToken = authorization.split(' ')[1];
//         const token = jwk.verify(bearerToken, SECRET_KEY);
//         if(token){
//             res.user = token;
//             next();
//         } else {
//             res.send(createError.authorization());
//         }
//     } else{
//         res.send(createError.authorization());
//     }
// }

export const verifyUser = (req, res, next)=>{
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else{
        res.sendStatus(403);
    }
};