const Database = require("./Database")
const Author = require("./classes/Author")
const Book = require("./classes/Book")
const Order = require("./classes/Order")
const Poster = require("./classes/Poster")
const User = require("./classes/User")

module.exports = class App {
    static #dataBase = new Database()

    createUser(name, email, password){
        const user = new User(name, email, password)
        App.#dataBase.saveUser(user)
    }

    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#dataBase.saveAuthor(author)
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock){
        const book = new Book(title, synopsis, genre, pages, author, author, description, price, inStock)
        App.#dataBase.saveBook(book)
    }

    addBook(bookName, quantity){
        App.#dataBase.addBookToStock(bookName, quantity)
    }
    
    createPoster(name, description,height, width){
        const poster = new Poster(name, description, height, width)
        App.#dataBase.savePoster(poster)
    }

    addPoster(posterName, quantity){
        App.#dataBase.addPosterToStock(posterName, quantity)
    }

    createOrder(items, user){
        const order = new Order(items, user)
        App.#dataBase.saveOrder(order)
        order.data.items.forEach(({product, quantity}) => {
            if(product instanceof Book) {
                App.#dataBase.removeBooksFromStock(product.name, quantity)
            } else if (product instanceof Poster){
                App.#dataBase.removePosterFromStock(product.name, quantity)
            }
        })
    }

    getUsers(){
        return App.#dataBase.find('users')
    }

    getAuthors(){
        return App.#dataBase.find('author')
    }

    getOrders(){
        return App.#dataBase.find('orders')
    }

    showDatabase(){
        App.#dataBase.showStorage()
    }
}