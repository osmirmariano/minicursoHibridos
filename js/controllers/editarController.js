app.controller('editarController', ['$scope','$location', '$routeParams', '$firebaseObject', 'FBURL',   
    function($scope, $location, $routeParams, $firebaseObject, FBURL){
    
    var ref = new Firebase(FBURL + $routeParams.id);
	$scope.cadastro = $firebaseObject(ref);
    
    $scope.editarCadastro = function() {
        $scope.cadastro.$save({
            nome: $scope.cadastro.titulo,
            curso: $scope.cadastro.curso,
            email: $scope.cadastro.email,
            instituicao: $scope.cadastro.instituicao
        });
        $scope.edit_form.$setPristine();
        $scope.cadastro = {};
        $location.path('/cadastro');
        
    };
     
}]);