//importação método
import importGreet from './greet.js'

//importGreet()


//importação variável
import { x } from './variable.js'
//console.log(x)


//multiplas importações
import { a, testeMethod } from './multiple.js'
//console.log(testeMethod())
//console.log(a)


//importação com alias
import { someName as name } from './chageName.js'
//console.log(name)


//importar tudo de um módulo
import * as numbers from './numbers.js'
// console.log(numbers)
// console.log(numbers.number1)
// console.log(numbers.number2)
//numbers.showNumber()


//importação de tipos
import { Human } from './myType.js'

class User implements Human {
    name
    age
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const Boneco1 = new User('Gabriel', 990)

//console.log(Boneco1)