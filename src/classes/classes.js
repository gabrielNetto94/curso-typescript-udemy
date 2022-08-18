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
//public 
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const _c = new C();
//console.log(_c)
//--------------------------------------------------------------------------------------
//protected
class E {
    constructor() {
        //atributo acessível apenas por classe que herda
        this.x = 10;
    }
    //método acessível apenas por classe que herda
    method() {
        console.log('estou protegido');
    }
}
class F extends E {
    showX() {
        console.log('X = ' + this.x);
    }
    showProtectedMethod() {
        this.method();
    }
}
const _f = new F();
//_f.showX()
//_f.showProtectedMethod()
//--------------------------------------------------------------------------------------
//private
class PrivateClass {
    constructor() {
        this.name = 'Name private';
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log('Método privado');
    }
    showPrivateMethod() {
        return this.privateMethod();
    }
}
const pObj = new PrivateClass();
// console.log(pObj.showName())
// pObj.showPrivateMethod()
class TestingPrivate extends PrivateClass {
    myMethod() {
        this.showPrivateMethod();
    }
}
//--------------------------------------------------------------------------------------
// static menbers
class StaticClass {
    static staticMethod() {
        console.log('Olá, eu sou estático =)');
    }
}
StaticClass.prop = 'My prop';
// console.log(StaticClass.prop)
// StaticClass.staticMethod()
//--------------------------------------------------------------------------------------
// generic menbers
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return this.first;
    }
}
const item1 = new Item('Primeiro 1º', 'Segundo 2º');
//console.log(item1.showFirst)
const item2 = new Item(true, 90);
//console.log(item2.showFirst)
//--------------------------------------------------------------------------------------
// prameters properties
class ParameterProperties {
    //seta tudo diretamente no construtor
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total = ${this.qty}`;
    }
}
const paramProp = new ParameterProperties('Tênis', 3, 19.90);
//console.log(paramProp.showQty)
//--------------------------------------------------------------------------------------
//class expression
const MyClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new MyClass('teste');
//console.log(pessoa.name)
//--------------------------------------------------------------------------------------
//abstract class
class AbstractClass {
}
//const myObj = new AbstractClass() //Erro
class AbstractClassExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        return this.name;
    }
}
const abstractClassExample = new AbstractClassExample('Gárgula');
//console.log(abstractClassExample.showName())
//--------------------------------------------------------------------------------------
//Relação entre classes
class Dog {
}
class Cat {
}
//tipa com uma classe e instancia com outa
const dog = new Cat();
