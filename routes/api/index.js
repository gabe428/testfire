const express = require("express");
const indexRouter = express.Router();

const router = app => {

    indexRouter.use('/auth', require('./authRouter.js')(app));

    return indexRouter;
};

module.exports = router;
