const sum = () => {
    console.log(1)
}

const user = {
    name: 'gabriel',
    sayUsername() {

        var self = this

        setTimeout(function () {
            console.log(self)
            console.log('username ' + self.name)
        }, 1000)
    },

    sayUser() {
        setTimeout(() => {
            console.log(this)
            console.log('username ' + this.name)
        }, 1000)
    }
}
//user.sayUsername()
//user.sayUser()

//filter
const arr = [1, 2, 3, 4, 5, 6]
const highNumber = arr.filter((number) => number >= 4)
//console.log(highNumber)

const users = [
    { name: 'gabriel', avaiable: false },
    { name: 'joao', avaiable: true },
    { name: 'teste', avaiable: false },
    { name: 'teste', avaiable: true }
]
const avaiableUsers = users.filter((user) => user.avaiable)
//console.log(avaiableUsers)

//map
const products = [
    { name: "camisa", price: 10, category: 'roupas' },
    { name: "fogao", price: 10, category: 'eletro' },
    { name: "teste", price: 10, category: 'teste' },
]

products.map((p) => {
    if (p.category == 'roupas') {
        p.onSale = true
    }
})
//console.log(products)

//template literals
const variable = 'bla bla'
const text = `olá ${variable}`
//console.log(text)

//destructuring
const fruits = ['maça', 'laranja', 'laranja']
const [f1, f2, f3] = fruits
//console.log(f1)
const productDetails = {
    name: "mouse",
    price: 30,
    category: 'informatica'
}

const { name: mouse } = productDetails
//console.log(mouse)


//spread operator
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [9, 8, 7, 6]
//console.log(...arr1, ...arr2.reverse())

const carName = { name: 'Gol' }
const carBrand = { brand: 'VW' }
const otherInfos = { km: 1000, price: 1999 }

const car = { ...carName, ...carBrand, ...otherInfos }
//console.log(car)

//Classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa', 199)
//console.log(shirt.name)
//console.log(shirt.productDiscount(10))

//Herança
class ProductWithAtributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }
    showColors() {
        this.colors.forEach((c) => {
            console.log(c)
        })
    }
}

const hat = new ProductWithAtributes('chapéu',99,['blue','red','green','white'])
//hat.showColors()
