'use strict';
module.exports = function (app) {
    var user = require('../controllers/userController');

    // User Routes
    app.route('/user')
        .get(user.getAll)
        .post(user.create);


    app.route('/user/:userId')
        .get(user.getOne)
        .delete(user.delete);
};