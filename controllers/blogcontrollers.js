const Blog = require('../models/blog');


//blog Home page:

const blogHome = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
     .then((result) => {
        res.render('index', { title: 'All Blogs', blogs: result});
     })
     .catch((err) => {
         console.log(err);
     })
}

const blogDetails = (req,res) => {
    const id = req.params.id;
    Blog.findById(id)
     .then((result) =>{
         res.render('details', { blog: result, title: 'Blog Details' })
     })
     .catch((err) => {
        res.status(404).render('404', {title: "Blog not found"})
    })
}

const createBlog = (req, res) => {
    res.render('create', { title: 'New Blog'});
}

const postNewBlog = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
     .then((result) =>{
         res.redirect('/blogs');
     })
     .catch((err) => {
        console.log(err);
    })
}

const deleteBlog = (req, res) =>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
     .then(result =>{
         res.json({ redirect: '/blogs' })
     })
     .catch((err) => {
        console.log(err);
    })
}

module.exports = {
    blogHome,
    blogDetails,
    createBlog,
    postNewBlog,
    deleteBlog
}