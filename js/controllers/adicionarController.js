app.controller('adicionarController', ['$scope', '$firebaseArray', '$location', 'FBURL', function($scope, $firebaseArray, $location, FBURL){
	
	$scope.adicionarCadastro = function() {
		var ref = new Firebase(FBURL);
		var cadastro = $firebaseArray(ref);
		cadastro.$add({
			nome: $scope.cadastro.nome,
			curso: $scope.cadastro.curso,
			email: $scope.cadastro.email,
			instituicao: $scope.cadastro.instituicao
		});
		$location.path('/lista');
	};
	
}]);