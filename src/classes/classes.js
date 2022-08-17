"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user = new User('Gabriel Netto', 28);
//--------------------------------------------------------------------------------------
//readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const car = new Car('Fusca');
//--------------------------------------------------------------------------------------
//herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine('Destroyer Machine', 4);
//console.log(destroyer);
//--------------------------------------------------------------------------------------
//Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log('Hello!');
    }
    showName() {
        console.log(`My name is ${this.name}!!`);
    }
}
const jimy = new Dwarf('Jimmy');
//jimy.showName()
//--------------------------------------------------------------------------------------
//getter
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const gabriel = new Person('Gabriel', 'Netto');
//console.log(gabriel.fullName)
//--------------------------------------------------------------------------------------
//setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
    }
    get getCoords() {
        return `X = ${this.x} Y = ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 1.123;
myCoords.fillY = 3.129392;
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `Título do post: ${this.title}`;
    }
}
const post = new BlogPost('First post');
//console.log(post.itemTitle());
//--------------------------------------------------------------------------------------
//Override
class Base {
    someMethod() {
        console.log('Something');
    }
}
class Nova extends Base {
    //sobrescrita do método pai
    someMethod() {
        console.log('Another something');
    }
}
const myObj = new Nova();
//myObj.someMethod()
//--------------------------------------------------------------------------------------
//Visibilidade
