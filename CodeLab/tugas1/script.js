function tambah() {
  const num1 = parseFloat(document.getElementById("bilangan1").value);
  const num2 = parseFloat(document.getElementById("bilangan2").value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const hasil = num1 + num2;
    document.getElementById("result").innerText = `Hasil penjumlahan: ${hasil}`;
  } else {
    document.getElementById("result").innerText = "Mohon isi kedua bilangan.";
  }
}

function restart() {
  document.getElementById("bilangan1").value = "";
  document.getElementById("bilangan2").value = "";
  document.getElementById("result").innerText = "";
}
