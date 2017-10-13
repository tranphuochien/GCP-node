var express = require("express");
var todoController = require('./controllers/todoController');
var app = express();
var mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

//set up view engine 
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//connect to Mongoose 
var promise = mongoose.connect('mongodb://admin:123@ds155684.mlab.com:55684/todoapp', {
	useMongoClient: true
})

//Create a default schema 
var todoSchema = new mongoose.Schema({
	item: String
});

var Todo = mongoose.model('Todo', todoSchema);

//fire controller
todoController(app, Todo);



///============================================//


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});