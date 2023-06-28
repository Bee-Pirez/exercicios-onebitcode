const deck = []
let option = ""

do {
  option = prompt(
    "Cartas dentro do baralho:" + deck.length +
    "\n1.Adicionar nova carta\n2.Puxar uma carta\n3.Sair"
  )
  switch (option) {
    case "1":
      const newcard = prompt("Qual carta deseja adicionar ao baralho?")
      deck.push(newcard)
      break
    case "2":
      const withdrawnCard = deck.pop()
      if (!withdrawnCard) {
        alert("Ainda não há nenhuma carta no baralho")
      } else{
        alert("Você retirou um(a)" + withdrawnCard)
      }
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
      break
  }

} while (option !== "3")