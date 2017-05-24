
app.controller('loginController', ['$scope', '$state', '$http', 'Auth', '$location', 
	function($scope, $state, $http, Auth, $location) {
    $scope.auth = Auth;

    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
    });

    alert('entrou na função 1');
    $scope.login = function() {
    	alert('entrou na função 2');
		Auth.$authWithPassword({
		    email: $scope.email,
		    password: $scope.password
		})
		.then(function(authData) {
		    alert('Login realizado');
		    $location.path('/lista');
		    console.log('Logado como:', authData.email);
		    //$state.go('profile');
		})
		.catch(function(err) {
		//console.log('error:',err);
		//$state.go('login');
		});
    };
  }
]);