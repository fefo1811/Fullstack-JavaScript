module.exports = class Database {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: [],
    }

    find(key){
        return this.#storage[key]
    }

    saveAuthor(author){
        const authorExists = this.#storage.authors.find(a => a.name === author.name)
        if(!authorExists){
            this.#storage.authors.push(author)
        }
    }

// Métodos para o Book
    findBookByName(bookName){
        // Verifica se há algum livro duplicado e se houver, não armazenará o livro duplicado na chave books
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book){
        const bookExists = this.findBookByName(book.name)
        if(!bookExists){
            this.#storage.books.push(book)
        }
    }
// Os métodos addToStock e removeFromStock estão dentro da classe Product.js
    addBookToStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    removeBooksFromStock(bookName, quantity){
        const book = this.findBookByName(BookName)
        book?.removeFromStock(quantity)
    }

    
// Métodos para o Poster
    findPosterByName(posterName){
        // Verifica se há algum livro duplicado e se houver, não armazenará o livro duplicado na chave books
        return this.#storage.posters.find(p => p.name === bookName)
    }

    savePoster(poster){
        const posterExists = this.findPosterByName(poster.name)
        if(!posterExists){
            this.#storage.posters.push(poster)
        }
    }
// Os métodos addToStock e removeFromStock estão dentro da classe Product.js
    addPosterToStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
    }

    removePosterFromStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)
    }

// Métodos de usuário
    saveUser(user){
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if(!userExists){
            this.#storage.users.push(user)
        }
    }

// Método para pedido
    saveOrder(order){
        this.#storage.orders.push(order)
    }

    showStorage(){
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data()))
    }
}