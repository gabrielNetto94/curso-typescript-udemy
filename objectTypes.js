"use strict";
function showProducts(product) {
    return product;
}
const pants = {
    name: 'Calça jeans',
    price: 1.32,
    isAvailable: true
};
console.log(showProducts(pants));
console.log(showProducts({ name: 'Tênis', price: 1.32, isAvailable: false }));
