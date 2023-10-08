export default class PasswordValidation {
    constructor(userPassword){
        this.userPassword = userPassword
    }

    passwordValidation(){
        if(
            this.userPassword.length < 8 || // Verificação do tamanho da senha
            !this.userPassword.match(/[a-z]/) || // Verifica se há letra minúscula
            !this.userPassword.match(/[A-Z]/) || // Verifica se ha letra maiúscula
            !this.userPassword.match(/\d/) || // Verifica se há número
            !this.userPassword.match(/[^a-zA-Z0-9\s]/) // Verifica se há caractere especial. [^] <- Inverte uma expressão regular. Está buscando por algo que não se encaixa como letra, número ou espaço.
        ) {
            const err = new Error("Senha inválida")
            err.input = "password"
            throw err
        }
    }
}