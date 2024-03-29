const moongose = require('mongoose');
const Schema = moongose.Schema; //it is a constructor function

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Blog = moongose.model('Blog', blogSchema);
module.exports = Blog;