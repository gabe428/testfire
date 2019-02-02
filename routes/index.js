
const express = require("express");
const indexRouter = express.Router();

const router = app => {

    indexRouter.use('/api', require('./api')(app));
    indexRouter.use('/app', require('./app')(app));
    indexRouter.get('/', function(req, res){
      res.redirect("/app/home");

    });

    return indexRouter;
};

module.exports = router;
