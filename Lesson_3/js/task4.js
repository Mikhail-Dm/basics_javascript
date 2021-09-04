/*
    4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
    1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
    2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
    https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в
    дополнительных видео в материалах урока.
*/

"use strict"
const products = [
    { id: 3, price: 127, photos: ["1.jpg", "2.jpg"] },
    { id: 5, price: 499, photos: [] },
    { id: 10, price: 26, photos: ["3.jpg"] },
    { id: 8, price: 78 }
], task1 = [];


// Задание 1
for (let i = 0; i < products.length; i++) {
    if ("photos" in products[i] && products[i].photos.length > 0) {
        task1.push(products[i])
    };
}
console.log("Задание 1:")
console.log(task1)


// Задание 2
products.sort(function (price1, price2) {
    if (price1.price > price2.price) {
        return 1
    } else if (price1.price < price2.price) {
        return -1
    } else {
        return 0
    }
})
console.log("\nЗадание 2:")
console.log(products)