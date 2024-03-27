const Author = require("./Author");

const bee = new Author("Bee")

const post = bee.writePost("Título do Post", "Lorem ipsum dolor sic amet ...")

post.addComment("Guga", "Muito bom!")
post.addComment("Bioca", "Achei interessante.")

console.log(bee)
console.log(post)