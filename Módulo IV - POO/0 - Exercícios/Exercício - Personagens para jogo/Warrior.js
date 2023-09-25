const Character = require('./Character')

class Warrior extends Character {
    constructor(name, hp, att, def, shieldPoints){
        super(name, hp, att, def)
        this.shieldPoints = shieldPoints
        this.style = "Attacker"
    }

    attack(enemie){
        if(this.style === "Attacker"){
            super.attack(enemie)
        }
    }

    switchStyle(){
        if(this.style === "Attacker"){
            this.style = "Defender"
            this.def += this.shieldPoints
        } else {
            this.style = "Attacker"
            this.def -= this.shieldPoints
        }
    }
}

module.exports = Warrior