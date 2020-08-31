import Comment from '../models/commentsCollection';
import mongoose from 'mongoose';


export const create = (req, res) => {
    const comment = new Comment({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment
    });
    comment.save().then(result => {
        console.log(result);
        return res.status(201).json({
            status: 201,
            message: 'comment successfully created',
            data: comment,
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });


};


export const readAll = (req, res) => {
    Comment.find()
    .exec()
    .then(docs => {
        console.log("From database",docs);
        if (docs.length >= 0){
            res.status(200).json(docs);
        } else {
            res.status(404).json({
                message: 'No entries found'
            });
        }
            
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    });
};
export const readById = (req, res) => {
    const id = req.params.commentId;
    Comment.findById(id)
    .exec()
    .then(doc => {
        console.log("From database",doc);
        if (doc){
            res.status(200).json(doc);
        } else {
            res.status(404).json({message: 'No valid entry found for provided ID'});
        }
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    });

};


export const update = (req, res) => {
    const id = req.params.commentId;
    Comment.updateMany({_id: id}, {$set: {    
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment
    }
    })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

export const deleteComment = (req, res) => {
const id = req.params.commentId;
Comment.remove({_id: id})
.exec()
.then(result => {
    res.status(200).json(result);
})
.catch(err => {
    console.log(err);
    res.status(500).json({
        error: err
    });
});
};