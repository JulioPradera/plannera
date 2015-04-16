<?php
/* Declarações Iniciais do Script */
require_once "../databaseConnection.php";

header("Content-type: application/json");

/* Execuções de Queries */
$select_produtos = "SELECT t0.codigo,
                           t0.nome,
                           t0.qtdVenda,
                           CONCAT((100 * t0.qtdVenda) / t1.total, '%') AS mix
                      FROM produtos AS t0,
                           (SELECT SUM(qtdVenda) AS total FROM produtos) AS t1";
$query_produtos = mysql_query($select_produtos, $conDB) or die(mysql_error());

for ($produtos = array(); $row_produtos = mysql_fetch_assoc($query_produtos); $produtos[] = $row_produtos);

/* Retorno dos Dados */
echo json_encode($produtos);

/* Finalização da Conexão com o Banco de Dados */
mysql_close($conDB);
?>
