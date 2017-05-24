var app = angular.module('myApp', ['ngRoute', 'firebase']);


app.config(function($routeProvider){
  $routeProvider
  .when('/', {
			controller: 'listarController',
			templateUrl: 'views/listar.html'
		})
	.when('/adicionar', {
		controller: 'adicionarController',
		templateUrl: 'views/adicionar.html'
	})
	.when('/editar/:id', {
		controller: 'editarController',
		templateUrl: 'views/editar.html'
	
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.constant("FBURL", "https://minicursohibrido.firebaseio.com/cadastro");

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://minicursohibrido.firebaseio.com/cadastro");
    return $firebaseAuth(ref);
  }
]);

