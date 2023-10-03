document.getElementById("submit").addEventListener("click", () => {
    const userEmail = document.getElementById("userEmail").value
    const userPassword = document.getElementById("userPassword").value

    console.log(new LoginValidation(userEmail))
})

function LoginValidation(userEmail){
    this.email = userEmail.match(/.+(?=\@)/)[0]
}


