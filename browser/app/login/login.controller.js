app.controller('loginCtrl', function($scope, $http){
	$scope.submitLogin=function(){
		$http.post('/login', {email:$scope.email, password:$scope.password })
		.then(function(res){
			console.log("hello");
		})
		.catch(function(err){
			alert("no");
		})
	}

})
