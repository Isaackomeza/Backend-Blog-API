import jwt from 'jsonwebtoken';
import {} from 'dotenv/config';
import {createError} from 'http-errors';
const {SECRET_KEY} = process.env;



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