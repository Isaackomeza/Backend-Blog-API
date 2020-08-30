import Blog from '../models/blogsCollection';
import mongoose from 'mongoose';


export const create = (req, res) => {
    const blog = new Blog({
        _id: new mongoose.Types.ObjectId(),
        author: req.body.author,
        title: req.body.title,
        description: req.body.description
    });
    blog.save().then(result => {
        console.log(result);
        return res.status(201).json({
            status: 201,
            message: 'blog successfully created',
            data: blog,
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
    Blog.find()
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
    const id = req.params.blogId;
    Blog.findById(id)
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
    const id = req.params.blogId;
    Blog.updateMany({_id: id}, {$set: {    
        author: req.body.author,
        title: req.body.title,
        description: req.body.description
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

export const deleteBlog = (req, res) => {
const id = req.params.blogId;
Blog.remove({_id: id})
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