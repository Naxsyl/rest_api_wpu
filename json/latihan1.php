<?php

// $mahasiswa = [
//     [
//         "nama" => "Nasril",
//         "nisn" => "19795",
//         "email" => "nasril@gmail.com"
//     ],
//     [
//         "nama" => "ismi",
//         "nisn" => "19795",
//         "email" => "ismi@gmail.com"
//     ]
// ];


$dbh = new PDO('mysql:host=localhost;dbname=phpmvc', 'root', '');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();

$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);


$data = json_encode($mahasiswa);
echo $data;
