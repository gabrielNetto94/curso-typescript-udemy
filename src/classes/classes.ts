class User {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
const user = new User('Gabriel Netto', 28)

//--------------------------------------------------------------------------------------
//readonly
class Car {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const car = new Car('Fusca')

//--------------------------------------------------------------------------------------
//herança e super
class Machine {
    name
    constructor(name: string) {
        this.name = name
    }
}

class KillerMachine extends Machine {
    guns
    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine('Destroyer Machine', 4)

//console.log(destroyer);

//--------------------------------------------------------------------------------------
//Métodos
class Dwarf {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log('Hello!')
    }

    showName() {
        console.log(`My name is ${this.name}!!`)
    }
}

const jimy = new Dwarf('Jimmy')
//jimy.showName()

//--------------------------------------------------------------------------------------
//getter
class Person {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return `${this.name} ${this.surname}`
    }
}

const gabriel = new Person('Gabriel', 'Netto')

//console.log(gabriel.fullName)

//--------------------------------------------------------------------------------------
//setters
class Coords {

    x!: number
    y!: number

    set fillX(x: number) {
        if (x === 0) {
            return
        }

        this.x = x
    }

    set fillY(y: number) {
        if (y === 0) {
            return
        }

        this.y = y
    }

    get getCoords() {
        return `X = ${this.x} Y = ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillX = 1.123
myCoords.fillY = 3.129392

// console.log(myCoords.getCoords)
// console.log(myCoords)

//--------------------------------------------------------------------------------------
//Herança interface - implements
interface showTitle {

    itemTitle(): string
}

class BlogPost implements showTitle {

    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle(): string {
        return `Título do post: ${this.title}`
    }
}

const post = new BlogPost('First post')

//console.log(post.itemTitle());

//--------------------------------------------------------------------------------------
//Override
class Base {
    someMethod(): void {
        console.log('Something')
    }
}

class Nova extends Base {

    //sobrescrita do método pai
    someMethod(): void {
        console.log('Another something')
    }
}

const myObj = new Nova()
//myObj.someMethod()

//--------------------------------------------------------------------------------------
//Visibilidade
