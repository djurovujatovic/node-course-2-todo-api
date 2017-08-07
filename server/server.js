var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = newTodo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	})
});

app.listen(3000, () => {
	console.log('Started on port 3000');
});


module.exports = {app};



/*var newUser = new User({
	email: 'test@testlocker.net'
});

newUser.save().then((doc) => {
	console.log('Saved user', doc);
}, (e) => {
	console.log('Unable to save user');
});*/

/*var newTodo = new Todo({
	text: 'New Task',
	completed: true,
	completedAt: 123
});

newTodo.save().then((doc) => {
	console.log('Saved todo', doc);
}, (e) => {
	console.log('Unable to save todo');
});*/