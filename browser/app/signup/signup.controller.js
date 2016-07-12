app.controller('signupCtrl', function($scope, $http){
	$scope.submitLogin=function(){
		$http.post('/signup', {email:$scope.email, password:$scope.password })
		.then(res => {
		$state.go('stories')
		})
		.catch(function(err){
			alert("no");
		})
	}

})
