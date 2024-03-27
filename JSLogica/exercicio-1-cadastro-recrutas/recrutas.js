const firstName = prompt("Informe o promeiro nome do recruta:")
const surname = prompt("Informe o sobrenome do recruta")
const studyArea = prompt("Qual é o campo de estudo do recruta?")
const yarOfBirth = prompt("Qual é o ano de nascimento do recruta?")

alert(
  "Recruta cadastrado com sucesso\n" +
  "\nNome completo: " + firstName + " " + surname +
  "\nCampo de estudo: " + studyArea +
  "\nIdade: " + (2023 - yarOfBirth)
)