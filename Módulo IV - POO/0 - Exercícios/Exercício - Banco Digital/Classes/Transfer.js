export default class Transfer {
    constructor(userSender, userDestination, value, createdAt){
        this.userSender = userSender; // Recebrá a instância da classe User
        this.userDestination = userDestination;
        this.value = value;
        this.createdAt = createdAt;
    }
}