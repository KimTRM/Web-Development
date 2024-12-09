<?php

$db_servername = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "myform";

try {
    $conn = mysqli_connect($db_servername, $db_username, $db_password, $db_name);
} catch (mysqli_sql_exception $e) {
    echo "Could not connect <br>";
}

if ($conn) {
    echo "You are connected<br>";
}

?>