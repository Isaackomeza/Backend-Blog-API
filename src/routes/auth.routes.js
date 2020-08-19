import express from 'express';
import jwt from 'jsonwebtoken';
import {} from 'dotenv/config';
import {verifyUser} from '../middlewares/auth';

const {SECRET_KEY} = process.env;

const route = express.Router();


route.post('/posts',verifyUser, (req, res) => {
    jwt.verify(req.token, 'SECRET_KEY', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else{
            res.json({
                message: 'Post created .....',
                authData
            });
        }
    })

});

route.post('/login', (req, res) => {
    const user = {
        username: 'isaackomeza',
        email: 'isaackomeza@gmail.com'
    }
    jwt.sign({user},'SECRET_KEY', { expiresIn: '30s'},(err, token)=> {
        res.json({
            token
        });
    });
});



export default route;
