import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const title = new Component('h1', 'body', {textContent: 'Olá, Mundo'})
console.log(title);
title.renderElement()