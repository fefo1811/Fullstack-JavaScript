function init() {
    let numbers = []
    alert("Bem-vindo! Vou iniciar seu cálculo")
    const option = Number(prompt(` Qual operação deseja fazer?
        1. Soma
        2. Subtração
        3. Multiplicação
        4. Divisão
    `))

    for (i = 0; i < 2; i++) {
        numbers.push(prompt(`Informe o ${i + 1}º valor:`))
    }
    
    numbers = numbers.parseInt
    console.log(typeof(numbers))
    console.log(typeof(numbers))
    
    
    const sum = () => { 
        const result = numbers[0] + numbers[1]
        alert(`${numbers[0]} + ${numbers[1]} = ${result}`)
    }
    console.log(option)

    switch(option){
        case 1:
            sum()
            break
    }
}
init()