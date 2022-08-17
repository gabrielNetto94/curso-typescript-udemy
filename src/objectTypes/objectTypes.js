"use strict";
function showProducts(product) {
    return product;
}
const pants = {
    name: 'Calça jeans',
    price: 1.32,
    isAvailable: true
};
function showUserDetails(user) {
    console.log(`O usuário tem o email: ${user.email}`);
    if (user.role) {
        console.log(`a função do usuário é: ${user.role}`);
    }
}
const User1 = { email: 'email@email.com' };
const User2 = { email: 'email@asda.com', role: 'admin' };
const fusca = {
    brand: 'VW',
    wheels: 4
};
let coords = {
    x: 1.99
};
//permite adicionar mais chaves
coords.y = 1.33;
coords.z = 2.33;
const gabriel = {
    name: 'Gabriel Netto',
    age: 28
};
const goku = {
    name: '123',
    age: 23,
    superpowers: ['Kamehameha', 'Genki Dama']
};
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
};
//console.log(arnold)
//--------------------------------------------------------------------------------------
//Readonly array não permite modificação diretamente no array
let myArray = ['Maçã', 'Laranja', 'Banana'];
//myArray[3] = 'Mamão'//ERRO
//myArray.push('Pêra')//ERRO
myArray.forEach((item) => {
    //console.log(item)
});
const myNumberArray = [1, 2, 3, 4, 5];
//--------------------------------------------------------------------------------------
//Tupla com readonly
function showNumbers(numbers) {
    //não permite alterar o valor do array recebido
    console.log(numbers[0], numbers[1]);
}
//showNumbers([1, 2])
