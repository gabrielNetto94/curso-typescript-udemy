"use strict";
console.log(1);
let firstName = '2';
let flag = false;
let number = 3;
function printName(name) {
    console.log('olá' + name);
}
function sumNumbers(number1, number2) {
    return number1 + number2;
}
//inference and annotation
let annotation = 'teste';
console.log(annotation);
//let inference = 'as'
function convertNumberToString(number) {
    return `Número convetido para string ${number.toString()}`;
}
console.log(convertNumberToString(9));
let strings;
let numbers = [];
let arrayWhatever = [];
arrayWhatever.push(2);
arrayWhatever.push('231');
arrayWhatever.push({ chave: 'valor' });
numbers.push(90);
strings = ['gabriel', 'netto', 'blabla'];
console.log(arrayWhatever);
console.log(numbers);
console.log(strings);
function print(texto) {
    return `Seu texto é: ${texto}`;
}
function example(person) {
    return { name: 'asdasd' };
}
