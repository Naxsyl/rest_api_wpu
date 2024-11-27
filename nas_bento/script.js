function allMenu() {
  $.getJSON("data/menu.json", function (data) {
    let menu = data.menu; // ini == $menu = menu["menu"] di php
    $("#daftar-menu").empty();
    $.each(menu, (i, data) => {
      $("#daftar-menu").append(`<div class="col-md-4">
      <div class="card mb-3">
        <img src="img/menu/${data.gambar}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${data.nama}</h5>
          <p class="card-text">${data.deskripsi}</p>
          <h5 class="harga">${data.harga}</h5>
          <a href="#" class="btn btn-primary">Pesan Sekarang</a>
        </div>
      </div>
    </div>`);
    });
  });
}

allMenu();

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  // jika kategori all menu maka tampilkan semua menu
  if (kategori == "All Menu") {
    allMenu();
    return;
  }

  $.getJSON("data/menu.json", function (data) {
    let menu = data.menu;
    let content = "";

    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content += `<div class="col-md-4">
        <div class="card mb-3">
          <img src="img/menu/${data.gambar}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${data.nama}</h5>
            <p class="card-text">${data.deskripsi}</p>
            <h5 class="harga">${data.harga}</h5>
            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
          </div>
        </div>
      </div>`;
      }
    });

    $("#daftar-menu").html(content);
  });
});
