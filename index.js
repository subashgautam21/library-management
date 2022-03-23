require('./src/db/mongoose');
const express = require('express');
const blog = require('./src/models/blog');

const app = express();
app.use(express.json());


app.post('/blog', async (req, res) => {
    const blog = new blog(req.body);
    try {
        await blog.save();
        res.status(201).send(blog);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get('/blogs', async (req, res) => {
    try {
        const blogs = await blog.find({});
        res.status(200).send(blogs);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get('/blogs/:id', async (req, res) => {
    try {
        const blog = await blog.findById(req.params.id);
        if (!blog) {
            return res.status(404);
        }
        res.status(200).send(blog);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.patch('/blogs/:id', async (req, res) => {
    try {
        const blog = await blog.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!blog) {
            return res.status(404).send();
        }
        res.status(200).send(blog);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.delete('/blogs/:id', async (req, res) => {
    try {
        const blog = await blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).send();
        }
        res.send(blog);
    } catch (error) {
        res.status(500).send(error);
    }
})
app.listen(3000 , (req , res) => {
    console.log('app is running in port 3000!');
})