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

const myObj = new Myclass()

//myObj.testing()


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

const mutiple = new MultipleDecorators()

//mutiple.testingMultipleDecorators()

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
const paulo = new User('Paulo bla')

//Method decorator
function enumerable(value: boolean) {
    return function (
        target: any,
        property: string,
        descriptor: PropertyDescriptor
    ) {

    }
}
class Machine {
    name

    constructor(name: string) {
        this.name = name
    }

    showName() {
        return 'Nome da máquina é: ' + this.name
    }
}
const trator = new Machine('Tratorzão brabo')