const Address = require('./class/Address');
const Person = require('./class/Person');

const endereco = new Address("Martim Pescador", 140, "Aliança", "Osasco", "SP");
const felipe = new Person("Felipe", endereco);
console.log(felipe);
console.log(felipe.address.getFullAddress());

