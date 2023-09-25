const Comment = require('./Comment') // Importando a classe comentário

class Post {
    constructor(title, postContent, author){
        this.title = title
        this.postContent = postContent
        this.author = author
        // Os três atributos acima serão passados na instanciação da classe na classe Author

        this.comments = []
        // O atributo vai receber os comentários da instaciação da classe Comment no método addComment

        this.createdAt = new Date()
    }

    addComment(username, commentContent){
        this.comments.push(new Comment(username, commentContent))
        // Método que instancia comentários onde é passado o nome do usuário e o conteúdo do comentário
    }
}

module.exports = Post