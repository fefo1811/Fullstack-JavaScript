// Capturando todo o escopo do formulário
const form = document.getElementById("orderForm")
// Capturando o botão para adicionar a função "Adicionar Habilidade"
const button = document.getElementById("button")

// Recebendo o nome completo do desenvolvedor
form.addEventListener("submit", (ev) => {
    // Prevenindo a ação padrão do formulário
    ev.preventDefault()
    
    const fullname = document.getElementById("fullname").value
    console.log(fullname)
})

// Evento que irá adicionar campos para input das habilidades do desenvolvedor
button.addEventListener("click", () => {
    const ul = document.getElementById("hardSkills")
    const li = document.createElement("li")
    const input = document.createElement("input")
    const h3 = document.createElement("h3")
    const button = document.createElement("button")
    const br = document.createElement("br")
    const radio = document.createElement("input")
    const radio2 = document.createElement("input")
    const radio3 = document.createElement("input")
    const label = document.createElement("label")
    const label2 = document.createElement("label")
    const label3 = document.createElement("label")
    
    h3.innerText = "Habilidade:"

    radio.type = "radio"
    radio.value = "0-2 anos"
    radio.name = "0-2 anos"
    label.htmlFor = "0-2 anos"
    label.innerText = "0-2 anos"

    radio2.type = "radio"
    radio2.value = "3-4 anos"
    radio2.name = "3-4 anos"
    label2.htmlFor = "3-4 anos"
    label2.innerText = "3-4 anos"

    radio3.type = "radio"
    radio3.value = "5+ anos"
    radio3.name = "5+ anos"
    label3.htmlFor = "5+ anos"
    label3.innerText = "5+ anos"

    button.innerText = "Remover Habilidade"
    button.id = "skill-removal"

    li.append(input, radio, label, radio2, label2, radio3, label3, br, button)
    ul.append(h3, li)
})
const removalButton = document.getElementById("skill-removal")

removalButton.addEventListener("click", () => {
    console.log("Deu certo")
})

/* Problema para resolver: Remoção das habilidades através do botão:

Falta identificar uma forma de excluir uma <li> específica, 
acredito eu que deva criar uma id para cada <li> para facilitar */
