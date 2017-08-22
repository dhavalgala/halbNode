'use strict';
var mongoose = require('mongoose'),
    User = mongoose.model('Users');

exports.getAll = function (req, res) {
    User.find({}, function (err, users) {
        if (err)
            res.send(err);
        res.json(users);
    });
};

exports.create = function (req, res) {
    if (req && req.body && req.body.userId) {
        User.findOneAndUpdate({ _id: req.body.userId }, req.body, { new: true }, function (err, data) {
            if (err)
                res.send(err);
            res.json(data);
        });
    } else {
        var new_user = new User(req.body);
        new_user.save(function (err, data) {
            if (err)
                res.send(err);
            res.json(data);
        });
    }
};

exports.getOne = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.delete = function (req, res) {
    User.remove({
        _id: req.params.userId
    }, function (err, data) {
        if (err)
            res.send(err);
        res.json({ message: 'User successfully deleted' });
    });
};