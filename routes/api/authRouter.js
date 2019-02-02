const express = require("express");
const router = express.Router();
const authCtrl = require("../../controllers/authCtrl.js");

const createRouter = app => {

    router.use('/login', authCtrl.login);

    return router;
};

module.exports = createRouter;
