import comments from '../models/commentsCollection';
import { v4 as uuidv4 } from 'uuid';


export const readAll = (req, res) => {
    if (!comments) {
    return res.status(404).json({
            status: 404,
            error: 'No comment found',
        });
    }
    
    return res.status(200).json({
        status: 200,
        comment: 'comments successfully retrieved',
        data: {
            comments,
        },
    });
};
export const readById = (req, res) => {
    const id = req.params.id;
    const comment = comments.find((comment) => {
        return comment.id === id;
    });
    if (comment) {
        return res.status(200).json({
            status: 200,
            comment: 'comment successfully retrieved',
            data: comment,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'comment not found',
    });

};
export const create = (req, res) => {
    const comment = {
        id: uuidv4(),
        name:req.body.name,
        email: req.body.email,
        comment: req.body.comment
    };
    comments.push(comment);
    return res.status(201).json({
        status: 201,
        message: 'comment successfully created',
        data: comment,
    });

};

export const update=(req,res)=>{
    const id = req.params.id;
    const comment = comments.find((comment) => {
        return comment.id === id;
    });
    if(comment){
        comment.name= req.body.name;
        comment.email=req.body.email;
        comment.comment=req.body.comment;
        
        return res.status(200).json({
            status: 200,
            comment: 'comment successfully updated',
            data: comment,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'comment not found',
    });
    
}

export const deleteComment=(req,res)=>{
    const id=req.params.id;
    const comment = comments.find((comment) => {
        return comment.id === id;
    });
    if(comment){
        var a = comments.indexOf(comment);
        comments.splice(a, 1);
        return res.status(200).json({
            status: 200,
            comment: 'comment successfully deleted',
            data: comment,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'comment not found',
    });
}