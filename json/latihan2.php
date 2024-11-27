<?php

$data = file_get_contents('coba.json');
$mahasiswa = json_decode($data, true); // jika true jadi array jika tidak akan menjadi object


// var_dump($mahasiswa);
echo $mahasiswa[0]["guru"]["namaguru1"];
