// Задача 1: Функции.
// Задание: Напиши функцию greet, которая принимает имя пользователя в качестве аргумента и возвращает приветствие в виде строки. Например, если имя пользователя - "Серега", функция должна вернуть строку "Привет, Серега!".
// Пример использования функции:
// console.log(greet("Алекс")); "Привет, Алекс!"

function greet(name){
	let beginningGreeting = `Привет ${name}!`;
	return beginningGreeting;

}
console.log(greet("Серёга"));

// Задача 2: Циклы
// Задание: Напиши функцию printSumAndProduct, которая принимает число n и выводит в консоль сумму всех чисел от 1 до n и произведение всех чисел от 1 до n (факториал числа n). Функция должна выводить сумму и произведение в виде двух отдельных сообщений.

function printSumAndProduct(n){
	let sumResult = 0;
	let multiplyResult = 1;
	for (let index = 1; index <= n; index++) {
			sumResult = sumResult + index;
			multiplyResult = multiplyResult * index;
	}
	console.log('Сумма:', sumResult);
	console.log('Умножение:', multiplyResult);
}
printSumAndProduct(5)

// Задача 3: Обобщенная задача на функции и циклы.
// Задание: Напиши функцию countDown, которая принимает число n в качестве аргумента и выводит в консоль обратный отсчёт от n до 1. Используй цикл для реализации обратного отсчёта.
// Пример использования функции:
// printSumAndProduct(5);
// Ожидаемый вывод в консоль:
// Сумма: 15
// Произведение: 120

// Пример использования функции:
// countDown(3);
// Ожидаемый вывод в консоль:
// 3
// 2
// 1

// task #3
function countDown(n) {
	for (let index = n; index >= 1; --index) {
			console.log(index);
	}
}

countDown(5)