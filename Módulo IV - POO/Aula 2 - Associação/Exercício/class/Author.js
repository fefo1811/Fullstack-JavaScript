const Post = require('./Post')

class Author{
    constructor(name){
        this.name = name
        this.posts = []
    }

    addPost(title, postContent){
        const post = (new Post(title, postContent, this))
        // Método que instancia a classe Post dentro da classe Author e pede um titulo e o conteúdo da postagem
        this.posts.push(post)
        return post
    }
}

module.exports = Author