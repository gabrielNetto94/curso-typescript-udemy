console.log(1)
let firstName = '2'
let flag = false
let number = 3

function printName(name: string) {
    console.log('olá' + name)
}

function sumNumbers(number1: number, number2: number) {
    return number1 + number2
}

//inference and annotation
let annotation: string = 'teste'
console.log(annotation)
//let inference = 'as'

function convertNumberToString(number: number) {
    return `Número convetido para string ${number.toString()}`
}

console.log(convertNumberToString(9))

let strings: Array<string>
let numbers: number[] = [];
let arrayWhatever: any = []

arrayWhatever.push(2)
arrayWhatever.push('231')
arrayWhatever.push({ chave: 'valor' })
numbers.push(90)
strings = ['gabriel', 'netto', 'blabla']

console.log(arrayWhatever)
console.log(numbers)
console.log(strings);

function print(texto: string): string {
    return `Seu texto é: ${texto}`
}

function example(person: { name: string, age: number }) {

    return { name: 'asdasd' }
}
