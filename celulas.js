const celulas = [
  {
    tipo: "homens",
    bairro: "Centro",
    endereco: "Rua das Oliveiras, 100",
    anfitriao: "Carlos Mendes",
    telefone: "(42) 99999-1234"
  },
  {
    tipo: "moças",
    bairro: "Jardim das Flores",
    endereco: "Av. Esperança, 88",
    anfitriao: "Luciana Souza",
    telefone: "(42) 98888-5678"
  },
  {
    tipo: "casais",
    bairro: "Vila Nova",
    endereco: "Rua União, 200",
    anfitriao: "Marcos e Ana",
    telefone: "(42) 97777-6543"
  },
  // Adicione mais células conforme necessário
];

document.getElementById("formCelula").addEventListener("submit", function (e) {
  e.preventDefault();
  const tipo = document.getElementById("tipo").value.toLowerCase();
  const bairro = document.getElementById("bairro").value.toLowerCase();

  const celula = celulas.find(
    c => c.tipo === tipo && c.bairro.toLowerCase() === bairro
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
    resultado.innerHTML = "<p style='color:red;'>Nenhuma célula encontrada para esse perfil e bairro.</p>";
  }
});
