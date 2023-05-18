const vehicle1 = prompt("Informe o nome do primeiro veículo:")
const speed1 = parseFloat(prompt("Informe a velocidade do primeiro veículo:"))

const vehicle2 = prompt("Informe o nome do segundo veículo:")
const speed2 = parseFloat(prompt("Informe a velocidade do segundo veículo:"))

if (speed1 > speed2){
  alert(vehicle1 + " é mais rápido do que " + vehicle2)
} else if (speed2 > speed1){
  alert(vehicle2 + " é mais rápido do que " + vehicle1)
} else{
  alert(vehicle1 + "e" + vehicle2 + " possuem valocidades iguais ")
}