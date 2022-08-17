// 1 -sem retorno
function withoutReturn(): void {
    console.log('não retorna nada =)')
}
//withoutReturn()

//--------------------------------------------------------------------------------------
// 2- tipando função callback
function greeting(name: string) {
    return (`Olá ${name}`)
}
function preGreeting(f: (nane: string) => string, userName: string) {
    console.log('Preparando função')

    const greet = f(userName)

    console.log(greet)
}
//preGreeting(greeting, 'Gabriel')

//--------------------------------------------------------------------------------------
// 3 - generic function
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

// console.log(firstElement([1, 2, 3]))
// console.log(firstElement(['a', 'b', 'c']))

//Tipando o array
function a(arr: Array<number | boolean>) {

}

function mergeObject<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}
//console.log(mergeObject({ name: 'Gabriel Netto' }, { job:'Programador full stack',age: 28 }))

//--------------------------------------------------------------------------------------
// 4 - constraints -- Deixa genérico para number ou string
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if (+a > +b) {
        biggest = a
    } else {
        biggest = b
    }
    return biggest
}

// console.log(biggestNumber(1,5))
// console.log(biggestNumber('90','9'))


//--------------------------------------------------------------------------------------
// 5 - espeficiar tipo de argumento
function mergeArray<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

//console.log(mergeArray([1, 2, 3], [3, 2, 1]))
//tipo o array que está enviando para a função aceitar os valores
//console.log(mergeArray<number | string>([1, 2, 3], ['gabriel', 'netto', 'blabla']))


//--------------------------------------------------------------------------------------
// 6 - parâmetros opcionais
function modernGreeting(name: string, greet?: string) {
    if (greet) {
        console.log(`Olá ${name}, ${greet}`)
    } else {
        console.log(`Olá ${name}, tudo bem?`)
    }
}

//modernGreeting('gabriel', 'beleza?')
//modernGreeting('gabriel')

//--------------------------------------------------------------------------------------
// 7 - parâmetro default
function somaDefault(n1: number, n2 = 10) {
    console.log(n1 + n2)
}

// somaDefault(1)
// somaDefault(1, 90)

//--------------------------------------------------------------------------------------
// 8 - tipo unknown
function doSomething(x: unknown) {
    if (Array.isArray(x)) {
        console.log(x[0])
    } else if (typeof x === 'number') {
        console.log(x * 2)
    }
}

// doSomething([1,2,3])
// doSomething(4)

//--------------------------------------------------------------------------------------
// 9 - tipo never //semelhante ao void
function showErrosMessage(msg: string): never {
    throw new Error(msg)
}

//showErrosMessage('deu ruim')

//--------------------------------------------------------------------------------------
// 10 - Rest operator  informa que serão vários parâmetro do tipo  NUMBER
function sumAll(...n: number[]) {
    return n.reduce((i, total) => i + total)
}
// console.log(sumAll(1,2,3,4))
// console.log(sumAll(1,2,3,4,2,5,6,7))

//--------------------------------------------------------------------------------------
// 11 - Destructuring como parâmetro
function showProductDetails({ name, price }: { name: string, price: number }): string {
    return `nome: ${name}, preço: ${price}`
}
const shirt = { name: 'Camiseta', price: 42.23 }
const shirt2 = { name: 'Camiseta', price: '42.23' }

//console.log(showProductDetails(shirt)) //ok
//console.log(showProductDetails(shirt2)) //erro