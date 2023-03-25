const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")

// Impedir inserção de caracteres que não sejam os que forem exibidos pelos botões na tela e que estejam dentro da array
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
document.querySelectorAll(".charKey").forEach((charKeyBtn) => {
    charKeyBtn.addEventListener("click", () => {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById("clear").addEventListener("click", () => {
    input.value = ""
    input.focus()
})

input.addEventListener("keydown", (ev) => {
    ev.preventDefault() //Não será inserido o valor da tecla pressionada
    if (allowedKeys.includes(ev.key)) { //key se refere ao botão que foi pressionado
        input.value += ev.key //Se for um valor que esteja dentro da allowedKeys, ela será acrescentada ao input
        return
    }
    if (ev.key === "Backspace") { //Para capturar a ação da tecla Backspace
        input.value = input.value.slice(0, -1) // 0 representa o primeiro número. -1 representa o penúltimo número. Ele apagará o último número.
    }
    if (ev.key === "Enter") {
        calculate()
    }
})

document.getElementById("equal").addEventListener("click", calculate)

function calculate() {
    const result = eval(input.value) //Funcionalidade que executará o código passado. No exemplo prático, ele interpretará igual num console, onde reconhecerá os números e os operadores e imprimirá no input result o calculo
    resultInput.value = result
}

