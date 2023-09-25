// Para mexer com Session Storage


document.getElementById("sessionBtn").addEventListener("click",() => {
    const input = document.getElementById("session")
    window.sessionStorage.setItem("info", input.value) // setItem passa o nome de uma chave e armazena o valor
    input.value = null
})


document.getElementById("readSession").addEventListener("click",() => {
    const info = sessionStorage.getItem("info") // Para ler alguma informação usa-se getItem com nome da chave
    alert(info)
})


// Para mexer com Local Storage

document.getElementById("localBtn").addEventListener("click",() => {
    const input = document.getElementById("local")
    window.localStorage.setItem("info", input.value) // setItem passa o nome de uma chave e armazena o valor
    input.value = null
})


document.getElementById("readLocal").addEventListener("click",() => {
    const info = localStorage.getItem("info") // Para ler alguma informação usa-se getItem com nome da chave
    alert(info)
})

// Parar mexer com cookies
document.getElementById("cookieBtn1").addEventListener("click", () =>{
    const input = document.getElementById("cookie1")
    // "chaveCookie=value;"  "expiration=newDate(...);"  "path=/;" <- Caminho onde o cookie será acessado
    const cookieInfo = `chaveCookie=${input.value};` //Deve ter esse padrão de sintaxe
    const expiration = `expires=${newDate(2023, 3, 8)};`
    const path = `path=/;`

    //E para guardar no cookie, o metódo .cookie do document recebe as variáveis que tem a chave e valor em formato texto
    document.cookie = cookieInfo + expiration + path
})