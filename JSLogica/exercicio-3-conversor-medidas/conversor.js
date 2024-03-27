const measure = prompt ("insira uma medida em metros:")

const unit = prompt (
  "Para qual unidade de medida você deseja converter?" +
  "\n1 - milímetros (mm)" +
  "\n2 - centímetros (cm)" +
  "\n3 - decímetros (dm)" +
  "\n4 - decâmetros (dam)" +
  "\n5 - hectômetro (hm)" +
  "\n6 - quilômetro (km)"
)

switch (unit) {
  case "1":
    alert("Resultado: " + measure + "m =" + measure * 1000 + "mm")
    break
  case "2":
    alert("Resultado: " + measure + "m =" + measure * 100 + "cm")
    break
  case "3":
    alert("Resultado: " + measure + "m =" + measure * 10 + "dm")
    break
  case "4":
    alert("Resultado: " + measure + "m =" + measure / 10 + "dam")
    break
  case "5":
    alert("Resultado: " + measure + "m =" + measure / 100 + "hm")
    break
  case "6":
    alert("Resultado: " + measure + "m =" + measure / 1000 + "km")
    break
  default:
    alert("Opção inválida")
    break
}