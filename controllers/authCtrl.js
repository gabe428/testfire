var db = require('../config/db.js');
var models = require('../models')(db);

var login = function(req, res){
  console.log("done");
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  models.createUser(username, password, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(results);
    res.status(200).json({
      results: results
    });
  });
};


module.exports = {
  login: login
};
