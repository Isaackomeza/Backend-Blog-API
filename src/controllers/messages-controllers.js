import messages from '../models/messages-collection';
import { v4 as uuidv4 } from 'uuid';


export const readAll = (req, res) => {
    if (!messages) {
        return res.status(404).json({
            status: 404,
            error: 'No message found',
        });
    }
    return res.status(200).json({
        status: 200,
        message: 'messages successfully retrieved',
        data: {
            messages,
        },
    });
};
export const readById = (req, res) => {
    const id = req.params.id;
    const message = messages.filter((user) => {
        return user.id === id;
    });
    if (message[0]) {
        return res.status(200).json({
            status: 200,
            message: 'message successfully retrieved',
            data: message,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'message not found',
    });

};
export const create = (req, res) => {
    const message = {
        id: uuidv4(),
        name:req.body.fullname,
        email: req.body.email,
        phone:req.body.phone,
        message: req.body.message
    };
    messages.push(message);
    return res.status(201).json({
        status: 201,
        message: 'message successfully created',
        data: message,
    });

};

export const update=(req,res)=>{
    const id = req.params.id;
    const message = messages.filter((message) => {
        return message.id === id;
    });
    if(message[0]){
        message[0].name= req.body.name;
        message[0].email=req.body.email;
        message[0].phone=req.body.phone;
        message[0].message=req.body.message;
        
        return res.status(200).json({
            status: 200,
            message: 'message successfully updated',
            data: message,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'message not found',
    });
    
}

export const deleteMessage=(req,res)=>{
    const id=req.params.id;
    const message = messages.filter((message) => {
        return message.id === id;
    });
    if(message[0]){
        var a = messages.indexOf(message[0]);
        messages.splice(a, 1);
        return res.status(200).json({
            status: 200,
            message: 'message successfully deleted',
            data: message,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'message not found',
    });
}