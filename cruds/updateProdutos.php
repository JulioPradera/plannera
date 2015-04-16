<?php
/* Declarações Iniciais do Script */
require_once "../databaseConnection.php";

header("Content-type: application/json");

/* Declarações de Variáveis de Parâmetro */
$params = json_decode(file_get_contents("php://input"), true);

/* Execuções de Queries */
$update_produtos = "UPDATE produtos
                       SET nome = '{$params["nome"]}',
                           qtdVenda = {$params["qtdVenda"]}
                     WHERE id = {$params["id"]}";
$query_produtos = mysql_query($update_produtos, $conDB) or die(mysql_error());

/* Finalização da Conexão com o Banco de Dados */
mysql_close($conDB);
?>
