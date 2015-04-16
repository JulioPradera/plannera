<?php
/* Declarações Iniciais do Script */
require_once "../databaseConnection.php";

header("Content-type: application/json");

/* Declarações de Variáveis de Parâmetro */
$params = json_decode(file_get_contents("php://input"), true);

/* Execuções de Queries */
$insert_produtos = "INSERT INTO produtos (codigo,
                                          nome,
                                          qtdVenda)
                         VALUES ('{$params["codigo"]}',
                                 '{$params["nome"]}',
                                 {$params["qtdVenda"]})";
$query_produtos = mysql_query($insert_produtos, $conDB) or die(mysql_error());

/* Retorno dos Dados */
echo json_encode(mysql_insert_id());

/* Finalização da Conexão com o Banco de Dados */
mysql_close($conDB);
?>
