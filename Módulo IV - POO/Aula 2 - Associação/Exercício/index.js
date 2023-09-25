const Author = require("./class/Author");

const autor = new Author("Felipe")
const post = autor.addPost("Criando uma classe", "Criei aqui uma coisa interessante bkáblaalbllablba")
post.addComment("Felipe da Silva", "Muito bom")
post.addComment("Valentin", "Auauauau")

console.log(autor);
console.log(post);