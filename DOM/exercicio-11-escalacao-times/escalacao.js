let maxPlayers;

function showOptions() {
  const sport = document.getElementById('sports').value

  if (sport === 'football') {
    maxPlayers = 11;
  } else if (sport === 'handball') {
    maxPlayers = 7;
  } else if (sport === 'volleyball') {
    maxPlayers = 6;
  } 
}

function addPlayer() {
  const  position = document.getElementById('position').value
  const  name = document.getElementById('name').value
  const  number = document.getElementById('number').value

  const teamList = document.getElementById('team-list')
  const currentPlayers = teamList.children.length

  const confirmation = confirm("Deseja escalar " + name + " como " + position + "?") 

  if (confirmation && currentPlayers < maxPlayers) {
    const teamList = document.getElementById('team-list')
    const playerItem = document.createElement('li')

    playerItem.id = "player-" + number
    playerItem.innerText = position + ": " + name + " (" + number + ")"

    teamList.appendChild(playerItem)

    //limpar input
    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
  } else {
    alert("Você atingiu o número máximo de jogadores no time")
    return
  }
}

function removePlayer() {
  const number = document.getElementById('numberRemove').value
  const playerRemove = document.getElementById('player-' + number)

  const confirmation = confirm('Deseja remover o jogador: ' + playerRemove.innerText + "?")
  if (confirmation) {
    document.getElementById('team-list').removeChild(playerRemove)
    document.getElementById('numberRemove').value = ""
  } 

}