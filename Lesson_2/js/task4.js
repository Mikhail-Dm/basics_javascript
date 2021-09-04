/*
    4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
    параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
    и возвращать результат.
    Обязательно использовать оператор return.
*/

"use strict"

function addition(num1, num2) {
    return num1 + num2
}

function subtraction(num1, num2) {
    return num1 - num2
}

function division(num1, num2) {
    return (Math.round((num1 / num2) * 100)) / 100
}

function multiplication(num1, num2) {
    return (Math.round((num1 * num2) * 100)) / 100
}

let num1 = 7, num2 = 3;
alert(`
    Функция сложения чисел (${num1} + ${num2}), результат: ${addition(num1, num2)}
    Функция разницы чисел (${num1} - ${num2}), результат: ${subtraction(num1, num2)}
    Функция деления чисел (${num1} / ${num2}), результат: ${division(num1, num2)}
    Функция умножения чисел (${num1} * ${num2}), результат: ${multiplication(num1, num2)}
`)