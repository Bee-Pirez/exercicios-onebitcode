//cada função do cálculo das áreas

//Área triângulo
function areaTriangulo() {
  const base = parseFloat(prompt("Informe o valor da base do triângulo:"))
  const altura = parseFloat(prompt("Informe o valor da altura do triângulo"))
  return base * altura / 2
}

//Área retângulo
function areaRetangulo() {
  const base = parseFloat(prompt("Informe o valor da base do retângulo:"))
  const altura = parseFloat(prompt("Informe o valor da altura do retângulo:"))
  return base * altura
}

//Área do quadrado
function areaQuadrado() {
  const lado = parseFloat(prompt("Informe o valor do lado do quadrado:"))
  return lado * lado
}

//Área do trapézio
function areaTrapezio() {
  const baseMaior = parseFloat(prompt("Informe o valor da base maior do trapézio:"))
  const baseMenor = parseFloat(prompt("Informe o valor da base menor do trapézio"))
  const altura = parseFloat(prompt("Informe o valor da altura do trapézio:"))
  return (baseMaior + baseMenor) * altura / 2
}

//Área do círculo
function areaCirculo() {
  const raio = parseFloat(prompt("Informe o valor do raio do círculo:"))
  return (3.14 * raio * raio)
}


//função para exibir menu
function menu() {
  return prompt(
    "Calculadora Geométrica\n\n" +
    "1. Calcular área do triângulo\n" +
    "2. Calcular área do retângulo\n" +
    "3. Calcular área do quadrado\n" +
    "4. Calcular área do trapézio\n" +
    "5. Calcular área do círculo\n" +
    "6. Sair\n"
  )
}

//função para executar
function executar() {
  let opcao = ""

  do{
    opcao = menu()
    let resultado

    switch (opcao) {
      case "1":
        resultado = areaTriangulo()
        break
      case "2":
        resultado = areaRetangulo()
        break
      case "3":
        resultado = areaQuadrado()
        break
      case "4":
        resultado = areaTrapezio()
        break
      case "5":
        resultado = areaCirculo()
        break
      case "6":
        alert("Encerrando calculadora...")
        break
      default:
        alert("Você escolheu uma opção que não é válida")
        break
    }

    if (resultado) {
      alert("O resultado do cáulculo é: " + resultado)
    }

  }while (opcao!== "6")
}

//chamar função executar
executar ()