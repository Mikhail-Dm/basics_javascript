/*
    5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
    где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
    переданного значения операции (использовать switch) выполнить одну из арифметических
    операций
    (использовать функции из задания 4) и вернуть полученное значение.
*/

"use strict"
function mathOperation(
    arg1 = parseInt(prompt("Введите первое число")),
    arg2 = parseInt(prompt("Введите второе число")),
    operation = prompt("Введите название операции\n(сложение, вычитание, умножение, деление)").toLowerCase()
) {
    if (isNaN(arg1) || isNaN(arg2)) {
        alert("Некорректный ввод. Попробуйте снова.")
        return mathOperation(
            arg1 = parseInt(prompt("Введите первое число")),
            arg2 = parseInt(prompt("Введите второе число")),
            operation = prompt("Введите название операции\n(сложение, вычитание, умножение, деление)").toLowerCase()
        )
    }
    switch (operation) {
        case "сложение":
            return `Результат сложения: ${arg1 + arg2}`;
        case "вычитание":
            return `Результат вычитания: ${arg1 - arg2}`;
        case "умножение":
            return `Результат умножения: ${(Math.round((arg1 * arg2) * 100)) / 100}`;
        case "деление":
            return `Результат деления: ${(Math.round((arg1 / arg2) * 100)) / 100}`;
        default:
            alert("Некорректный ввод. Попробуйте снова.")
            return mathOperation(
                arg1 = parseInt(prompt("Введите первое число")),
                arg2 = parseInt(prompt("Введите второе число")),
                operation = prompt("Введите название операции\n(сложение, вычитание, умножение, деление)").toLowerCase()
            )
    };
}

alert(mathOperation());