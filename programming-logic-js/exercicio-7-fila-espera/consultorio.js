let fila = []
let opcao = ""

do {
  let pacientes = ""
  for ( let i = 0; i < fila.length; i++){
    pacientes += (i + 1) + "°" + "" + fila[i] + "\n"
  }

  opcao = prompt(
    "Pacientes em espera: \n" + pacientes +
    "\n- O que deseja fazer:\n1.Adicionar novo paciente\n2.Consultar paciente\n3.Pesquisar posição do paciente \n4.Sair\n"
  )

  switch (opcao) {
    case "1": 
      const addPaciente = prompt("Qual é o nome do paciente que deseja adicionar?")
      fila.push(addPaciente)
      break
    case "2":
      const pacienteConsultado = fila.shift()
      if (!pacienteConsultado) {
        alert("A fila de espera está vazia. Não há pacientes na fila!")
      } else {
        alert(pacienteConsultado + " foi removido da fila.")
      }
      break
    case "3":
      const nomePaciente = prompt("Digite o nome do paciente que deseja pesquisar:");
      const posicao = fila.indexOf(nomePaciente);
      if (posicao !== -1) {
        alert("O(a) paciente " + nomePaciente + " está na posição " + (posicao + 1) + " da fila de espera.");
      } else {
        alert("O(a) paciente " + nomePaciente + " não foi encontrado(a) na fila de espera.");
      }
      break;
    case "4":
      alert("Encerrando fila de espera...")
    default:
      alert("Opção inválida!. Escolha uma opção váilda da próxima vez.")
      break
  }
}while (opcao !== "4")