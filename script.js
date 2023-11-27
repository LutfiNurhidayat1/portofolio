function tombolSembunyikan() {
    console.log("Tombol diklik!");
    var materi = document.getElementById("Materi");
    materi.classList.toggle("sembunyikan");
    var button = document.getElementById("tombol");
    var isHidden = materi.classList.contains("sembunyikan");

    button.innerHTML = isHidden ? "Baca Selengkapnya" : "Sembunyikan";
}
