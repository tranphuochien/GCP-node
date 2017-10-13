var bodyParser = require('body-parser');

var data = [{
	item: 'todo1'
}, {
	item: 'todo2'
}, {
	item: 'todo3'
}, {
	item: 'todo4'
}]

var urlencodedParser = bodyParser.urlencoded({
	extended: false
});

module.exports = function(app, db) {
	app.get('/todo', function(req, res) {
		db.find({}, function(err, data) {
			if (err) throw err;

			res.render('todo', {
				todos: data
			});
		});

	});

	app.post('/todo', urlencodedParser, function(req, res) {
		//data.push(req.body);
		var newTodo = db(req.body).save(function(err, data) {
			if (err) throw err;
			res.json(data);
		});

	});

	app.delete('/todo/:item', function(req, res) {
		db.find({
			item: req.params.item.replace(/\-/g, " ")
		}).remove(function(err, data) {
			if (err) throw err;
			res.json(data)
		});

	});

	app.get('/', function(req, res) {
		res.send("use /api/bookstore to access...");
	});

	app.get('/api/bookstore', function(req, res) {
		res.send("welcome");
	})
};