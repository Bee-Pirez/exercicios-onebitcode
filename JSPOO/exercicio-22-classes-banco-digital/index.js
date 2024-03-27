const App = require("./App")

App.createUser("bia@email.com", "Beatriz Perez")
App.createUser("gustavo@email.com", "Gustavo Saas")
App.createUser("leo@email.com", "Leonardo")

App.deposit("bia@email.com", 100)

App.transfer("bia@email.com", "gustavo@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("leo@email.com", 2000, 24)

console.log(App.findUser("bia@email.com"))
console.log(App.findUser("bia@email.com").account)
console.log(App.findUser("gustavo@email.com"))
console.log(App.findUser("gustavo@email.com").account)
console.log(App.findUser("leo@email.com"))
console.log(App.findUser("leo@email.com").account)
console.log(App.findUser("leo@email.com").account.loans[0].installments)