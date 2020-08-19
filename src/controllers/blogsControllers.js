import blogs from '../models/blogsCollection';
import { v4 as uuidv4 } from 'uuid';


export const readAll = (req, res) => {
    if (!blogs) {
        return res.status(404).json({
            status: 404,
            error: 'Blog not accessible',
        });
    }
    return res.status(200).json({
        status: 200,
        blog: 'blogs successfully retrieved',
        data: {
            blogs,
        },
    });
};
export const readById = (req, res) => {
    const id = req.params.id;
    const blog = blogs.find((blog) => {
        return blog.id === id;
    });
    if (blog) {
        return res.status(200).json({
            status: 200,
            blog: 'blog successfully retrieved',
            data: blog,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'blog can not be found',
    });

};
export const create = (req, res) => {
    const blog = {
        id: uuidv4(),
        author:req.body.author,
        title: req.body.title,
        description:req.body.description,
    };
    blogs.push(blog);
    return res.status(201).json({
        status: 201,
        blog: 'blog successfully created',
        data: blog,
    });

};

export const update=(req,res)=>{
    const id = req.params.id;
    const blog = blogs.find((blog) => {
        return blog.id === id;
    });
    if(blog){
        blog.author= req.body.author;
        blog.title=req.body.title;
        blog.description=req.body.description;
        
        return res.status(200).json({
            status: 200,
            blog: 'blog successfully updated',
            data: blog,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'blog not found',
    });
    
}

export const deleteBlog=(req,res)=>{
    const id=req.params.id;
    const blog = blogs.find((blog) => {
        return blog.id === id;
    });
    if(blog){
        var a = blogs.indexOf(blog);
        blogs.splice(a, 1);
        return res.status(200).json({
            status: 200,
            blog: 'blog successfully deleted',
            data: blog,
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'blog not found',
    });
}