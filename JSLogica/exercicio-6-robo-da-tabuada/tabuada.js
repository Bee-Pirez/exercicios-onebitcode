const numero = parseFloat(prompt("Me diga qual número você deseja calcular a tabuada?"))
//para concatenar todas as contas/calculos
let resultados = ""

//tabuada vai começar de 1 a 20
for (let fator = 1; fator <= 20; fator++) {
  resultados += " " + numero + " x " + fator + " = " + (numero * fator) + "\n"
}

alert(" Resultado da tabuada do " + numero + ":\n" + resultados)