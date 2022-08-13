"use strict";
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Impossível realizar soma');
    }
}
// sum(1, 2)
// sum('2', '9')
// sum('2', 3)
//checa se valor existe
function operations(numbers, operation) {
    if (operation) {
        if (operation === 'sum') {
            const sum = numbers.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === 'multiply') {
            const multiply = numbers.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log('Defina uma operação');
    }
}
// operations([3, 2, 3], 'sum')
// operations([3, 2, 3], 'multiply')
// operations([1, 2, 3])
//operador instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User('jhon');
const paul = new SuperUser('paul');
//verifica qual classe é o objeto
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log('Olá Superuser');
    }
    else if (user instanceof User) {
        console.log('Olá User');
    }
}
//userGreeting(jhon)
//userGreeting(paul)
//Operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const dog1 = new Dog('dog1');
const dog2 = new Dog('dog2', 'Pastor alemão');
function showDogs(dog) {
    if (dog.breed) {
        console.log('Raça');
        console.log(dog);
    }
    else {
        console.log('SRD');
        console.log(dog);
    }
}
showDogs(dog1);
showDogs(dog2);
