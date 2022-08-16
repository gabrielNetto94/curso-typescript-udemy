"use strict";
//Generics - Aceita qualquer tipo e converte para string
function showData(arg) {
    return `O data é ${arg}`;
}
// console.log(showData(5))
// console.log(showData('olá'))
// console.log(showData([1,2,3]))
//--------------------------------------------------------------------------------------
//Constraint em generic
function showProductName(obj) {
    return obj.name;
}
const obj1 = { name: 'Porta', cor: 'Azul' };
const obj2 = { name: 'Porta', price: '30.2' };
const obj3 = { price: '30.2' };
//--------------------------------------------------------------------------------------
//Type parameters
// function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
//     return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
// }
