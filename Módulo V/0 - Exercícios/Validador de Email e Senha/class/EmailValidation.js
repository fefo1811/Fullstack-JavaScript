export default class EmailValidation{
    constructor(userEmail){
        this.userEmail = userEmail
    }

    emailValidation(){
        // O email deve ter no mínimo dois caracteres antes e depois do @ e também dois depois do .
        if(!this.userEmail.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
            const err = new Error("Email inválido")
            err.input = "email"
            throw err
        }
    }
}