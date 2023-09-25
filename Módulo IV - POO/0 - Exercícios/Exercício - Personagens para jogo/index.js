const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const arthur = new Mage("Arthur", 90, 4, 2, 14)
const beatrice = new Thief("Beatrice", 140, 22, 8)
const kane = new Warrior("kane", 200, 14, 12, 4)

console.table({
    arthur, beatrice, kane
})
kane.switchStyle()
arthur.attack(kane)
beatrice.attack(arthur)
kane.attack(arthur)

console.table({
    arthur, beatrice, kane
})