app.factory('AuthFactory', function($http) {

    var auth = {}

    auth.login = function(email, password) {
        return $http.post('/login', { email: email, password: password })
    }

    auth.signup = function(email, password) {
        return $http.post('/signup', { email: email, password: password })
    }
    return auth;
})
