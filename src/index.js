const Joi = require('joi');
const cors = require('cors');

const express = require('express')
const app = express();
app.use(express.json());


app.use(cors())
app.get('/', (req, res)=> {
  res.send('Hello World!!!');
})

app.get('/api/blogs', (req, res)=> {
  res.send(blogs);
})

app.get('/api/blogs/:id', (req, res) => {
  const blog = blogs.find(b => b.id === parseInt(req.params.id));
  if (!blog) {
  res.status(404).send('The blog with the given ID was not found');
  }else{
    res.send(blog);
  };
});
const port = process.env.PORT || 3000
app.listen(3000, ()=> console.log(`Listening on port ${port}....`));

app.post('/api/blogs', (req, res) => {
  const name = { name: req.body.name };
  const schema = Joi.object({ name: Joi.string().min(3).required() });

  const result = schema.validate(name);

  if (result.error){
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const blog = {
    id: blogs.length + 1,
    name: req.body.name
  };
  blogs.push(blog);
  res.send(blog);
});

app.delete('/api/blogs/:id', (req, res)=> {
  const blog = blogs.find(b => b.id === parseInt(req.params.id));
  if (!blog) {
  res.status(404).send('The blog with the given ID was not found')
};
  const index = blogs.indexOf(blog);
  blogs.splice(index, 1);
  res.send(blog);
})