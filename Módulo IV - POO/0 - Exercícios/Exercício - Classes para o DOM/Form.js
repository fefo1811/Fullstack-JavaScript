import { Component } from "./Component.js";

export class Form extends Component {
    constructor(parent, atributos){
        super('form', parent, atributos)
    }

    addChildren(...children){
        children.forEach((child) => {
            this.getDomElement().appendChildren(child.getDomElement())
        })
    }
}