class Address{
    constructor(street, num, neighborhood, city, state){
        this.street = street;
        this.num = num;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
    }

    getFullAddress(){
        return `Rua ${this.street} nº ${this.num} - ${this.neighborhood}, ${this.city}/${this.state}`;
    }
}

module.exports = Address;