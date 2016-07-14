app.controller('logoutCtrl', function($scope, $http, $state){

	$scope.logout = function (){
		console.log("yo")
		$http.put('/logout')
		.then(function(response){
		$state.go('login')
		})
		.catch(function(err){
			console.log(err);
			alert("no");
		})
	}

})