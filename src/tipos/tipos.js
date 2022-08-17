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
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: 'Gabriel',
    age: 30,
    hasDriveLicense: true
};
//console.log(showCharName(myChar, 'name'))
//--------------------------------------------------------------------------------------
// typeof type operator
const userName = 'Gabriel';
const userName2 = 'João';
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão leve'
};
function showKm(km) {
    console.log(`O veículo tem ${km} Kilometros`);
}
const testing = 'some text';
