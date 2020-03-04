<?php

$dbHost = DB_HOST;
$dbName = DB_NAME;
$pdo = new PDO("mysql:dbname=$dbName;host=$dbHost;charset=utf8", DB_USER, DB_PASS);

$pdo->exec('
  create table if not exists KOOLITUS (
    id int auto_increment key,
    aeg datetime not null,
    nimi varchar(63) not null,
    sisu text not null,
    koolitaja varchar(63) not null,
    asukoht varchar(63) not null,
    hind int not null,
    kohtadeArv int not null
  );
  create table if not exists OSALEJA (
    email varchar(63) key,
    nimi varchar(63) not null,
    tel varchar(31) not null,
    hash char(40) not null,
    sessionId char(32),
    sessionTime datetime
  );
  create table if not exists OSALEMINE (
    id int auto_increment key,
    osalejaEmail varchar(63) not null,
    koolituseId int not null
  );
');

function getCourses() {
  $dbHost = DB_HOST;
  $dbName = DB_NAME;
  $pdo = new PDO("mysql:dbname=$dbName;host=$dbHost", DB_USER, DB_PASS);

  $stmt = $pdo->prepare('select * from KOOLITUS order by aeg desc');
  $stmt->execute();
  return $stmt->fetchAll(PDO::FETCH_OBJ);
}

function getUser($email, $hash) {
  $stmt = $pdo->prepare('select * from OSALEJA where email=? && hash=?');
  $stmt->execute($email, $hash);
  return $stmt->fetch(PDO::FETCH_OBJ);
}

function login($email, $hash) {
}

function register($koolituseId, $sessionId) {}

?>
