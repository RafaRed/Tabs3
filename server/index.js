const express = require("express");
var admin = require("firebase-admin");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
const rateLimit = require("express-rate-limit");
const { initializeApp } = require("firebase-admin/app");
const responseTime = require("response-time");
console.log(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);


admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://tabs3-59553-default-rtdb.firebaseio.com",
});

var db = admin.database();
const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());
app.use(responseTime());
app.use(
	rateLimit({
		windowMs: 1 * 60 * 60 * 1000, // 12 hour duration in milliseconds
		max: 150,
		message: "You exceeded requests hour limit!",
		headers: true,
	})
);

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.get("/", (req, res) => {
	res.send("Express on Vercel");
});

app.post("/create-account", (req, res) => {
    console.log(req.body)
	var _username = req.body.username.replace(".", "*");
	var ref = db.ref("/users/" + _username);
	ref.once("value", function (snapshot) {
		var data = snapshot.val();
		if (data === null) {
			ref.set({
				timestamp: Date.now(),
			});
			res.send({ response: "user " + _username + " created." });
		} else {
			res.send({ response: "user " + _username + " logged in." });
		}
	});
});

app.post("/add-category", (req, res) => {
	var _username = req.body.username.replace(".", "*");
    var _category = req.body.category
    var ref = db.ref("/categories/");
    new_category = ref.push({timestamp: Date.now(),name:_category})
    var category_key = new_category.key;
	var ref = db.ref("users/"+_username+"/categories");
	ref.update({
        [_category]: category_key,
    });
    res.send({ response: "category " + _category + " added." });
});


app.post("/add-song", (req, res) => {
    var _username = req.body.username.replace(".", "*");
    var _categoryid = req.body.categoryid
    var _song = req.body.song
    var _imgs = req.body.imgs
	var ref = db.ref("/song/");
	new_song = ref.push({
        timestamp: Date.now(),
        images: _imgs,
        name:_song
    });
    var ref = db.ref("/categories/"+_categoryid+"/songs");
    var song_key = new_song.key;
    ref.update({
        [_song]:song_key
    })

    res.send({ response: "song " + _song + " added." });
});

app.post("/get-song", (req, res) => {
	var _song_id = req.body.song_id;
    var ref = db.ref("/song/"+_song_id);
		ref.once("value", function (snapshot) {
			var data = snapshot.val();
			if (data === null) {
                res.send({})
				
			} else {
				res.send(data)
			}
		});
});

app.post("/get-songs", (req, res) => {
    var _category_id = req.body.category_id
	var ref = db
		.ref("/categories/"+_category_id)
		.orderByKey()
		.limitToLast(10);
	ref.once("value", function (snapshot) {
		var data = snapshot.val();
		if (data === null) {
			res.send({});
		} else {
            delete data["timestamp"]
			res.send(data);
		}
	});
});

app.post("/get-categories", (req, res) => {
	var _username = req.body.username.replace(".", "*");
	var ref = db
		.ref("/users/" + _username + "/categories")
		.orderByKey()
		.limitToLast(10);
	ref.once("value", function (snapshot) {
		var data = snapshot.val();
		if (data === null) {
			res.send({});
		} else {
			res.send(data);
		}
	});
});

app.listen(5000, () => {
	console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
