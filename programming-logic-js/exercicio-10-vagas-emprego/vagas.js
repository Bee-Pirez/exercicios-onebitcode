//array no escopo mais externo para armazenar as vagas salavas
 const vagas = []

 //função listar vagas disponíveis
function listarVagas() {
  //para transformar um array em um texto -> método array .reduce -> recebe uma função de callback
  const vagasTexto = vagas.reduce((textoFinal, vaga, indice) => {
    //incrementar o índice em 1 para exibir o número da vaga
    const numeroVaga = indice + 1
    textoFinal += numeroVaga + ". "
    //vaga que vou salvar no array vai ser um objeto (vaga precisa de vários valores diferentes)
    textoFinal += vaga.nome
    //array de candidatos dentro do objeto vagas
    textoFinal += " (" + vaga.candidatos.length + " candidato(s) na vaga)\n"
    return textoFinal
  }, "")

  alert(vagasTexto)
}

//função criar nova vaga
 function novaVaga() {
  const nome = prompt("Informe o nome da vaga que deseja adicionar:")
  const descricao = prompt("Informe a descrição dessa vaga:")
  const dataLimite = prompt("Informe uma data limite para a vaga: (dd/mm/aaaa)")
  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
    "Nome da vaga: " + nome + "\nDescrição da vaga: " + descricao + "\nData limite da vaga: " + dataLimite
  )
//se o usuario confirmar que quer criar, objeto criarVaga e colocar a propriedade candidatos como um array vazio
  if (confirmacao) {
    const novaVaga = {nome, descricao, dataLimite, candidatos: [] }
    //array de escopo mais externo com .push apra colocar a vaga criada dentro do array
    vagas.push(novaVaga)
    alert("Vaga criada com sucesso!")
  }
 }


//função visualizar uma vaga
function visualizarVaga() {
  const indice = prompt("Informe o índice da vaga que você deseja visualizar:")
  //vaga é igual ao array vagas na posição do índice
  const vaga = vagas[indice - 1] //
  //exibir informações de um array na tela -> candidados dentro do obejto vagas com .reduce e a função de callback
  const candidatosTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")
  alert(
    "Vaga Nº" + indice + 
    "\nNome da vaga: " + vaga.nome + 
    "\nDescrição da vaga: " + vaga.descricao + 
    "\nData limite da vaga: " + vaga.dataLimite + 
    "\nQuantidade de candidatos: " + vaga.candidatos.length + 
    "\nCandidatos inscritos: " + candidatosTexto
  )
}

//função inscrever um candidato na vaga
function inscreverCandidato() {
  const candidato = prompt("Informe o nome do candidato(a):")
  const indice = prompt("Informe o índice da vaga que o candidato deseja se inscrever:")
  const vaga = vagas[indice - 1]

  const confirmacao = confirm(
    "Deseja inscrever o candidato " + candidato + " na vaga Nº" + indice + "?" + "\nNome da vaga:" + vaga.nome + "\nDescrição da vaga:" + vaga.descricao + "\nData limite da vaga:" + vaga.dataLimite
  )
  if (confirmacao) {
    vaga.candidatos.push(candidato)

    alert("Inscrição realizada com sucesso!")
  }
}

//função excluir vaga
function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:") - 1
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga Nº:" + (indice + 1) + "?\n" + "Nome da vaga:" + vaga.nome 
  )
  if (confirmacao) {
    //método array para excluir elementos específicos e se quiser substituir por outros
    vagas.splice(indice, 1)
    alert("Vaga excluida com sucesso!")
  }
}

//função editar vaga existente
function editarVaga() {
  const indice = prompt("Informe o índice da vaga que você deseja editar:")
  const vaga = vagas[indice -1]

  const novoNome = prompt(
    "\nInforme o novo nome da vaga:"
  )
  const novaDescricao = prompt(
    "\nInforme a nova descrição da vaga:"
  )
  const novaDataLimite = prompt(
    "\nInforme a nova data limite da vaga:"
  )

  const confirmacao = confirm (
    "Deseja salvar as alterações na vaga Nº" + indice + "?\n" +
    "\nVaga com as novas informações:" +
    "\n-Nome da vaga:" + novoNome + "\n-Descrição da vaga:" + novaDescricao + "\n-Data limite da vaga:" + novaDataLimite
  )
  if (confirmacao) {
    //vaga existente que será atualizada(com o níndice fornecido pelo usuário)
    vagas[indice - 1] = {
      //atribui o novo nome da vaga à propriedade 'nome', 'descricao' e 'dataLimite' do objeto
      nome: novoNome,
      descricao: novaDescricao,
      dataLimite: novaDataLimite,
      candidatos: vaga.candidatos
    }

    alert("A vaga foi editada com sucesso")
  }
}

//função abra o menu
function menu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego" +
    "\n\nEscolha uma das opções" +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar uma nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um(a) candidato(a)" +
    "\n5. Excluir uma vaga" +
    "\n6. Editar vaga existente" +
    "\n7. Sair"
  )

  return opcao
}

//função para executar
function executar() {
  let opcao = ""

  do {
    opcao = menu()

    switch (opcao) {
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        visualizarVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
        break
      case "6":
        editarVaga()
        break
      case "7":
        alert("Saindo do programa...")
        break
      default:
        alert("Você escolheu uma opção inválida!")
        break
    }
  } while (opcao !== "7");
}

executar()