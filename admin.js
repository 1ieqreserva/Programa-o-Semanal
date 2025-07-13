document.getElementById("adminLogin").addEventListener("submit", function (e) {
  e.preventDefault();
  const senha = document.getElementById("senha").value;
  if (senha === "ieq2026") {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";
  } else {
    alert("Senha incorreta.");
  }
});

document.getElementById("addCelula").addEventListener("submit", function (e) {
  e.preventDefault();

  const novaCelula = {
    nome: document.getElementById("nome").value,
    tipo: document.getElementById("tipo").value.toLowerCase(),
    bairro: document.getElementById("bairro").value.toLowerCase(),
    endereco: document.getElementById("endereco").value,
    anfitriao: document.getElementById("anfitriao").value
  };

  const celulasExtras = JSON.parse(localStorage.getItem("celulasExtras")) || [];
  celulasExtras.push(novaCelula);
  localStorage.setItem("celulasExtras", JSON.stringify(celulasExtras));

  document.getElementById("addCelula").reset();
  document.getElementById("sucesso").textContent = "✅ Célula adicionada com sucesso!";
});
