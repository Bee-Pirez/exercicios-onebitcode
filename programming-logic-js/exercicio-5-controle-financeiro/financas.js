//pedir saldo e criar variável da opção do usuário
let saldo = parseFloat(prompt("Informe sua quantidade de dinheiro inicial:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$" + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor que deseja adicionar:")) //para não concatenar, usar parseFloat
      break
    case "2":
      saldo -= parseFloat(prompt("Informe o valor que deseja remover:")) //para não concatenar, usar parseFloat
      break
    case "3":
      alert("O programa será encerrado...")
      break
    default:
      alert("Inválido! Escolha uma das opções.")
      break
  }
} while (opcao !== "3")