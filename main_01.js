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

// 1. Создание и вывод объекта:
// Создайте объект person, который содержит следующие свойства: name (строка), age (число), и hobbies (массив строк). Заполните объект произвольными данными. Напишите функцию, которая принимает объект и выводит информацию о человеке в формате: “Name: [name], Age: [age], Hobbies: [hobby1, hobby2, …]”.

const person = 
  {
    name: "sergo",
    age: 5,
    hobbies: ["читать", "играть", "спать"] 
  };

  const obj = (name, age, hobbies) => {
		console.log(`Name: ${name}, Age: ${age}, Hobbies: ${hobbies}`)}

obj(person.name, person.age, person.hobbies)

//  2. Добавление свойств в объект:
// Есть объект student с начальными свойствами name и grade. Напишите функцию, которая добавляет свойство subjects к объекту student. subjects должно быть массивом строк. Функция должна принимать в качестве аргументов объект student и массив предметов, которые изучает студент.

const student = 
{
	name: "Sergey",
	grade: "Student",
}

const subjects = ["js", "html", "css"]

const addedProperties = (obj, array) => {
	obj.subjects = array 
	console.log(student)}
addedProperties(student, subjects);

//  3. Подсчёт среднего балла:
// Создайте объект grades с именами студентов в качестве ключей и массивами оценок в качестве значений. Напишите функцию, которая для каждого студента высчитывает средний балл и возвращает новый объект, где ключами будут имена студентов, а значениями — их средний балл.

const grades = 
{
	lena: [1, 5, 2, 4],
	sasha: [4, 5, 2, 2],
	ivan: [4, 5, 3, 3],
}

function calculationGPA (obj) {
	let counter = 0;
	const ner = {};
	for (let index = 0; index < obj.length; index++) {
		counter += obj[index] / obj.length;
	}
	return console.log(grades.lena);
}
calculationGPA(grades.lena);
calculationGPA(grades.sasha);
calculationGPA(grades.ivan);


//  4. Поиск людей по интересам:
// Пусть у вас есть массив объектов people, где каждый объект представляет человека с его интересами (массив строк). Напишите функцию, которая принимает строку (интерес) и возвращает всех людей, которые разделяют этот интерес.
const people = 
[
 {
	name: "Sergey",
	hobbies: ["Читать", "Играть", "Спать"]
 },
 {
	name: "Rus",
	hobbies: ["Курить", "Работать", "Играть"]
 },
 {
	name: "Tima",
	hobbies: ["Учиться", "Читать", "Спать", "Работать"]
 }
];

const examination = "Работать"

function conclusionsAboutInterests(obj){
	for(let index = 0; index < obj.length; index++){
		const element = obj[index]
		const ner = element.hobbies.includes(examination)
		if (ner === true ) {
			console.log(element.name)
		}
	}

}

conclusionsAboutInterests(people)
// 5. Создай массив объектов, где каждый объект содержит {gender: 'male' | 'female', age: number}, если поле gender равняется 'female', то необходимо найти такое число, которое при вычитании age даст число 18


const humanity = 
[
	{
		name: "Sergey",
		gender: "male",
		age: 27,
	},
	{
		name: "Rus",
		gender: "male",
		age: 22,
	},
	{
		name: "Ангелина",
		gender: "female",
		age: 38,
	},
]
function ageCalculation (obj){
	let x = 0;
	for (let index = 0; index < obj.length; index++) {
		const element = obj[index];
		if (element.gender === "female") {
			x += element.age + 18
		}
	}
	console.log(`число которое при вычитании age даст число 18 будет: ${x} `)
}
ageCalculation (humanity)