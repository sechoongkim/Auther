app.controller('signupCtrl', function($scope, AuthFactory, $state){
	$scope.submitLogin=function(){//
		console.log($scope.email, $scope.password);

		AuthFactory.signup($scope.email, $scope.password)
		.then(function(user) {
			console.log('test');
			$state.go('stories')

			
		})
		.catch(function(err){
			console.log(err);
			alert("no");
		})
	}

})
// 