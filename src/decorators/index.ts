//Exemplo decorator
function myDecorator() {

    console.log('Iniciando Decorator')

    return function (
        target: any,
        property: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('Executando decorator')
        console.log(target)
        console.log('Property: ' + property)
        console.log(descriptor)
    }
}

class Myclass {

    name!: string

    @myDecorator()
    testing() {
        console.log('Fim do método')
    }
}

//const myObj = new Myclass()

//myObj.testing()

//------------------------------------------------------------------------------------
//decorators multiplos
function decoratorA() {

    return function (
        target: any,
        property: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('executou a')
    }
}

function decoratorB() {

    return function (
        target: any,
        property: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('executou b')
    }
}

function decoratorC() {
    return function (
        target: any,
        property: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('executou c')
    }
}

class MultipleDecorators {

    //ordem de baixo para cima
    @decoratorC()
    @decoratorB()
    @decoratorA()
    testingMultipleDecorators() {
        console.log('terminando execução')
    }
}

//const mutiple = new MultipleDecorators()
//mutiple.testingMultipleDecorators()

//------------------------------------------------------------------------------------
//class decorator
function classDecorator(constructor: Function) {
    console.log(constructor)
    if (constructor.name === 'User') {

        console.log(`Usuário criado!`)
    }
}

@classDecorator
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}
//const paulo = new User('Paulo bla')

//Method decorator
function enumerable(value: boolean) {
    return function (
        target: any,
        property: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value

    }
}
class Machine {
    name

    constructor(name: string) {
        this.name = name
    }

    @enumerable(false)
    showName() {
        console.log(this)
        return 'Nome da máquina é: ' + this.name
    }
}
const trator = new Machine('Tratorzão brabo')

//console.log(trator.showName())

//------------------------------------------------------------------------------------
//Accessor decorator

class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName() {
        return `Nome do monstro ${this.name}`
    }

    get showAge() {
        return `Idade do monstro ${this.age}`
    }
}

const charmander = new Monster('Charmander', 30)

//console.log(charmander)

//------------------------------------------------------------------------------------
//Property decorator

function formatNumber() {
    return function (target: Object, propertyKey: string) {
        let value: string

        const getter = function () {
            return value
        }

        const setter = function (newValue: string) {
            value = newValue.padStart(5, '0')
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
}

class ID {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}

const newItem = new ID('1')
//console.log(newItem)

////------------------------------------------------------------------------------------
//Exemplo Class decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date()
}

@createdDate
class Book {
    id
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Pen {
    id

    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(10)
const newPen = new Pen(12)

console.log(newBook)
console.log(newPen)

//------------------------------------------------------------------------------------
//Exemplo method decorator
function checkIfUserPost() {

    return function (
        target: Object,
        key: string | Symbol,
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value
        //console.log(childFunction)

        //arumentos da função
        descriptor.value = function (...args: any[]) {

            if (args[1] === true) {
                console.log('Usuário já postou')
                return null
            } else {
                //retorna para continuar a execução da função
                return childFunction.apply(this, args)
            }
        }

        return descriptor
    }
}

class Post {
    alreadyPosted = false

    @checkIfUserPost()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true
        console.log(`Post do usuário: ${content}`)
    }
}

const newPost = new Post()

newPost.post('Primeiro Post', newPost.alreadyPosted)
newPost.post('Segundo Post', newPost.alreadyPosted)

//------------------------------------------------------------------------------------
//Property decorator
function Max(limit: number) {
    return function (
        target: Object,
        propertyKey: string,
    ) {
        let value: string

        const getter = function () {
            return value
        }

        const setter = function (newVal: string) {
            if (newVal.length > limit) {
                console.log(`Valor deve ter no máxmimo ${limit} digitos`)
            } else {
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}
class Admin {
    @Max(10)
    username

    constructor(username: string) {
        this.username = username
    }
}

const Admin1 = new Admin('123456789012')
const Admin2 = new Admin('netto')

console.log(Admin1)
console.log(Admin2)
