app.controller("Estatisticas", function($scope, $http, ngTableParams, $sce) {
    $http.post("http://localhost/plannera/cruds/readEstatisticas.php", {})
        .success(function(response) {
            $scope.vendaTotal = response[0].vendaTotal;
            $scope.produtos = response;
        });

    $scope.calcularPrevisao = function() {
        var produtos = $scope.produtos,
            i;

        for (i in produtos) {
            produtos[i].vendaPrevisao = Math.round(produtos[i].mix * $scope.vendaTotal);
        }
    };
});
