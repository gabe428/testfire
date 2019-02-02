const express = require("express");
const router = express.Router();
const mainCtrl = require("../../controllers/mainCtrl.js");

const createRouter = app => {

    router.use('/home', mainCtrl.home);
    router.use('/signup', mainCtrl.signup);
    router.use('/profile', mainCtrl.profile);
    router.use('/settings', mainCtrl.settings);

    return router;
};

module.exports = createRouter;
