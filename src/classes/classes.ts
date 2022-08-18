class User {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
const user = new User('Gabriel Netto', 28)

//--------------------------------------------------------------------------------------
//readonly
class Car {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const car = new Car('Fusca')

//--------------------------------------------------------------------------------------
//herança e super
class Machine {
    name
    constructor(name: string) {
        this.name = name
    }
}

class KillerMachine extends Machine {
    guns
    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine('Destroyer Machine', 4)

//console.log(destroyer);

//--------------------------------------------------------------------------------------
//Métodos
class Dwarf {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log('Hello!')
    }

    showName() {
        console.log(`My name is ${this.name}!!`)
    }
}

const jimy = new Dwarf('Jimmy')
//jimy.showName()

//--------------------------------------------------------------------------------------
//getter
class Person {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return `${this.name} ${this.surname}`
    }
}

const gabriel = new Person('Gabriel', 'Netto')

//console.log(gabriel.fullName)

//--------------------------------------------------------------------------------------
//setters
class Coords {

    x!: number
    y!: number

    set fillX(x: number) {
        if (x === 0) {
            return
        }

        this.x = x
    }

    set fillY(y: number) {
        if (y === 0) {
            return
        }

        this.y = y
    }

    get getCoords() {
        return `X = ${this.x} Y = ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillX = 1.123
myCoords.fillY = 3.129392

// console.log(myCoords.getCoords)
// console.log(myCoords)

//--------------------------------------------------------------------------------------
//Herança interface - implements
interface showTitle {

    itemTitle(): string
}

class BlogPost implements showTitle {

    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle(): string {
        return `Título do post: ${this.title}`
    }
}

const post = new BlogPost('First post')

//console.log(post.itemTitle());

//--------------------------------------------------------------------------------------
//Override
class Base {
    someMethod(): void {
        console.log('Something')
    }
}

class Nova extends Base {

    //sobrescrita do método pai
    someMethod(): void {
        console.log('Another something')
    }
}

const myObj = new Nova()
//myObj.someMethod()

//--------------------------------------------------------------------------------------
//public 
class C {
    public x = 10
}

class D extends C {

}
const _c = new C()
//console.log(_c)

//--------------------------------------------------------------------------------------
//protected
class E {
    //atributo acessível apenas por classe que herda
    protected x = 10

    //método acessível apenas por classe que herda
    protected method() {
        console.log('estou protegido')
    }
}
class F extends E {

    showX() {
        console.log('X = ' + this.x)
    }

    showProtectedMethod() {
        this.method()
    }
}
const _f = new F()

//_f.showX()
//_f.showProtectedMethod()

//--------------------------------------------------------------------------------------
//private
class PrivateClass {
    private name = 'Name private'

    showName() {
        return this.name
    }
    private privateMethod() {
        console.log('Método privado')
    }

    showPrivateMethod() {
        return this.privateMethod()
    }
}

const pObj = new PrivateClass()

// console.log(pObj.showName())
// pObj.showPrivateMethod()

class TestingPrivate extends PrivateClass {
    myMethod() {
        this.showPrivateMethod()
    }
}

//--------------------------------------------------------------------------------------
// static menbers
class StaticClass {
    static prop = 'My prop'

    static staticMethod() {
        console.log('Olá, eu sou estático =)')
    }
}

// console.log(StaticClass.prop)
// StaticClass.staticMethod()

//--------------------------------------------------------------------------------------
// generic menbers
class Item<T, U>{
    first
    second

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst() {
        return this.first
    }
}

const item1 = new Item('Primeiro 1º', 'Segundo 2º')
//console.log(item1.showFirst)

const item2 = new Item(true, 90)
//console.log(item2.showFirst)

//--------------------------------------------------------------------------------------
// prameters properties
class ParameterProperties {

    //seta tudo diretamente no construtor
    constructor(public name: string, private qty: number, private price: number) {
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty() {
        return `Qtd total = ${this.qty}`
    }

}

const paramProp = new ParameterProperties('Tênis', 3, 19.90)
//console.log(paramProp.showQty)

//--------------------------------------------------------------------------------------
//class expression
const MyClass = class <T>{
    name

    constructor(name: T) {
        this.name = name
    }
}

const pessoa = new MyClass('teste')
//console.log(pessoa.name)

//--------------------------------------------------------------------------------------
//abstract class
abstract class AbstractClass {

    abstract showName(): string

}
//const myObj = new AbstractClass() //Erro
class AbstractClassExample extends AbstractClass {

    name

    constructor(name: string) {
        super()
        this.name = name
    }

    showName(): string {
        return this.name
    }
}
const abstractClassExample = new AbstractClassExample('Gárgula')

//console.log(abstractClassExample.showName())

//--------------------------------------------------------------------------------------
//Relação entre classes
class Dog {
    name!: string
}
class Cat {
    name!: string
}

//tipa com uma classe e instancia com outa
const dog: Dog = new Cat()

