const Character = require('./Character')

class Thief extends Character {
    constructor(name, hp, att, def){
        super(name, hp, att, def)
    }

    attack(enemie){
        this.receiveDamage(enemie)
    }

    receiveDamage(enemie){
        let damage
        damage = (this.att - enemie.def) * 2
        enemie.hp -= damage
        console.log(`Pontos de vida de ${enemie.name} é igual a ${enemie.hp}`)
        if(enemie.hp === 0){
            console.log(`${enemie.name} se encontra fora de combate`);
        }
    }

}

module.exports = Thief