var express = require("express");
var bodyParser = require("body-parser");
const port = process.env.PORT || 4242;
const mongoose = require('mongoose');



var app = express()

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }));

//===========================
// CONNECTION DATABASE .
//===========================

mongoose.connect('mongodb://localhost:27042/mern-pool',
{
    useNewUrlParser: true,
    // useFinderAndModify: false,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error",console.error.bind(console,"Connection failed."));
db.once("open",function (){
    console.log("Connection successfull.");
})

//===========================
// ROUTES .
//===========================

app.get('/sign_up', function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var pass = req.body.password;
	var phone = req.body.phone;
	var data = {
		"name": name,
		"email": email,
		"password": pass,
		"phone": phone
	}
	db.collection('students').insertOne(data, function (err, collection) {
		if (err) throw err;
		collection.update();
		console.log("Record inserted Successfully");

	});
	return res.render('signup_success.html');
})

app.post('/sign_up', function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;
	var phone = req.body.phone;
	var data = {
		"name": name,
		"email": email,
		"password": password,
		"phone": phone
	}
	db.collection('students').insertOne(data, function (err, collection) {
		if (err) throw err;
		console.log("Record inserted Successfully");

	});
	return res.render('signup_success.html');
})

app.get('/', function (req, res) {
	res.set({
		'Access-control-Allow-Origin': '*'
	});
	return res.render('index.html');
}).listen(port, () => { console.log('Server app listening on port ' + port); });