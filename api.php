<?php

require_once './php/config.php';

$dbHost = DB_HOST;
$dbName = DB_NAME;
$pdo = new PDO("mysql:dbname=$dbName;host=$dbHost", DB_USER, DB_PASS);

$pdo->exec('
	create table if not exists KOOLITUS (
		koolituseId int auto_increment key,
		koolituseNimi varchar(63) not null,
		koolituseSisu text not null,
		koolitaja varchar(63) not null,
		asukoht varchar(63) not null,
		hind int not null,
		kohtadearv int not null
	);
	create table if not exists OSALEJA (
		osalejaId int auto_increment key,
		nimi varchar(63) not null,
		tel varchar(31) not null,
		email varchar(63) not null
	);
	create table if not exists OSALEMINE (
		id int auto_increment key,
		osalejaId int not null,
		koolituseId int not null
	);
');

switch ($_SERVER['REQUEST_METHOD']) {
	case 'POST':
		$input = (array) json_decode(file_get_contents('php://input'));
		$output = $input;
		echo json_encode($output);
		break;
	default: header('Location: /');
}

?>
