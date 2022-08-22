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
//const myObj = new Myclass()
//myObj.testing()
//------------------------------------------------------------------------------------
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
//const mutiple = new MultipleDecorators()
//mutiple.testingMultipleDecorators()
//------------------------------------------------------------------------------------
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
//const paulo = new User('Paulo bla')
//Method decorator
function enumerable(value) {
    return function (target, property, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return 'Nome da máquina é: ' + this.name;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine('Tratorzão brabo');
//console.log(trator.showName())
//------------------------------------------------------------------------------------
//Accessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
const charmander = new Monster('Charmander', 30);
//console.log(charmander)
//------------------------------------------------------------------------------------
//Property decorator
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID('1');
//console.log(newItem)
////------------------------------------------------------------------------------------
//Exemplo Class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(10);
const newPen = new Pen(12);
console.log(newBook);
console.log(newPen);
//------------------------------------------------------------------------------------
//Exemplo method decorator
function checkIfUserPost() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        //console.log(childFunction)
        //arumentos da função
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log('Usuário já postou');
                return null;
            }
            else {
                //retorna para continuar a execução da função
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPost()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('Primeiro Post', newPost.alreadyPosted);
newPost.post('Segundo Post', newPost.alreadyPosted);
//------------------------------------------------------------------------------------
//Property decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`Valor deve ter no máxmimo ${limit} digitos`);
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
const Admin1 = new Admin('123456789012');
const Admin2 = new Admin('netto');
console.log(Admin1);
console.log(Admin2);
