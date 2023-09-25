export default class Account {
    constructor(balance, deposits = [], loans = [], transfers = []){
        this.balance = balance;
        this.deposits = deposits
        this.loans = loans 
        this.transfers = transfers
    }
}