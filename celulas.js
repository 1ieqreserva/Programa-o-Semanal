const celulas = [
  {
    tipo: "homens",
    bairro: "centro",
    nome: "Célula Gideões - Prontos para Batalha",
    endereco: "Av. Coronel Rogério Borba, Nº 1119",
    anfitriao: "Roberto Hornung"
  },
  {
    tipo: "meninas",
    bairro: "centro",
    nome: "Célula Zoe",
    endereco: "Casa da Pastora Jaqueline",
    anfitriao: "Pastora Jaqueline"
  },
  {
    tipo: "meninas",
    bairro: "jardim social",
    nome: "Célula Zoe",
    endereco: "Casa da Pastora Jaqueline",
    anfitriao: "Pastora Jaqueline"
  },
  {
    tipo: "meninas",
    bairro: "mercer",
    nome: "Célula Zoe",
    endereco: "Casa da Pastora Jaqueline",
    anfitriao: "Pastora Jaqueline"
  },
  {
    tipo: "meninas",
    bairro: "santa helena",
    nome: "Célula Zoe",
    endereco: "Casa da Pastora Jaqueline",
    anfitriao: "Pastora Jaqueline"
  }
];

document.getElementById("formCelula").addEventListener("submit", function (e) {
  e.preventDefault();

  const tipo = document.getElementById("tipo").value.toLowerCase();
  const bairro = document.getElementById("bairro").value.toLowerCase();

  const celula = celulas.find(
    c => c.tipo === tipo && c.bairro === bairro
  );

  const resultado = document.getElementById("resultadoCelula");

  if (celula) {
    resultado.innerHTML = `
      <h3>✅ ${celula.nome}</h3>
      <p><strong>Endereço:</strong> ${celula.endereco}</p>
      <p><strong>Anfitrião:</strong> ${celula.anfitriao}</p>
    `;
  } else {
    resultado.innerHTML = `<p class="erro">Nenhuma célula encontrada com esse perfil nesse bairro.</p>`;
  }
});
