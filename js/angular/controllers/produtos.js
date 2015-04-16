app.controller("Produtos", function($scope, $http, ngTableParams, $sce) {
    $http.post("http://localhost/plannera/cruds/readProdutos.php", {})
        .success(function(response) {
            $scope.produtos = response;
        });

    $scope.edit = function(produto) {
            produto.edit = true;
    };

    $scope.delete = function(produto) {
        var produtos = $scope.produtos,
            i;

        $http.post("http://localhost/plannera/cruds/deleteProdutos.php", {id: produto.id})
            .success(function() {
                swal({
                  title: "Sucesso",
                  text: "Produto excluído com sucesso!",
                  type: "success",
                  confirmButtonText: "Ok"
                });

                for (i in produtos) {
                    if (produtos[i].id == produto.id) {
                        produtos.splice(i, 1);

                        break;
                    }
                }
            })
            .error(function() {
                swal({
                  title: "Erro",
                  text: "Ocorreu um erro ao processar os dados.",
                  type: "error",
                  confirmButtonText: "Ok"
                });
            });
    };

    $scope.save = function(produto) {
        if (produto.id) {
            $http.post("http://localhost/plannera/cruds/updateProdutos.php", {id: produto.id, nome: produto.nome, qtdVenda: produto.qtdVenda})
                .success(function() {
                    swal({
                      title: "Sucesso",
                      text: "Produto alterado com sucesso!",
                      type: "success",
                      confirmButtonText: "Ok"
                    });

                    produto.edit = false;
                })
                .error(function() {
                    swal({
                      title: "Erro",
                      text: "Ocorreu um erro ao processar os dados.",
                      type: "error",
                      confirmButtonText: "Ok"
                    });
                });
        } else {
            var error, i;

            if (!produto.codigo) {
                error = "É obrigatório informar o código do produto!";
            } else if (!produto.nome) {
                error = "É obrigatório informar o nome do produto!";
            } else if (!produto.qtdVenda) {
                error = "É obrigatório informar a quantidade vendida do produto!";
            } else {
                for (i in $scope.produtos) {
                    if ($scope.produtos[i].codigo == produto.codigo) {
                        error = "O código informado já está cadastrado!";

                        break;
                    }
                }
            }

            if (!error) {
                $http.post("http://localhost/plannera/cruds/createProdutos.php", {codigo: produto.codigo, nome: produto.nome, qtdVenda: produto.qtdVenda})
                    .success(function(response) {
                        swal({
                          title: "Sucesso",
                          text: "Produto adicionado com sucesso!",
                          type: "success",
                          confirmButtonText: "Ok"
                        });

                        produto.id = response;

                        $scope.produtos.push(produto);

                        produto.add = false;
                    })
                    .error(function() {
                        swal({
                          title: "Erro",
                          text: "Ocorreu um erro ao processar os dados.",
                          type: "error",
                          confirmButtonText: "Ok"
                        });
                    });
            } else {
                swal({
                  title: "Erro",
                  text: error,
                  type: "warning",
                  confirmButtonText: "Ok"
                });
            }
        }
    };

    $scope.add = function() {
        $scope.novoProduto = {
            add: true
        };
    };
});
