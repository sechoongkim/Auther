app.controller('loginCtrl', function($scope, $http){
	
	$scope.submitLogin=function(){
		console.log ("")
		$http.post('/login', {email:$scope.email, password:$scope.password })
		.then(function(res){
			console.log(res)
			console.log("hello");
			//state.go

		})
		.catch(function(err){
			alert("no");
		})
	}

})



app.controller('loginCtrl', function($scope, AuthFactory, $state){
	
	$scope.submitLogin=function(){
		
		AuthFactory.login($scope.email, $scope.password)
		.then(function(user) {
			
			$state.go('stories')

		})
		.catch(function(err){
			alert("no");
		})
	}

})