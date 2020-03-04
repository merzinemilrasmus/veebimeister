<?php

$dbHost = DB_HOST;
$dbName = DB_NAME;
$pdo = new PDO("mysql:dbname=$dbName;host=$dbHost", DB_USER, DB_PASS);

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
    osalejaId int auto_increment key,
    nimi varchar(63) not null,
    tel varchar(31) not null,
    email varchar(63) not null,
    sessionId char(32),
    sessionTime datetime
  );
  create table if not exists OSALEMINE (
    id int auto_increment key,
    osalejaId int not null,
    koolituseId int not null
  );
');

?>
