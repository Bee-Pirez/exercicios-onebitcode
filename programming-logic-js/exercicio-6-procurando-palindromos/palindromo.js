const word = prompt("Olá, informe uma palavra:")
// armazenar a palavra ao contrário
let invertedWord = ""

//for começa executando da última posição da palavra
//laço vai percorrer as posições da palavra começando do último índice e indo até o primeiro
for (let i = word.length - 1; i >= 0; i--) {
  invertedWord += word[i]
}

if (word === invertedWord) {
  alert(" A palavra " + word + " é considerada um palíndromo ")
} else{
  alert(" A palavra " + word + " não é considerada um palíndromo\n\n" + 
  "Observe as diferenças: " + word + " ->> " + invertedWord)
}


