<?php

require_once './php/config.php';

$dbHost = DB_HOST;
$dbName = DB_NAME;
$pdo = new PDO("mysql:dbname=$dbName;host=$dbHost", DB_USER, DB_PASS);

switch ($_SERVER['REQUEST_METHOD']) {
	case 'POST':
		$input = (array) json_decode(file_get_contents('php://input'));
		$output = $input;
		echo json_encode($output);
		break;
	default: header('Location: /');
}

?>
