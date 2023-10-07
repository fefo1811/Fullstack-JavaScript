import LoginValidation from "./class/LoginValidation.js"

document.getElementById("submit").addEventListener("click", () => {
    const userEmail = document.getElementById("userEmail").value
    const userPassword = document.getElementById("userPassword").value

    const email = new LoginValidation(userEmail)
    try{
        email.validateEmail()
    } catch(e){
        console.log(e)
    }
})

// function LoginValidation(userEmail){
//     this.hashtag = ""

//     for(i = 0; i <= userEmail.length; i++){
//         const char = userEmail.charAt(i)
//         if(char === "@"){
//             this.hashtag = char
//             break
//         }
//     }
// } 

    // this.email = userEmail.match(/.+(?=\@)/)[0]