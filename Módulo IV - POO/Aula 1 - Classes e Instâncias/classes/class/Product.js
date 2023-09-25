class Product {
    constructor(name, description, price){
      this.name = name;
      this.description = description
      this.price = price;
      this.inStock = 0;
    }
  
    addToStock(quantidade){
      this.inStock += quantidade; 
    }
  
    calculateDiscount(porcentagem){
      return this.price * (100 - porcentagem)/100;
    }
  }

  module.exports = Product;