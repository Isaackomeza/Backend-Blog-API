
import users from '../models/users-collection';
import { v4 as uuidv4 } from 'uuid';


export const readAll = (req, res) => {
    if (!users) {
        return res.status(404).json({
            status: 404,
            error: 'No User found',
        });
    }
    return res.status(200).json({
        status: 200,
        message: 'users successfully retrieved',
        data: {
            users,
        },
    });
};
export const readById = (req, res) => {
    const id = req.params.id;
    const user = users.filter((user) => {
        return user.id === id;
    });
    if (user[0]) {
        return res.status(200).json({
            status: 200,
            message: 'user successfully retrieved',
            data: user,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'user not found',
    });

};
export const create = (req, res) => {
    const user = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: 'user'
    };
    users.push(user);
    return res.status(201).json({
        status: 201,
        message: 'user successfully created',
        data: user,
    });

};

export const update=(req,res)=>{
    const id = req.params.id;
    const user = users.filter((user) => {
        return user.id === id;
    });
    if(user[0]){
        user[0].username=req.body.username;
        user[0].email=req.body.email;
        user[0].password= req.body.password;
        return res.status(200).json({
            status: 200,
            message: 'user successfully updated',
            data: user,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'user not found',
    });
    
}

export const deleteUser=(req,res)=>{
    const id=req.params.id;
    const user = users.filter((user) => {
        return user.id === id;
    });
    if(user[0]){
        var a = users.indexOf(user[0]);
        users.splice(a, 1);
        return res.status(200).json({
            status: 200,
            message: 'user successfully deleted',
            data: user,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'user not found',
    });
}