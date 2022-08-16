// 1 - Tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProducts(product: Product) {
    return product
}

const pants: Product = {
    name: 'Calça jeans',
    price: 1.32,
    isAvailable: true
}

//console.log(showProducts(pants))
//console.log(showProducts({ name: 'Tênis', price: 1.32, isAvailable: false }))

//--------------------------------------------------------------------------------------
//Propriedade opcional 
interface IUser {
    email: string
    role?: string
}

function showUserDetails(user: IUser) {
    console.log(`O usuário tem o email: ${user.email}`)

    if (user.role) {
        console.log(`a função do usuário é: ${user.role}`)
    }
}

const User1: IUser = { email: 'email@email.com' }
const User2: IUser = { email: 'email@asda.com', role: 'admin' }

//showUserDetails(User1)
//showUserDetails(User2)

//--------------------------------------------------------------------------------------
//Propriedade readonly
interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: 'VW',
    wheels: 4
}

//console.log(fusca)

//--------------------------------------------------------------------------------------
//index Signature 
//Tipar chave e valor quando não sabe o nome das chaves nem a quantidade
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 1.99
}

//permite adicionar mais chaves
coords.y = 1.33
coords.z = 2.33

//console.log(coords)

//--------------------------------------------------------------------------------------
//Extending types - Herança
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const gabriel: Human = {
    name: 'Gabriel Netto',
    age: 28
}

const goku: SuperHuman = {
    name: '123',
    age: 23,
    superpowers: ['Kamehameha', 'Genki Dama']
}

// console.log(gabriel)
// console.log(goku)

//--------------------------------------------------------------------------------------
//intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

//união de interfaces
type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12
}
//console.log(arnold)

//--------------------------------------------------------------------------------------
//Readonly array não permite modificação diretamente no array
let myArray: ReadonlyArray<string> = ['Maçã', 'Laranja', 'Banana']

//myArray[3] = 'Mamão'//ERRO
//myArray.push('Pêra')//ERRO

myArray.forEach((item) => {
    //console.log(item)
})

//--------------------------------------------------------------------------------------
//Tuplas - tipa a quantidade e o tipo de dado do array
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]

//--------------------------------------------------------------------------------------
//Tupla com readonly
function showNumbers(numbers: readonly [number, number]) {
    //não permite alterar o valor do array recebido
    console.log(numbers[0], numbers[1])
}

//showNumbers([1, 2])
