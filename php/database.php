<?php

function getStr($len) {
  $chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  $charLen = strlen($chars);
  $str = '';
  for ($i=0; $i < $len; $i++) {
    $str .= $char[rand(0, $charLen -1)];
  }
  return $str;
}

function getPDO() {
  $dbHost = DB_HOST;
  $dbName = DB_NAME;
  return new PDO("mysql:dbname=$dbName;host=$dbHost;charset=utf8", DB_USER, DB_PASS);
}

$pdo = getPDO();
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
  $pdo = getPDO();
  $stmt = $pdo->prepare('select * from KOOLITUS order by aeg desc');
  $stmt->execute();
  return $stmt->fetchAll(PDO::FETCH_OBJ);
}

function getUser($email, $hash) {
  $pdo = getPDO();
  $stmt = $pdo->prepare('select * from OSALEJA where email=? && hash=?');
  $stmt->execute($email, $hash);
  return $stmt->fetch(PDO::FETCH_OBJ);
}

function getUserBySession($sessionId) {
  $pdo = getPDO();
  $stmt = $pdo->prepare('select * from OSALEJA where sessionId=?');
  $stmt->execute($sessionId);
  return $stmt->fetch(PDO::FETCH_OBJ);
}

function login($email, $hash) {
  const user = getUser($email, $hash);
  if (user) {
    $sessionId = genStr(32);
    while (!getUserBySession()) $sessionId = genStr(32);
    try {
      $pdo = getPDO();
      $pdo->prepare('update KOOLITUS set sessionId=? where email=?')->execute($sessionId, $email);
      return $sessionId;
    } catch(e) return null;
  } else return null;
}

function register($koolituseId, $sessionId) {}

?>
