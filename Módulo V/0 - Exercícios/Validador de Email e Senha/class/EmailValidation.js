export default class EmailValidation{
    constructor(userEmail){
        this.userEmail = userEmail
        this.hashtag = ""
    }

    emailValidation(){
        for(let i = 0; i <= this.userEmail.length; i++){
            const char = this.userEmail.charAt(i)
            if(char === "@"){
                this.hashtag = char
                break
            }
        }
    }
    
    getHashtag(){
        console.log(this.hashtag)
    }
} 