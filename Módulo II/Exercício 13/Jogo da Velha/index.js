const boardRegions = document.querySelectorAll("#gameBoard span")
let  vBoard = []
let turnPlayer = ""

// Função que vai exibir o jogador do turno
function updateTitle() {
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById("turnPlayer").innerText = playerInput.value
}

// Preparar o tabuleiro para iniciar ou reiniciar o jogo
function startGame() {
    vBoard = [["", "", ""], ["", "", ""], ["", "", ""]]
    turnPlayer = "player1"
    document.querySelector("h2").innerHTML = "<h2>Vez de: <span id='turnPlayer'></span></h2>"
    updateTitle()
    boardRegions.forEach((element) => {
        element.classList.remove("win")
        element.innerText = ""
        element.classList.add("cursor-pointer")
        element.addEventListener("click", handleBoardClick)
    })
}

// Validação dos campos preenchidos para retornar se houve vencedor ou não
function getWinRegions() {
    const winRegions = []
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
      winRegions.push("0.0", "0.1", "0.2")
    if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
      winRegions.push("1.0", "1.1", "1.2")
    if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
      winRegions.push("2.0", "2.1", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
      winRegions.push("0.0", "1.0", "2.0")
    if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
      winRegions.push("0.1", "1.1", "2.1")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
      winRegions.push("0.2", "1.2", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
      winRegions.push("0.0", "1.1", "2.2")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
      winRegions.push("0.2", "1.1", "2.0")
    return winRegions
}

// Não permitirá que um campo já preenchido seja preenchido novamente
function disableRegion(element) {
    element.classList.remove("cursor-pointer")
    element.removeEventListener("click", handleBoardClick)
}

function handleWin(regions) {
    regions.forEach((region) => {
        document.querySelector(`[data-region="${region}"]`).classList.add("win")
    })
    const playerName = document.getElementById(turnPlayer).value
    document.querySelector("h2").innerHTML = `${playerName} venceu! `
}

// Irá preencher cada quadrado com o valor X ou O
function handleBoardClick(ev) {
    const region = ev.currentTarget.dataset.region
    const rowColumn = region.split(".")
    const row = rowColumn[0]
    const column = rowColumn[1]
    if (turnPlayer === "player1") {
        ev.currentTarget.innerText = "X"
        vBoard[row][column] = "X"
    } else {
        ev.currentTarget.innerText = "O"
        vBoard[row][column] = "O"
    }

    disableRegion(ev.currentTarget)

    const winRegions = getWinRegions()
    if (winRegions.length > 0) {
        handleWin(winRegions)
    } else if (vBoard.flat().includes("")) {
        turnPlayer = turnPlayer === "player1"? "player2": "player1"
        updateTitle()
    } else {
        document.querySelector("h2").innerHTML = "Empate"
    }
}

document.getElementById("start").addEventListener("click", startGame)