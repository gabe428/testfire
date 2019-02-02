const express = require("express");
const indexRouter = express.Router();

const router = app => {

    indexRouter.use('/', require('./mainRouter.js')(app));

    return indexRouter;
};

module.exports = router;
