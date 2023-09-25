const Character = require('./Character')

class Mage extends Character {
    constructor(name, hp, att, def, magicPoints){
        super(name, hp, att, def)
        this.magicPoints = magicPoints
    }

    attack(enemie){
        this.receiveDamage(enemie)
    }

    receiveDamage(enemie){
        let damage
        damage = (this.att + this.magicPoints) - enemie.def
        enemie.hp -= damage
        console.log(`Pontos de vida de ${enemie.name} é igual a ${enemie.hp}`)
        if(enemie.hp === 0){
            console.log(`${enemie.name} se encontra fora de combate`);
        }
    }

    lifeRecover(targetChar){
        targetChar.hp += this.magicPoints * 2
    }
}

module.exports = Mage