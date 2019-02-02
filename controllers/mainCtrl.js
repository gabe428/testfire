var path = require('path');

var home = function(req, res){
  console.log("its time to rape homey penis");
res.sendFile(path.join(__dirname, '/../views/index.html'));
};
var signup = function(req, res){
  console.log("its time to rape homey penis");
res.sendFile(path.join(__dirname, '/../views/signup.html'));
};
var profile = function(req, res){
  console.log("loaded profile");
res.sendFile(path.join(__dirname, '/../views/profile.html'));
};
var settings = function(req, res){
  console.log("loaded settings");
res.sendFile(path.join(__dirname, '/../views/settings.html'));
};

module.exports = {
  home: home,
  signup: signup,
  profile: profile,
  settings: settings
};
