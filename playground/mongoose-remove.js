const {ObjectID} = require('mongodb');


const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.findByIdAndRemove({
	_id: id
}).then((todo) => {
	console.log(todo);
});