require('dotenv').config()

var express = require("express");
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3000;
var db = require('./config/db.js');
var models = require('./models')(db);
var bodyParser = require("body-parser");


app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '1mb'
}));
app.use('/public', express.static(path.join(__dirname, 'public')));

var routes = require('./routes')(app);
app.use("/", routes);

app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, '/views/404.html'));

});



app.listen(PORT, function() {
	console.log("app is listening");
});
