/*
    3. Объявить две переменные a и b и задать им целочисленные произвольные начальные
    значения.
    Затем написать скрипт, который работает по следующему принципу:
    - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
    - если а и b отрицательные, вывести их произведение;
    - * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
*/

"use strict"

function comparisonNumber(num1, num2) {
    if (num1 >= 0 && num2 >= 0) {
        if (num1 > num2) {
            return `Числа:\nnumber1 = ${num1}, number2 = ${num2}\n\nРазность положительных чисел: ${num1 - num2}`
        } else {
            return `Числа:\nnumber1 = ${num1}, number2 = ${num2}\n\nРазность положительных чисел: ${num2 - num1}`
        }
    } else if (num1 < 0 && num2 < 0) {
        return `Числа:\nnumber1 = ${num1}, number2 = ${num2}\n\nПроизведение отрицательных чисел: ${num1 * num2}`
    } else {
        return `Числа:\nnumber1 = ${num1}, number2 = ${num2}\n\nСумма чисел с разными знаками: ${num1 + num2}`
    }
}

let num1 = 1, num2 = -2;
alert(comparisonNumber(num1, num2))
console.log(comparisonNumber(num1, num2))