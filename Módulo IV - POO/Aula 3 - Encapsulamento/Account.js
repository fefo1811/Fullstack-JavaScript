class Account{
    #password
    #balance

    constructor(user){
        this.email = user.email
        this.#password = user.password
        this.#balance = 123000
    }

    getPassword(email, password){
        if(this.#autenticate(email, password)){
            return this.#balance
        } else {
            return "Está dando erro"
        }
    }

    #autenticate(email, password){
        return this.email === email && this.#password === password
    }
}

const user = {
    email: 'felipedasr3232@gmail.com',
    password: '123456'
}

const myAccount = new Account(user)
console.log(myAccount.getPassword('felipedasr3232@gmail.com', '123456'));