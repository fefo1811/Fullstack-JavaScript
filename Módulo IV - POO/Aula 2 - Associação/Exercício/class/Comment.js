class Comment {
    constructor(username, content){
        this.username = username
        this.content = content
        // Os dois atributos acima serão passados na instanciação da classe na classe Post

        this.createdAt = new Date()
    }
}

module.exports = Comment