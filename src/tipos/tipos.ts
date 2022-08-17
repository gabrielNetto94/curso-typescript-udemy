//Generics - Aceita qualquer tipo e converte para string
function showData<T>(arg: T): string {
    return `O data é ${arg}`
}

// console.log(showData(5))
// console.log(showData('olá'))
// console.log(showData([1,2,3]))

//--------------------------------------------------------------------------------------
//Constraint em generic

function showProductName<T extends { name: string }>(obj: T) {
    return obj.name
}
const obj1 = { name: 'Porta', cor: 'Azul' }
const obj2 = { name: 'Porta', price: '30.2' }
const obj3 = { price: '30.2' }

//console.log(showProductName(obj1))
// console.log(showProductName(obj2))
// console.log(showProductName(obj3)) // ERRO

//--------------------------------------------------------------------------------------
//Interface com generic
interface myObj<U, T> {
    name: string
    wheels: T
    engine: U
}

type CarObj = myObj<number, number>
type Pen = myObj<string, boolean>

//--------------------------------------------------------------------------------------
//Type parameters
// function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
//     return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
// }

//--------------------------------------------------------------------------------------
//Keyof type operator
type CharacterObj = { name: string, age: number, hasDriveLicense: boolean }

type c = keyof CharacterObj

function showCharName(obj: CharacterObj, key: c): string {
    return `${obj[key]}`
}

const myChar: CharacterObj = {
    name: 'Gabriel',
    age: 30,
    hasDriveLicense: true
}
//console.log(showCharName(myChar, 'name'))

//--------------------------------------------------------------------------------------
// typeof type operator
const userName: string = 'Gabriel'
const userName2: typeof userName = 'João'
//const userName3: typeof userName = 30 //ERRO

//--------------------------------------------------------------------------------------
// indexed access types
type Truck = { km: number, kg: number, description: string }

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão leve'
}

function showKm(km: Km) {
    console.log(`O veículo tem ${km} Kilometros`)
}

//showKm(newTruck.km)

//--------------------------------------------------------------------------------------
// Conditional expressions type
interface A {
}

interface Teste {
    showName(): number
}

interface B extends A {
}

type myType = B extends A ? number : string

//const someVar: myType = 5
//const someVar2: myType = 'teste'//ERRO

//se tiver o método showName():number o myTypeB vai ser string, se não boolean
type myTypeB = Teste extends { showName(): number } ? string : boolean

//--------------------------------------------------------------------------------------
//template literals type
type testA = 'text'
type CustomType = `some ${testA}`
const testing: CustomType = 'some text'
// const testing2:CustomType="some text2"
type a1 = 'Testando'
type a2 = 'Union'
type a3 = `${a1}| ${a2}`