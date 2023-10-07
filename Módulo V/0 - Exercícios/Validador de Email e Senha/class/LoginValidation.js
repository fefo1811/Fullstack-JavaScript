import EmailValidation from "./EmailValidation.js"

export default class LoginValidation{
    constructor(userEmail){
        this.userEmail = userEmail
    }

    validateEmail(){
        const email = new EmailValidation(this.userEmail)
        email.emailValidation()
        email.getHashtag()
    }
} 