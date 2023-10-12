console.log("Programa iniciado")

// const timeoutId = setTimeout(() => {
//     console.log("Se passaram 6 segundos desde que o programa foi iniciado")
// }, 1000 * 6)

// clearTimeout(timeoutId)

let seconds = 0
const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos.`)
    if(seconds > 10) {
        clearInterval(intervalId)
        console.log("Programa encerrado");
    }
}, 1000 * 3)

