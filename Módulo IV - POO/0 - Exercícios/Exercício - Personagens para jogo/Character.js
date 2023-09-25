class Character {
    constructor(name, hp, att, def){
        this.name = name
        this.hp = hp
        this.att = att
        this.def = def
    }

    attack(enemie){
        this.receiveDamage(enemie)
    }

    receiveDamage(enemie){
        let damage
        damage = this.att - enemie.def
        enemie.hp -= damage
        console.log(`Pontos de vida de ${enemie.name} é igual a ${enemie.hp}`)
        if(enemie.hp === 0){
            console.log(`${enemie.name} se encontra fora de combate`);
        }
    }
}

module.exports = Character