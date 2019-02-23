const express = require("express");
const router = express.Router();
const authCtrl = require("../../controllers/authCtrl.js");

const createRouter = app => {

    router.use('/login', authCtrl.login);
    router.use('/signin', authCtrl.signin);
    return router;
};

module.exports = createRouter;
