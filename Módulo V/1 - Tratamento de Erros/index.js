function sum(a, b){
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if(isNaN(firstNumber) || isNaN(secondNumber)){
        throw new Error("O argumento deve conter dois números")
    }

    return firstNumber + secondNumber
}

try{
    // Bloco de código que vai tentar executar códigos para encontrar algum erro
    console.log(sum(2, 3)); //Irá somar normalmente
    console.log(sum(true, 3)); //Converterá true (1) com o número 3
    console.log(sum(undefined, 5)); //Dará erro e exibirá o texto dentro de Error()
    console.log(sum(18, "2"));
} catch (e) {
    // Encontrado um erro, ele captura e executa o que deve ser feito e não deixa a execução ser interrompida abruptamente
    console.log("Ocorreu um erro");
} finally {
    // Bloco que sempre será executado caso tenha ou não erro
    console.log("Cálculo finalizado")
}