const Account = require("./Account");

module.exports = class User {
    constructor(fullname, email){
        this.fullname = fullname;
        this.email = email;
        this.account = new Account(this); // É passada a própria classe User como atributo para a classe Account
    }
}