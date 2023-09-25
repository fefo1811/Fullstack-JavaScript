export class Component {
    #element
    constructor(tag, parent, atributos){
        this.tag = tag
        this.parent = parent
        this.atributos = atributos
        this.buildElement()
    }

    getDomElement(){
        return this.#element
    }

    buildElement(){
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.atributos)
        return this
        // Método vai criar o elemento conforme o nome da tag passada na instaciação
        //Object.assign vai fazer a atribuição do this.atributos no #element
    }

    renderElement(){
        if(this.parent instanceof Component){
            this.parent.getDomElement().append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
        // Verifica se o parent é uma instância de Component ou não e faz a atribuição do elemento criado
    }
}