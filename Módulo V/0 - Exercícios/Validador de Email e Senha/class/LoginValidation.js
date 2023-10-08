import EmailValidation from "./EmailValidation.js"
import PasswordValidation from "./PasswordValidation.js"

export default class LoginValidation{
    constructor(userEmail, userPassword){
        this.userEmail = userEmail
        this.userPassword = userPassword
    }

    validateEmail(){
        const email = new EmailValidation(this.userEmail)
        email.emailValidation()
    }

    validatePassword(){
        const password = new PasswordValidation(this.userPassword)
        password.passwordValidation()
    }
} 