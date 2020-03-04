<?php

require_once './php/config.php';
require_once './php/database.php';


switch ($_SERVER['REQUEST_METHOD']) {
  case 'POST':
    $input = (array) json_decode(file_get_contents('php://input'));
    $output = $input;
    echo json_encode($output);
    break;
  default: header('Location: /');
}

?>
