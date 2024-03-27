//variável para armazenar a opcao que o usuário vai escolher 1 entre 5
let opcao= ""

do {
  opcao = prompt(
    "seja bem-vindo(a)\n" +
    "\nEscolha uma das opções:" +
    "\n1 - opção 1" +
    "\n2 - opção 2" +
    "\n3 - opção 3" +
    "\n4 - opção 4" +
    "\n5 - Encerrar" 
    )
  //switch para controlar cada oção
  switch (opcao) {
    case "1":
      alert("Você escolehu a opção 1")
      break
    case "2":
      alert("Você escolehu a opção 2")
      break
    case "3":
      alert("Você escolehu a opção 3")
      break
    case "4":
      alert("Você escolehu a opção 4")
      break
    case "5":
      alert("O programa será encerrado...")
      break
    default:
      alert("Inválido! Você deve escolher uma das cinco opções")
  }

} while (opcao !=="5") //enquanto opcao diferente da string 5

