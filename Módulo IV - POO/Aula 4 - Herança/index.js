class Property {
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter(meter){
        return this.price / this.area
    }
}

class House extends Property {

}

class Apartment extends Property{
    constructor(number, area, price){
        super(area, price)
        this.number = number
    }

    getFloor(){
        return this.number.slice(0, -2) // 0 = a string toda, -2 = exceto o dois últimos caracteres da string
    }
}


const land = new Property(200, 50000)
const someHouse = new House(300, 12000)
const apt = new Apartment("201", 100, 160000)


console.log(apt.getFloor())