const celulas = [
  {
    tipo: "homens",
    bairro: "centro",
    endereco: "Rua da Esperança, 100",
    anfitriao: "Carlos Mendes",
    telefone: "(42) 99999-1234"
  },
  {
    tipo: "moças",
    bairro: "jardim das flores",
    endereco: "Rua Vitória, 88",
    anfitriao: "Luciana Souza",
    telefone: "(42) 98888-5678"
  },
  {
    tipo: "casais",
    bairro: "vila nova",
    endereco: "Rua União, 200",
    anfitriao: "Marcos e Ana",
    telefone: "(42) 97777-6543"
  },
  {
    tipo: "crianças",
    bairro: "centro",
    endereco: "Rua dos Lírios, 310",
    anfitriao: "Tia Nádia",
    telefone: "(42) 99885-7777"
  },
  // Adicione mais células conforme necessário
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
      <h3>✅ Célula Encontrada:</h3>
      <p><strong>Endereço:</strong> ${celula.endereco}</p>
      <p><strong>Anfitrião:</strong> ${celula.anfitriao}</p>
      <p><strong>Telefone:</strong> ${celula.telefone}</p>
    `;
  } else {
    resultado.innerHTML = `<p style="color:red;">Nenhuma célula encontrada com esse perfil nesse bairro.</p>`;
  }
});
