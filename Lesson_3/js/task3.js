/*
    3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
    15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
*/

"use strict"
const products = [
    {
        id: 3,
        price: 200
    },
    {
        id: 4,
        price: 900
    },
    {
        id: 1,
        price: 1000
    }
];

products.forEach(function (object) {
    object.price -= (object.price / 100) * 15;
    console.log(object);
})