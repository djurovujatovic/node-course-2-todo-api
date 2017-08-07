const {ObjectID} = require('mongodb');


const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5988cab8a103832438b45c22";
var userID = "598382879d3348054ce193a4";

if(!ObjectID.isValid(id)) {
	console.log('ID not valid');
}

/*Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
	if(!todo) {
		return console.log('ID not found');
	}

	console.log('Todo By ID', todo);
}).catch((e) => console.log(e));*/


User.findById(userID).then((user) => {
	if(!user) {
		return console.log('ID not found');
	}

	console.log('User By ID', user);
}).catch((e) => console.log(e));


