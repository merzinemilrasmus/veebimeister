<?php

require_once './php/config.php';
require_once './php/database.php';


switch ($_SERVER['REQUEST_METHOD']) {
  case 'POST':
    $input = (array) json_decode(file_get_contents('php://input'));
    $output = (object) [];
    switch ($input['requestType']) {
      case 1: case 'getCourses':
        $output = array_map(function($record) use ($input) { return [
          'id' => $record->id,
          'time' => $record->aeg,
          'title' => $record->nimi,
          'description' => $record->sisu,
          'trainer' => $record->koolitaja,
          'location' => $record->asukoht,
          'price' => $record->hind /100,
          'slots' => $record->kohtadeArv,
          'registered' => isRegistered($record->id, $input['sessionId'])
          /* 'openSlots' => getOpenSlots($record->id) */
        ]; }, getCourses());
        break;
      case 2: case 'login':
        $output = login($input['email'], $input['hash']);
        break;
      case 3: case 'register':
        $output = register($input['koolituseId'], $input['sessionId']);
        break;
    }
    echo json_encode($output, JSON_INVALID_UTF8_SUBSTITUTE);
    break;
  default: header('Location: /');
}

?>
