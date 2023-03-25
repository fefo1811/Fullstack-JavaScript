function addPlayer(){
    //Captura dos elementos HTML da página
    const namePlayer = document.getElementById("player-name")
    const positionPlayer = document.getElementById("player-position")
    const numberPlayer = document.getElementById("player-number")
    const section = document.getElementById("player-registrated")

    //Criação de elementos dentro de section
    const ul = document.createElement("ul")
    const nameLi = document.createElement("li")
    const positionLi = document.createElement("li")
    const numberLi = document.createElement("li")

    //Recebimento dos inputs e deixando-os nulos para receber mais valores
    nameLi.innerHTML = `Nome do Jogador: ${namePlayer.value}`
    positionLi.innerText = `Posição que joga: ${positionPlayer.value}`
    numberLi.innerText = `Número da Camiseta: ${numberPlayer.value}`
    namePlayer.value = null
    positionPlayer.value = null
    numberPlayer.value = null

    //Adicionando os elementos criados com os valores inputados na página
    ul.append(nameLi, positionLi, numberLi)
    section.append(ul)
}

function removePlayer(){
    //Captura dos elementos HTML da página
    const section = document.getElementById("player-registrated")
    const ul = document.getElementsByTagName("ul")
    const numberInput = document.getElementById("player-removal")

    console.log(ul[1])

    //Remoção do último valor inputado
    //section.removeChild(ul[ul.length - 1])    
}