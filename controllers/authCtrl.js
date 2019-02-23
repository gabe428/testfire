var db = require('../config/db.js');
var models = require('../models')(db);

var login = function(req, res){
  console.log("done");
  console.log(req.body);
  // var today = new Date();
  //   var users={
  //   "first_name":req.body.first_name,
  //   "last_name":req.body.last_name,
  //   "email":req.body.email,
  //   "password":req.body.password,
  //   "created":today,
  //   "modified":today
  var username = req.body.username;
  var password = req.body.password;
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var email = req.body.email;
  
  models.createUser(username, password, first_name, last_name, email, (err, results) => {
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


var signin = function(req,res){
  var email = req.body.email;
  var password = req.body.password;
  console.log(email);
  console.log(password);
  db.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results);
    if(results.length >0){
      if(results[0].password == password){
        res.send({
          "code":200,
          "success":"login sucessfull"
            });
      }
      else{
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exits"
          });
    }
  }
  });
}




module.exports = {
  login: login,
  signin: signin
};
