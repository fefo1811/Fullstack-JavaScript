class Loan {
    static #interestRate = 1654

    constructor(loanFee, createdAt, installments){
        this.loanFee = loanFee;
        this.createdAt = createdAt;
        this.installments = installments // Vai receber uma instância de Installments e será uma lista
    }

    static getInterestRate(){
        console.log(this.#interestRate)
    }

    static setInterestRate(rateValue){
        this.#interestRate = rateValue * 100
    }
}
