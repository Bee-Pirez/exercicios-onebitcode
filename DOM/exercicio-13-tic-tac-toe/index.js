// Variáveis globais úteis
const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''

// Função para atualizar o título do jogador atual na interface
function updateTitle() {
  const playerInput = document.getElementById(turnPlayer);
  document.getElementById('turnPlayer').innerText = playerInput.value;
}