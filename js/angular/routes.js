var app = angular.module("main", ["ngTable", "ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/produtos", {
            templateUrl: "produtos.html",
            controller: "Produtos"
        })
        .when("/mix", {
            templateUrl: "mix.html",
            controller: "Mix"
        })
        .when("/estatisticas", {
            templateUrl: "estatisticas.html",
            controller: "Estatisticas"
        })
        .otherwise({
            redirectTo: "/produtos"
        });
});
