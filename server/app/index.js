'use strict'; 

var app = require('express')();
var path = require('path');
var User = require('../api/users/user.model.js');
app.use(require('./logging.middleware'));

app.use(require('./request-state.middleware'));

app.use(require('./statics.middleware'));



var session = require('express-session')

app.use(session({

	secret: 'tongiscool'

}))

app.use('/api', function (req, res, next) {
  if (!req.session.counter) req.session.counter = 0;
  console.log('counter', ++req.session.counter);
  console.log("TEST")
  console.log('session', req.session);
  next();

});

app.post('/login', function (req, res, next) {
 
  User.findOne({
    where: req.body
  })
  .then(function (user) {
    if (!user) {
      res.sendStatus(401);

    } else {
      req.session.userId = user.id;
      res.sendStatus(204);
      // res.send(user);
    }
  })
  .catch(next);
});







app.use('/api', require('../api/api.router'));








var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    res.sendFile(indexPath);
  });
});

app.use(require('./error.middleware'));


module.exports = app;
