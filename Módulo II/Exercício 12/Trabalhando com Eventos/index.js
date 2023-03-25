function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert("Usuário criado")
    } else {
        alert("Senhas não conferem")
    }
}

const button = document.getElementById("register-button")
button.addEventListener("click", register)

function removeListener(){
    button.removeEventListener("click", register)
    alert("Event removed")
}

/*
    == HTML ==
<button onclick="register(this.parentNode)">Registrar</button>
    > Passando o elemento-pai (section) do elemento button 
*/



/*
function register(element){
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value
        > Acessando o elementos-filho, procurando pelo identificador e passando o valor
}
*/