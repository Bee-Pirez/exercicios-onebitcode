const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const gustavo = new Mage('Gustavo', 90, 4, 2, 14)
const beatriz = new Thief('Beatriz', 140, 22, 8)
const leo = new Warrior('Leo', 200, 14, 12, 4)

console.table({ gustavo, beatriz, leo })

leo.switchStance()
gustavo.attack(leo)
beatriz.attack(gustavo)

console.table({ gustavo, beatriz, leo })

leo.attack(gustavo)
gustavo.heal(gustavo)
beatriz.attack(leo)

console.table({ gustavo, beatriz, leo })