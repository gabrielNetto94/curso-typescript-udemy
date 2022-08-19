"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Exemplo decorator
function myDecorator() {
    console.log('Iniciando Decorator');
    return function (target, property, descriptor) {
        console.log('Executando decorator');
        console.log(target);
        console.log('Property: ' + property);
        console.log(descriptor);
    };
}
class Myclass {
    testing() {
        console.log('Fim do método');
    }
}
__decorate([
    myDecorator()
], Myclass.prototype, "testing", null);
const myObj = new Myclass();
//myObj.testing()
//decorators multiplos
function decoratorA() {
    return function (target, property, descriptor) {
        console.log('executou a');
    };
}
function decoratorB() {
    return function (target, property, descriptor) {
        console.log('executou b');
    };
}
function decoratorC() {
    return function (target, property, descriptor) {
        console.log('executou c');
    };
}
class MultipleDecorators {
    //ordem de baixo para cima
    testingMultipleDecorators() {
        console.log('terminando execução');
    }
}
__decorate([
    decoratorC(),
    decoratorB(),
    decoratorA()
], MultipleDecorators.prototype, "testingMultipleDecorators", null);
const mutiple = new MultipleDecorators();
//mutiple.testingMultipleDecorators()
//class decorator
function classDecorator(constructor) {
    console.log(constructor);
    if (constructor.name === 'User') {
        console.log(`Usuário criado!`);
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const paulo = new User('Paulo bla');
//Method decorator
function enumerable(value) {
    return function (target, property, descriptor) {
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return 'Nome da máquina é: ' + this.name;
    }
}
const trator = new Machine('Tratorzão brabo');
