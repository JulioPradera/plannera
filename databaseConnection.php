<?php
$servername = "127.0.0.1";
$username = "root";
$password = "dev05";
$database = "plannera";

// Create connection
$conDB = mysql_connect($servername, $username, $password);

// Check connection
if (!$conDB) {
    die("Não foi possível conectar: " . mysql_error());
}

mysql_select_db($database, $conDB) or die("Não foi possível conectar: " . mysql_error());
?>
