// Classe para fazer os pedidos
module.exports = class Order {
    #total
    #items
    #user
    constructor(items, user){
        // Verifica se a quantidade que estará dentro do items é maior do que a quantidade do estoque (inStock) do produto
        items.forEach((product, quantity) => {
            if(quantity > product.inStock){
                throw new Error("Quantidade insuficiente em estoque.")
            }
        })
        this.#items = items
        this.#user = user
        this.#total = items.reduce((sum, {product, quantity}) => {
            sum + (product.price * quantity), 0
        })
    }

    get data() {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}