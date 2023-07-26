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

// Função auxiliar para verificar se uma combinação de células representa uma vitória
function checkWin(cells) {
  if (cells[0] && cells[0] === cells[1] && cells[0] === cells[2]) {
    return true;
  }
  return false;
}

// Obtém as regiões vencedoras no tabuleiro
function getWinRegions() {
  const winRegions = [];
  
  // Verifica as linhas
  for (let i = 0; i < 3; i++) {
    if (checkWin(vBoard[i])) {
      winRegions.push(i + '.0', i + '.1', i + '.2');
      break;
    }
  }

  // Verifica as colunas
  for (let i = 0; i < 3; i++) {
    if (checkWin([vBoard[0][i], vBoard[1][i], vBoard[2][i]])) {
      winRegions.push('0.' + i, '1.' + i, '2.' + i);
      break;
    }
  }

  // Verifica as diagonais
  if (checkWin([vBoard[0][0], vBoard[1][1], vBoard[2][2]])) {
    winRegions.push('0.0', '1.1', '2.2');
  } else if (checkWin([vBoard[0][2], vBoard[1][1], vBoard[2][0]])) {
    winRegions.push('0.2', '1.1', '2.0');
  }

  return winRegions;
}
