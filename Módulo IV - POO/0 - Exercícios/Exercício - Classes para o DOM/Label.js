import { Component } from "./Component.js";

export class Label extends Component {
    constructor(text, parent, atributos){
        super('label', parent, Object.assign({}, atributos, {textContent: text}))
    }
}