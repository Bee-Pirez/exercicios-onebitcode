const turista = prompt("Olá, turista! Insira seu nome:")
let cidades = ""
let contagem = 0

let proximo = prompt("Você já visitou alguma cidade? (Sim/Não)")

while (proximo === "Sim") {
  let cidade = prompt("Qual o nome dessa cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  proximo = prompt("Você visitou mais alguma outra cidade? (Sim/Não)")
}

alert(
  "Turista:" + turista +
  "\n Total de cidades visitadas:" + contagem +
  "\n Lista de cidades visitadas:\n" + cidades
)