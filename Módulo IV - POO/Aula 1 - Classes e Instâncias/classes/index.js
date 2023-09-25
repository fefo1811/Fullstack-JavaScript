import { User } from './class/User.js';
// Classe que compara faz autenticação dos dados e retorna mensagem de acerto ou erro

import { Product } from './class/Product.js';

const felipe = new User("Felipe da Silva Rodrigues", "felipedasr3232@gmail.com", 123456);
felipe.login("felipedasr3232@gmail.com", 123456);

const feijao = new Product("Feijão", "O feijão é uma semente com alto valor nutritivo, principalmente ferro", 30);
console.log(feijao.inStock);
feijao.addToStock(56);
console.log(feijao.inStock);
console.log(feijao.price);
console.log(feijao.calculateDiscount(10));
