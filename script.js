
function ambilAntrian() {
    let nomor = localStorage.getItem("nomorAntrian") || 0;
    nomor++;
    localStorage.setItem("nomorAntrian", nomor);
    document.getElementById("hasil").innerText = "Nomor Antrian Anda: " + nomor;
}
