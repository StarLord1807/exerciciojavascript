let nomes = [];

function adicionarNome() {
  const nome = document.getElementById("nomeInput").value.trim();
  if (nome !== "") {
    nomes.push(nome);
    alert("Nome adicionado!");
    document.getElementById("nomeInput").value = "";
  } else {
    alert("Digite um nome válido.");
  }
}

function listarNomes() {
  const lista = document.getElementById("listaNomes");
  lista.innerHTML = "";

  if (nomes.length === 0) {
    lista.innerHTML = "<li>Nenhum nome cadastrado.</li>";
  } else {
    nomes.forEach(function(nome) {
      const item = document.createElement("li");
      item.textContent = nome;
      lista.appendChild(item);
    });
  }
}

function buscarNome() {
  const busca = document.getElementById("buscarInput").value.trim();
  const resultado = document.getElementById("resultadoBusca");

  if (busca === "") {
    resultado.textContent = "Digite um nome para buscar.";
    return;
  }

  if (nomes.includes(busca)) {
    resultado.textContent = "Nome encontrado!";
  } else {
    resultado.textContent = "Nome não encontrado.";
  }
}