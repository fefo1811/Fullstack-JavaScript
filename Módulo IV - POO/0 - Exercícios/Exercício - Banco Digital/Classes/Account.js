module.exports = class Account {
    #balance

    constructor(user){
        this.ownerAccount = user;
        this.#balance = 0;
        this.deposits = [];
        this.loans = [];
        this.transfers = [];
    }

    get balance(){
        return this.#balance
    }
// O método vai receber a instância já criada da classe Deposit
    addDeposit(deposit){
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

// O método vai receber a instância já criada da classe Loan
    addLoan(loan){
        this.#balance += loan.value
        this.loans.push(loan)
    }

// O método vai receber a instância já criada da classe Transfer e terá verificação de quem é que fez a transferência
    addTransfer(transfer){
        if(transfer.userSender.email === this.ownerAccount.email){
            this.#balance -= transfer.value
            this.transfers.push(transfer)
        } else if (transfer.userDestination === this.ownerAccount.email){
            this.#balance += transfer.value
            this.transfers.push(transfer)
        }
    }
}