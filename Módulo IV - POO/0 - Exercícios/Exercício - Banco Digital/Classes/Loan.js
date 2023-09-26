const Installments = require("./Installments");

module.exports = class Loan {
    static #fee = 1.05

    constructor(value, installments){
        this.value = value;
        this.createdAt = new Date();
        this.installments = [] // Vai receber uma instância de Installments e será uma lista

        // i representa a quantidade de parcelas
        // Será instanciado um Installment para cada número i
        // A instanciação do Installments receberá um value será multiplicado por #fee
        for(let i = 1; i <= installments; i++){
            this.installments.push(new Installments((value * Loan.#fee) / installments, i))
        }
    }

    static get fee(){
        return Loan.#fee
    }

    static set fee(feePercentage){
        Loan.#fee = 1 + (feePercentage / 100)
    }
}
