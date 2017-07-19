const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	/*db.collection('Todos').find({
		_id: new ObjectID('596fa50838cd4739149c756b')
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fecth todos', err);
	});*/

	db.collection('Users').find({name: 'DJ'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 4));
	}, (err) => {
		console.log('Unable to fecth todos', err);
	});

	db.close();
});