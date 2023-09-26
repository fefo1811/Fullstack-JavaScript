module.exports = class Installments {
    constructor(installmentValue, installmentNumber){
        this.installmentValue = installmentValue;
        this.installmentNumber = installmentNumber;
        this.installmentSituation = "pending";
    }
}