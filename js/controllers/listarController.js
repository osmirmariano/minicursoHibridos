app.controller('listarController', ['$scope', '$firebaseArray', '$firebaseObject', 'FBURL', function($scope, $firebaseArray, $firebaseObject, FBURL){
  
  var cadastros = new Firebase(FBURL);
  $scope.cadastros = $firebaseArray(cadastros);
  
  $scope.removeCadastro = function(id) {
    var ref = new Firebase(FBURL + id);
    var cadastro = $firebaseObject(ref)
    cadastro.$remove();
   };
   
}]);