"use strict";
let firstName = '2';
let flag = false;
let number = 3;
function sumNumbers(number1, number2) {
    return number1 + number2;
}
//inference and annotation
let annotation = 'teste'; //tipa o dado
let inference = 'as'; //deixa o typescript tipar
function convertNumberToString(number) {
    return `Número convetido para string ${number.toString()}`;
}
//console.log(convertNumberToString(9))
let strings; //apenas string
let numbers = []; //apenas números
let arrayAny = []; //qualquer dado
arrayAny.push(2);
arrayAny.push('231');
arrayAny.push({ chave: 'valor' });
numbers.push(90);
strings = ['gabriel', 'netto', 'blabla'];
//console.log(arrayAny)
//console.log(numbers)
//console.log(strings)
//tipa o parâmetro e retorno
function printText(texto) {
    return `Your text is ${texto}`;
}
//tipa o objeto
function printPerson(person) {
    return `Hello ${person.name}, your age is ${person.age}`;
}
//console.log(printPerson({ name: 'Gabriel', age: 28 }))
function showNumber(number1, number2) {
    return number2 !== undefined ? number1 * number2 : number1 * 2;
}
//console.log(showNumber(2, 10));
//Union Type, permite parâmetro de diferentes tipos
function unionType(value) {
    return `Saldo da conta é ${value}`;
}
//console.log(unionType([1, '1']));
//
function showBalance(value) {
    return `Saldo da conta é ${value}`;
}
//console.log(showBalance("23"));
function showUserRole(role) {
    if (typeof role === 'boolean')
        return 'Usuário não autenticado';
    return `User ${role}`;
}
function typeAlias(id, person) {
    return `ID: ${id}, Name = ${person.name} - Age = ${person.age}`;
}
const coordObj = {
    x: 1.123,
    y: 14.1233,
    z: 9.9932,
};
function showCoord(obj) {
    console.log(`X = ${obj.x} - Y = ${obj.y} - Z = ${obj.z} `);
}
// Literal types
function showDirection(direction) {
    return direction;
}
//console.log(showDirection('right'))
// Non-null Assertion operators
// ! informa para o TS que o elemento não é nulo
const p = document.getElementById('some-p');
//console.log(p!.innerText)
// Bigint
let n;
n = 1000n;
//console.log(n)
// Symbol -seta valores únicos para a variável mesmo que sejam iguais
let symbolA = Symbol('a');
let symbolB = Symbol('a');
//console.log(symbolA == symbolB)
//console.log(symbolA === symbolB)
//typeof type guard
