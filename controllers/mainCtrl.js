var path = require('path');

var home = function(req, res){
  console.log("its time to rape homey penis");
res.sendFile(path.join(__dirname, '/../views/index.html'));
};

var home = function(req, res){
  res.render('index');
};

var signup = function(req, res){
  res.render('signup');
};

var profile = function(req, res){
  res.render('profile');
};

var settings = function(req, res){
  res.render('settings');
};





module.exports = {
  home: home,
  signup: signup,
  profile: profile,
  settings: settings
};
