class Vehicle {
    move(){
        console.log("O veículo está se movendo")
    }
}

class Car extends Vehicle {
    move(){
        console.log("O carro está se movendo")
    }
}

class Ship extends Vehicle {
    move(){
        console.log("O navio está navegando");
    }
}

class Aircraft extends Vehicle {
    move(speed){
        console.log(`A aeronave está voando a ${speed}km/h`);
    }
}

const carro = new Car()
const navio = new Ship()
const aero = new Aircraft()

// carro.move()
// navio.move()
// aero.move(235)

function start(vehicle){
    console.log("Está iniciando a partida...");
    vehicle.move();
}
Object.assign(aero.move(), 123)
start(carro)
start(navio)
start(aero)