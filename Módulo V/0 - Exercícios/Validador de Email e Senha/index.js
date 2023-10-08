import LoginValidation from "./class/LoginValidation.js"

document.getElementById("submit").addEventListener("click", () => {
    const userInputs = {
        userEmail: document.getElementById("userEmail").value,
        userPassword: document.getElementById("userPassword").value    
    }

    const login = new LoginValidation(userInputs.userEmail, userInputs.userPassword)
    try{
        login.validateEmail()
        login.validatePassword()
    } catch(e){
        console.log(e)
    } finally {
        console.log("Execução perfeita")
    }
})