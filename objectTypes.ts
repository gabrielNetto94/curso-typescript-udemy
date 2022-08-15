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

console.log(showProducts(pants))
console.log(showProducts({ name: 'Tênis', price: 1.32, isAvailable: false }))