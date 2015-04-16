app.controller("Mix", function($scope, $http, ngTableParams, $sce) {
    $http.post("http://localhost/plannera/cruds/readMix.php", {})
        .success(function(response) {
            $scope.produtos = response;
        });
});
