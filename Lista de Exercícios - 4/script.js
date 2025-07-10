class Jogador {
  constructor(nome, posicao) {
    this.nome = nome;
    this.posicao = posicao;
  }
}

let listaJogadores = [];

const inputNome = document.getElementById("inputNome");
const inputPosicao = document.getElementById("inputPosicao");

function cadastrarJogador() {
  const nome = inputNome.value;
  const posicao = inputPosicao.value;

  if (!nome || !posicao) return;

  const jogador = new Jogador(nome, posicao);
  listaJogadores.push(jogador);
  criarCardJogador(jogador);

  inputNome.value = "";
  inputPosicao.value = "";
}

function criarCardJogador(jogador) {
  const div = document.createElement("div");
  div.className = "card-jogador";

  div.innerHTML = `
    <h4>${jogador.nome}</h4>
    <p>${jogador.posicao}</p>
  `;

  const secao = document.querySelector(`#${jogador.posicao} .cards`);
  secao.appendChild(div);
}