module.exports = class Transfer {
    constructor(userSender, userDestination, value){
        this.userSender = userSender; // Recebrá a instância da classe User
        this.userDestination = userDestination;
        this.value = value;
        this.createdAt = new Date();
    }
}