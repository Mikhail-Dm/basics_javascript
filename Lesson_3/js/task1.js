/*
    1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
    включительно, чтобы результат выглядел так:
    0 – это ноль
    1 – нечетное число
    2 – четное число
    3 – нечетное число
    …
    10 – четное число
    Для решения этой задачи используйте остаток от деления на 2
*/

"use strict"
for (let i = 0; i < 11; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`)
    } else if ((i % 2) == 0) {
        console.log(`${i} - четное число`)
    } else if ((i % 2) != 0) {
        console.log(`${i} - нечетное число`)
    }
}