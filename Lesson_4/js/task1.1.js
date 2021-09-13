/*
    1.1
    (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
    видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
    и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
    make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
    make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
    объект-прототип (как объект transport в уроке).
*/

"use strict"

//                                               Формат es5
// function Produc_es5(name, price) {
//     this.name = name;
//     this.price = price;
// }

// Produc_es5.prototype.show = function () {
//     alert(`Имя продукта: ${this.name}\nЦена: ${this.price}р.`)
// }

// Produc_es5.prototype.make25PercentDiscount = function () {
//     this.name += " (скидка 25%)"
//     this.price -= (this.price / 100 * 25);
// };

// let obj1 = new Produc_es5("Чашка", 100);
// obj1.show();
// obj1.make25PercentDiscount();
// obj1.show();


//                                               Формат es6
class Produc_es6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    show() {
        alert(`Имя продукта: ${this.name}\nЦена: ${this.price}р.`)
    }

    make25PercentDiscount() {
        this.name += " (скидка 25%)"
        this.price -= (this.price / 100 * 25);
    }
}

let obj2 = new Produc_es6("Чашка", 100);
obj2.show();
obj2.make25PercentDiscount();
obj2.show();