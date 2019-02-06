require('dotenv').config()

const express = require("express");
const app = express();
const path = require('path');
let PORT = process.env.PORT || 3000;
const db = require('./config/db.js');
// const models = require('./models')(db);
const server = require('http').Server(app);
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const router = express.Router();



app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '1mb'
}));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('views', `${__dirname}/views`);

app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: "main",
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: [
        `${__dirname}/views/partials`,
    ]
}));

app.set('view engine', '.hbs');

var routes = require('./routes')(app);
app.use("/", routes);

app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, '/views/404.html'));

});
// new user creation method
// router.post('/login',login.login);
// router.post('/login',login.login)
// app.use('/api', router);
// app.listen(5000);

// for different port
const arg1 = process.argv[2];
if (!isNaN(arg1)) {
    PORT = arg1;
}

server.listen(PORT, function() {
	console.log("app is listening");
});
