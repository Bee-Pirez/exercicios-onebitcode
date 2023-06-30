const imoveis = []
let opcao = ""

do  {
  opcao = prompt(
    "Bem vindo(a) ao seu cada seu cadastro de imóveis\n\n Seu total de imóveis:" + imoveis.length +
    "\n1.Salvar novo imóvel\n2.Visualizar imóveis salvos\n3.Sair"
  )

  switch (opcao) {
    case "1":
      const novoImovel = {}

      novoImovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
      novoImovel.quartos = parseFloat(prompt("Informe quantos quartos possui o imóvel:"))
      novoImovel.banheiros = parseFloat(prompt("Informe quantos banheiros possui o imóvel:"))
      novoImovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

      const confirmacao = confirm(
        "Deseja salvar este imóvel?\n" +
        "\nProprietário: " + novoImovel.proprietario +
        "\nQuartos: " + novoImovel.quartos +
        "\nBanheiros: " + novoImovel.banheiros +
        "\nPossui Garagem? " + novoImovel.garagem
      )

      if (confirmacao) {
        imoveis.push(novoImovel)
      }
      break
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " + (i + 1) +
          "\nProprietário: " + imoveis[i].proprietario +
          "\nQuartos: " + imoveis[i].quartos +
          "\nBanheiros: " + imoveis[i].banheiros +
          "\nPossui Garagem? " + imoveis[i].garagem
        )
      }
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== "3");