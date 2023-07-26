// Variáveis globais úteis
const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''

// Função para atualizar o título do jogador atual na interface
function updateTitle() {
  const playerInput = document.getElementById(turnPlayer);
  document.getElementById('turnPlayer').innerText = playerInput.value;
}

// Função para inicializar o jogo
function initializeGame() {
  // Inicializa as variáveis globais 
  vBoard = [['', '', ''], ['', '', ''], ['', '', '']];
  turnPlayer = 'player1';
  
  // Ajusta o título da página (caso seja necessário)
  document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>';
  updateTitle();

  // Limpa o tabuleiro (caso seja necessário) e adiciona os eventos de clique
  boardRegions.forEach(function (element) {
    element.classList.remove('win');
    element.innerText = '';
    element.classList.add('cursor-pointer');
    element.addEventListener('click', handleBoardClick);
  });
}