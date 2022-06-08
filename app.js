const express = require('express'); //returns a function

//express app
const app = express(); //invoking the function to create an instance of express app

//morgan
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogroutes = require('./routes/blogroutes');
//connect to mongoDB
const dbUI = 'mongodb+srv://nodejsuser:nodejs123@cluster0.287q1fq.mongodb.net/nodejs?retryWrites=true&w=majority'
//register view engine
mongoose.connect(dbUI, { useNewUrlParser: true, useUnifiedTopology: true})
 .then((result) => app.listen(3000))
 .catch((err) => console.log(err));

app.set('view engine','ejs');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));


//routes
app.get('/', (req, res) =>{
    res.redirect('/blogs');
});

app.get('/about', (req, res) =>{
    res.render('about', { title: 'About'});
});

//blog routes
app.use('/blogs', blogroutes);

//404 page
app.use((req,res) => {
    res.status(404).render('404', { title: '404'});
});
