function addPlayer() {
  const  position = document.getElementById('position').value
  const  name = document.getElementById('name').value
  const  number = document.getElementById('number').value

  const confirmation = confirm("Deseja escalar " + name + " como " + position + "?") 

  if (confirmation) {
    const teamList = document.getElementById('team-list')
    const playerItem = document.createElement('li')

    playerItem.id = "player-" + number
    playerItem.innerText = position + ": " + name + " (" + number + ")"

    teamList.appendChild(playerItem)

    //limpar input
    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
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