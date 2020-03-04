<?php

require_once './php/config.php';
require_once './php/database.php';


switch ($_SERVER['REQUEST_METHOD']) {
  case 'POST':
    $input = (array) json_decode(file_get_contents('php://input'));
    $output = (object) [];
    switch ($input['requestType']) {
      case 1: case 'getCourses':
        $output = array_map(fn($record) => [
          'time' => $record['aeg'],
          'title' => $record['nimi'],
          'description' => $record['sisu'],
          'trainer' => $record['koolitaja'],
          'location' => $record['asukoht'],
          'price' => $record['hind'] /100,
          'slots' => $record['kohtadeArv']
          /* 'openSlots' => getOpenSlots($record['id']) */
        ], getCourses());
        break;
    }
    echo json_encode($output);
    break;
  default: header('Location: /');
}

?>
