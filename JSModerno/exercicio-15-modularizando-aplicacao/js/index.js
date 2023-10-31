import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
//export nomeado precisa da chave em volta
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

const input = document.getElementById("input")




document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.getElementById("clear").addEventListener("click", handleClearButton)
input.addEventListener("keydown", handleTyping)
document.getElementById("equal").addEventListener("click", calculate)
document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)
document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)