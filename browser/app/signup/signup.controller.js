app.controller('signupCtrl', function($scope, $http, $state){
	$scope.submitLogin=function(){
		$http.post('/signup', {email:$scope.email, password:$scope.password })
		.then(function(user) {
			console.log(user);
			// console.log(user.data);
			if (user.data){
				$state.go('stories')
			}
		})
		.catch(function(err){
			alert("no");
		})
	}

})
