var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./api/models/userModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var promise = mongoose.connect(process.env.MONGODB_URI, {
    useMongoClient: true,
});
promise.then(function (db) {
    console.log(db);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/userRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('halbNode server started on: ' + port);