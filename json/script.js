// let mahasiswa = {
//   nama: "Nasril",
//   umur: 23,
//   email: "nasril@gmail.com",
// };

// console.log(JSON.stringify(mahasiswa)); // jadi json

// Vanila javascript
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let mahasiswa = JSON.parse(this.responseText); // mengubah json menjadi object
//     console.log(mahasiswa);
//   }
// };
// // run ajax
// xhr.open("get", "coba.json", true); // jika true maka akan asycronus jika tidak akan menjadi biasa
// xhr.send();

// AJAX
$.getJSON("coba.json", (data) => {
  console.log(data);
});
