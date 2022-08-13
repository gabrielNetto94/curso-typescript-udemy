let firstName = '2'
let flag = false
let number = 3

function sumNumbers(number1: number, number2: number) {
    return number1 + number2
}

//inference and annotation
let annotation: string = 'teste' //tipa o dado
let inference = 'as' //deixa o typescript tipar

function convertNumberToString(number: number) {
    return `Número convetido para string ${number.toString()}`
}
//console.log(convertNumberToString(9))

let strings: Array<string> //apenas string
let numbers: number[] = []; //apenas números
let arrayAny: any = [] //qualquer dado

arrayAny.push(2)
arrayAny.push('231')
arrayAny.push({ chave: 'valor' })
numbers.push(90)
strings = ['gabriel', 'netto', 'blabla']

//console.log(arrayAny)
//console.log(numbers)
//console.log(strings)

//tipa o parâmetro e retorno
function printText(texto: string): string {
    return `Your text is ${texto}`
}

//tipa o objeto
function printPerson(person: { name: string, age: number }) {
    return `Hello ${person.name}, your age is ${person.age}`
}
//console.log(printPerson({ name: 'Gabriel', age: 28 }))

function showNumber(number1: number, number2?: number): number {

    return number2 !== undefined ? number1 * number2 : number1 * 2
}
//console.log(showNumber(2, 10));

//Union Type, permite parâmetro de diferentes tipos
function unionType(value: Array<number | string>) {

    return `Saldo da conta é ${value}`
}
//console.log(unionType([1, '1']));

//
function showBalance(value: number | string): number | string {

    return `Saldo da conta é ${value}`
}
//console.log(showBalance("23"));


function showUserRole(role: boolean | string) {
    if (typeof role === 'boolean')
        return 'Usuário não autenticado'

    return `User ${role}`
}
//console.log(showUserRole(false))
//console.log(showUserRole('Admin'))

//Type alias
type ID = string | number

type PersonTeste = {
    name: string,
    age: number
}
function typeAlias(id: ID, person: PersonTeste) {
    return `ID: ${id}, Name = ${person.name} - Age = ${person.age}`
}
//console.log(typeAlias(1, { name: 'Gabriel', age: 28 }))

interface Point {
    x: number
    y: number
    z: number
}

const coordObj: Point = {
    x: 1.123,
    y: 14.1233,
    z: 9.9932,
}
function showCoord(obj: Point) {
    console.log(`X = ${obj.x} - Y = ${obj.y} - Z = ${obj.z} `)
}
//showCoord(coordObj)

//Interface x Type alias
interface Person {
    name: string
}

interface Person {
    age: string
}

// Literal types
function showDirection(direction: 'left' | 'top' | 'right' | 'bottom') {
    return direction
}
//console.log(showDirection('right'))

// Non-null Assertion operators
// ! informa para o TS que o elemento não é nulo
const p = document.getElementById('some-p')
//console.log(p!.innerText)

// Bigint
let n: bigint
n = 1000n
//console.log(n)

// Symbol -seta valores únicos para a variável mesmo que sejam iguais
let symbolA: symbol = Symbol('a')
let symbolB = Symbol('a')

//console.log(symbolA == symbolB)
//console.log(symbolA === symbolB)